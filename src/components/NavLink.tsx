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
// `scroll-padding-top`, keeping the target clear of the sticky header).
// External URLs (the Insights community link) are also plain anchors, since
// routing them through Router would fail.
function NavLink({ to, children, ...rest }: NavLinkProps) {
  const isExternal = /^https?:\/\//.test(to)
  if (to.includes('#') || isExternal) {
    return (
      <a href={to} {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
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
