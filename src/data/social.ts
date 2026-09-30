import type { IconName } from '../components/icon-registry'

// `label` drives the accessible name; `icon` is looked up in the shared
// registry. `square` marks the brand badges the original renders as solid
// squares (facebook, linkedin) as opposed to the bare glyph (instagram).
export const SOCIAL_LINKS: { label: string; href: string; icon: IconName; square?: boolean }[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/hostelexperts/',
    icon: 'facebook',
    square: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/hostel.consulting',
    icon: 'linkedin',
    square: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hostel.consulting/',
    icon: 'instagram',
  },
]