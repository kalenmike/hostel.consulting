import type { IconType } from 'react-icons'
import {
  FaArrowRight,
  FaArrowTrendUp,
  FaBuilding,
  FaChartColumn,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaHeartPulse,
  FaInstagram,
  FaLinkedinIn,
  FaUsers,
  FaWrench,
} from 'react-icons/fa6'

// Every icon in the app is declared here once. `as const satisfies` keeps the
// literal key union (so IconName is exactly these keys) while still checking
// that each value is a valid react-icons component.
//
// Kept in a .ts file separate from the <Icon /> component so this module
// exports no components, which preserves React Fast Refresh.
export const ICONS = {
  'arrow-right': FaArrowRight,
  'trend-up': FaArrowTrendUp,
  building: FaBuilding,
  chart: FaChartColumn,
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
  facebook: FaFacebookF,
  heartbeat: FaHeartPulse,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  users: FaUsers,
  wrench: FaWrench,
} as const satisfies Record<string, IconType>

export type IconName = keyof typeof ICONS
