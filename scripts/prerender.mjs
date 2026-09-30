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

// The build does not know the deployed origin, so the absolute URLs used by
// robots.txt and sitemap.xml come from SITE_URL (defaulting to the brand
// domain). For GitHub Pages, set SITE_URL to https://<owner>.github.io and let
// VITE_BASE_PATH supply the repository sub-path.
const siteUrl = (process.env.SITE_URL || 'https://hostel.consulting').replace(/\/+$/, '')
const basePath = process.env.VITE_BASE_PATH || '/'
const base = basePath.endsWith('/') ? basePath : `${basePath}/`
const absoluteUrl = (path) => siteUrl + base + path.replace(/^\//, '')

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

// robots.txt and sitemap.xml for search engines. The routes above are the only
// crawlable pages, so the sitemap is derived from them rather than hand-kept.
const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map(
    (route) =>
      `  <url>\n    <loc>${absoluteUrl(route.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`,
  )
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap)
console.log('generated dist/sitemap.xml')

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}${base}sitemap.xml\n`
writeFileSync(resolve(root, 'dist/robots.txt'), robots)
console.log('generated dist/robots.txt')

function titleFor(path) {
  if (path.startsWith('/contact-us')) return 'Contact Us'
  if (path.startsWith('/hostellife-hub')) return 'HostelLife Hub'
  return 'Home'
}