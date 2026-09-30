import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data'
import NavLink from './NavLink'

function Header() {
  const [open, setOpen] = useState(false)
  const [testimonialsInView, setTestimonialsInView] = useState(false)
  const location = useLocation()

  // Track whether the Testimonials section is on screen so the nav can
  // highlight "Testimonials" instead of "Home" while it is being viewed.
  useEffect(() => {
    if (location.pathname !== '/') return
    const el = document.getElementById('Testimonial')
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setTestimonialsInView(entry.isIntersecting),
      { rootMargin: '-80px 0px -45% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [location.pathname, location.hash])

  const onHome = location.pathname === '/'
  const isExternal = (to: string) => to.startsWith('http')

  const isActive = (to: string) => {
    if (isExternal(to)) return false
    const [path, hash] = to.split('#')
    if (hash) return onHome && testimonialsInView
    if (path === '/') return onHome && !testimonialsInView
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-100 border-b border-line bg-white">
      <div className="mx-auto flex h-19 max-w-300 items-center justify-between px-5">
        <Link to="/" className="block" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Hostel Consulting"
            className="block w-[175px] shrink-0 max-md:w-[140px]"
          />
        </Link>
        <button
          type="button"
          className="cursor-pointer rounded-lg border border-line px-3.5 py-2 text-sm text-ink md:hidden"
          aria-label="Navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Navigation
        </button>
        <nav
          className={`md:flex md:flex-row md:items-center md:gap-7 max-md:absolute max-md:left-0 max-md:right-0 max-md:top-19 max-md:flex-col max-md:gap-0 max-md:border-b max-md:border-line max-md:bg-white max-md:px-5 max-md:py-3 ${
            open ? 'flex' : 'hidden'
          }`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={`flex h-19 items-center px-2.5 text-base font-semibold tracking-[0.05em] text-black uppercase transition-shadow duration-200 max-md:h-auto max-md:text-sm ${
                isActive(link.to)
                  ? 'shadow-[inset_0_4px_0_0_#02aed6]'
                  : 'shadow-none hover:shadow-[inset_0_4px_0_0_#02aed6]'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header