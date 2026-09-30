import { Icon } from './Icon'
import type { IconName } from './icon-registry'

const SIZES = {
  md: { box: 'h-20 w-20', icon: 'h-10 w-10' },
  lg: { box: 'h-24 w-24', icon: 'h-12 w-12' },
} as const

// Accent-outlined circle holding a single icon. Used for the service cards and
// the New/Existing hostel columns, which were three copies of the same markup.
export function IconBadge({
  name,
  size = 'md',
  className = '',
}: {
  name: IconName
  size?: keyof typeof SIZES
  className?: string
}) {
  const { box, icon } = SIZES[size]
  return (
    <div
      className={`mx-auto mb-4 flex ${box} items-center justify-center rounded-full border-4 border-accent text-accent ${className}`}
    >
      <Icon name={name} className={icon} />
    </div>
  )
}

export default IconBadge
