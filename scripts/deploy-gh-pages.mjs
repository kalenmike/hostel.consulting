import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import { publish } from 'gh-pages'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// The site is served from a sub-path (https://<owner>.github.io/<repo>/), so
// the build needs the base path and sitemap origin to match the repository.
// They are derived from the GitHub remote, and can be overridden with
// GITHUB_OWNER / REPO_NAME / SITE_URL for a custom domain.
function remoteInfo() {
  try {
    const url = execSync('git config --get remote.origin.url', {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    const match = url.match(/(?:github\.com[:/])([^/]+)\/([^/.]+)(?:\.git)?$/)
    if (match) return { owner: match[1], repo: match[2] }
  } catch {
    /* no remote yet */
  }
  return null
}

const info = remoteInfo()
const owner = process.env.GITHUB_OWNER || info?.owner || ''
const repo = process.env.REPO_NAME || info?.repo || ''
const siteUrl = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://hostel.consulting')
const basePath = `/${repo}/`

if (!repo) {
  console.error(
    'Could not determine the repository name. Add a GitHub remote (git remote add origin <url>) or set REPO_NAME.',
  )
  process.exit(1)
}

process.env.SITE_URL = siteUrl
process.env.VITE_BASE_PATH = basePath

console.log(`Building with base path ${basePath} and site URL ${siteUrl}`)
execSync('pnpm build', { cwd: root, stdio: 'inherit', env: process.env })

console.log('Publishing dist/ to the gh-pages branch...')
publish(
  resolve(root, 'dist'),
  {
    dot: true,
    message: 'Deploy static site',
    // Only needed when there is no origin remote configured.
    ...(process.env.REPO_URL ? { repo: process.env.REPO_URL } : {}),
  },
  (err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log('Deployed to gh-pages.')
  },
)