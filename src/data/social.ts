import type { IconName } from '../components/icon-registry'

// `label` drives the accessible name; `icon` is looked up in the shared registry.
export const SOCIAL_LINKS: { label: string; href: string; icon: IconName }[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/hostelexperts/',
    icon: 'facebook',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/hostel.consulting',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hostel.consulting/',
    icon: 'instagram',
  },
]
