import Container from '../components/Container'
import { Icon } from './Icon'
import { NAV_LINKS, SOCIAL_LINKS } from '../data'
import NavLink from './NavLink'

// The original footer is a slim white bar: the nav menu (uppercase, accent
// blue, letter-spaced), then the social links beneath it, then the colophon
// line. It carries no dark background - that was this clone's invention - and
// the facebook/linkedin links sit on the square brand badges the original
// draws while instagram stays as the bare camera glyph.
function Footer() {
  return (
    <footer className="bg-white px-5 py-4 text-center text-[10px] text-muted">
      <Container gutter={false}>
        <ul className="my-3 flex flex-wrap justify-center gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className="font-normal uppercase tracking-[0.2em] text-accent hover:text-accent"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mb-3 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-accent"
            >
              {social.square ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-accent text-white">
                  <Icon name={social.icon} className="h-3 w-3" />
                </span>
              ) : (
                <Icon name={social.icon} className="h-5 w-5" />
              )}
            </a>
          ))}
        </div>

        <p className="mt-4 text-sm tracking-wider">
          Also home to{' '}
          <a
            href="https://community.hostellifehub.com/"
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            HostelLife Hub
          </a>
          , our global hostel community.
        </p>
      </Container>
    </footer>
  )
}

export default Footer