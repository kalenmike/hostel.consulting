// Vite rewrites url() references in CSS and asset links in index.html, but it
// does not touch hard-coded src strings in components or data. Prefixing paths
// with the base path keeps every public/ asset loadable when the app is served
// from a GitHub Pages project sub-path (e.g. /hostel.consulting/).
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
}