import type { IconType } from 'react-icons'
import {
  FaArrowRight,
  FaArrowTrendUp,
  FaBookOpen,
  FaBuilding,
  FaChartColumn,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaComments,
  FaCompass,
  FaFacebookF,
  FaGraduationCap,
  FaHandshake,
  FaHeartPulse,
  FaInstagram,
  FaLightbulb,
  FaLinkedinIn,
  FaPeopleGroup,
  FaPiggyBank,
  FaUserGear,
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
  book: FaBookOpen,
  building: FaBuilding,
  chart: FaChartColumn,
  check: FaCheck,
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
  comments: FaComments,
  compass: FaCompass,
  facebook: FaFacebookF,
  'graduation-cap': FaGraduationCap,
  handshake: FaHandshake,
  heartbeat: FaHeartPulse,
  instagram: FaInstagram,
  lightbulb: FaLightbulb,
  linkedin: FaLinkedinIn,
  'people-group': FaPeopleGroup,
  'piggy-bank': FaPiggyBank,
  'user-gear': FaUserGear,
  users: FaUsers,
  wrench: FaWrench,
} as const satisfies Record<string, IconType>

export type IconName = keyof typeof ICONS
