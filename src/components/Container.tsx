import type { ElementType, ReactNode } from 'react'

// The original's `.max-width` container is 1280px, which is what `wide`
// tracks. The narrower variants stay for reading columns and the footer.
const WIDTHS = {
  narrow: 'max-w-190',
  copy: 'max-w-215',
  mid: 'max-w-230',
  wide: 'max-w-320',
} as const

export type ContainerWidth = keyof typeof WIDTHS

// The centered, gutter-padded wrapper used by nearly every section. Having one
// component means the gutters and max-width scale stay in sync site-wide.
export function Container({
  width = 'wide',
  as: Tag = 'div',
  gutter = true,
  className = '',
  children,
}: {
  width?: ContainerWidth
  as?: ElementType
  // Set false where an ancestor already provides the horizontal padding, such
  // as the footer, so gutters don't stack.
  gutter?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <Tag
      className={`mx-auto ${WIDTHS[width]} ${gutter ? 'px-5' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Container
