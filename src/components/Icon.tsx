import { ICONS } from './icon-registry'
import type { IconName } from './icon-registry'

// Icons here are always decorative: the surrounding heading, button or link
// already carries the accessible name, so they are hidden from assistive tech.
export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Glyph = ICONS[name]
  return <Glyph className={className} aria-hidden="true" />
}

export default Icon
