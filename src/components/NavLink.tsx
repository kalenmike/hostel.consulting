import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type NavLinkProps = {
  to: string
  className?: string
  children: ReactNode
  onClick?: () => void
  [key: string]: unknown
}

// React Router navigates with pushState, which never triggers the browser's
// native anchor scrolling. Fragment links are therefore rendered as plain
// anchors so the browser scrolls to the target itself (and honours
// `scroll-padding-top`, keeping the target clear of the sticky header). Their
// href is prefixed with the Vite base path so they resolve correctly when the
// app is served from a GitHub Pages project sub-path. External URLs (the
// Insights community link) are also plain anchors, since routing them through
// Router would fail.
function NavLink({ to, children, ...rest }: NavLinkProps) {
  const isExternal = /^https?:\/\//.test(to)
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (to.includes('#') || isExternal) {
    return (
      <a href={to.includes('#') ? `${base}${to}` : to} {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}

export default NavLink
