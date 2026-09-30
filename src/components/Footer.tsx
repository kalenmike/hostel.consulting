import Container from '../components/Container'
import { Icon } from './Icon'
import { NAV_LINKS, SOCIAL_LINKS } from '../data'
import NavLink from './NavLink'

function Footer() {
  return (
    <footer className="bg-ink-2 px-5 py-10 text-center text-slate-300">
      <div className="mx-auto mb-7 flex max-w-300 justify-center gap-4.5">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-accent"
          >
            <Icon name={social.icon} className="h-5 w-5" />
          </a>
        ))}
      </div>
      <Container gutter={false}>
        <div className="mb-5 flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-slate-300 hover:text-white">
              {link.label}
            </NavLink>
          ))}
        </div>
        <p className="text-slate-300">
          Also home to{' '}
          <a
            href="https://community.hostellifehub.com/"
            target="_blank"
            rel="noreferrer"
            className="text-frost"
          >
            HostelLife Hub
          </a>
          , our global hostel community.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          &copy; 2026 Hostel Consulting. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
