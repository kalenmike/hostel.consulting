import type { ReactNode } from 'react'

const PADDING = {
  sm: 'py-5',
  md: 'py-15',
  lg: 'py-18',
} as const

// Two treatments exist. The HostelLife Hub page sits on the brand gradient,
// while Contact uses the flat translucent dark band the original renders with
// no background image at all.
const VARIANTS = {
  gradient: 'bg-gradient-to-tr from-[#0f3d4d] via-[#0b7ea6] to-accent',
  band: 'bg-black/78',
} as const

// Brand banner used at the top of the interior pages. The gradient literal was
// previously duplicated between Contact and HostelLifeHub.
export function PageHero({
  align = 'left',
  padding = 'md',
  variant = 'gradient',
  className = '',
  children,
}: {
  align?: 'left' | 'center'
  padding?: keyof typeof PADDING
  variant?: keyof typeof VARIANTS
  className?: string
  children: ReactNode
}) {
  return (
    <section
      className={`${VARIANTS[variant]} ${PADDING[padding]} text-white ${
        align === 'center' ? 'text-center' : ''
      } ${className}`}
    >
      {children}
    </section>
  )
}

export default PageHero
