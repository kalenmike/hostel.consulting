import type { ReactNode } from 'react'

const PADDING = {
  md: 'py-15',
  lg: 'py-18',
} as const

// Brand gradient banner used at the top of the interior pages. The three-stop
// gradient literal was previously duplicated between Contact and HostelLifeHub.
export function PageHero({
  align = 'left',
  padding = 'md',
  className = '',
  children,
}: {
  align?: 'left' | 'center'
  padding?: keyof typeof PADDING
  className?: string
  children: ReactNode
}) {
  return (
    <section
      className={`bg-gradient-to-tr from-[#0f3d4d] via-[#0b7ea6] to-accent ${
        PADDING[padding]
      } text-white ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {children}
    </section>
  )
}

export default PageHero
