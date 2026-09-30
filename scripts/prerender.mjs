import { createServer } from 'vite'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/contact-us/', file: 'contact-us/index.html' },
  { path: '/hostellife-hub/', file: 'hostellife-hub/index.html' },
]

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
})

for (const route of routes) {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const appHtml = await render(route.path)
  const html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(
      '<title>Home - Hostel Consulting</title>',
      route.path === '/'
        ? '<title>Home - Hostel Consulting</title>'
        : '<title>' + titleFor(route.path) + ' - Hostel Consulting</title>',
    )
  const outFile = resolve(root, 'dist', route.file)
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, html)
  console.log('prerendered', route.path, '->', route.file)
}

await vite.close()

function titleFor(path) {
  if (path.startsWith('/contact-us')) return 'Contact Us'
  if (path.startsWith('/hostellife-hub')) return 'HostelLife Hub'
  return 'Home'
}