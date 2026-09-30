import type { ElementType, ReactNode } from 'react'

const SIZES = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
  xl: 'text-5xl',
} as const

const TONES = {
  ink: '',
  accent: 'text-accent',
  light: 'text-white',
} as const

export type HeadingSize = keyof typeof SIZES
export type HeadingTone = keyof typeof TONES

// Two families of heading exist across the site and they used to be hand-rolled
// at every call site. They share the size and tone scales above so a type-scale
// change lands everywhere at once.
//
// 1. SectionHeading - the uppercase, bold band headings on the home page,
//    optionally preceded by a small uppercase eyebrow.
// 2. PageHeading - sentence-case titles on the interior pages.

export function SectionHeading({
  title,
  eyebrow,
  tone = 'ink',
  align = 'center',
}: {
  title: string
  eyebrow?: string
  tone?: HeadingTone
  align?: 'left' | 'center'
}) {
  const alignClass = align === 'center' ? 'text-center' : ''

  // The wrapper only exists to hold the eyebrow beneath the title. When it is
  // present the wrapper already centres the text, so only unwrapped headings
  // need the alignment class on the heading itself. The bottom margin separates
  // the heading block from the description that follows it in every section.
  if (!eyebrow) {
    return (
      <h2 className={`mb-9 text-4xl font-normal ${TONES[tone]} ${alignClass}`}>{title}</h2>
    )
  }

  return (
    <div className={`mb-9 ${alignClass}`}>
      <h2 className={`text-4xl font-normal ${TONES[tone]}`}>{title}</h2>
      <span
        className={`mt-3 block text-sm font-medium tracking-widest uppercase ${
          tone === 'light' ? 'text-frost' : 'text-accent'
        }`}
      >
        {eyebrow}
      </span>
    </div>
  )
}

export function PageHeading({
  as: Tag = 'h2',
  size = 'md',
  tone = 'ink',
  align = 'left',
  uppercase = false,
  className = '',
  children,
}: {
  as?: ElementType
  size?: HeadingSize
  tone?: HeadingTone
  align?: 'left' | 'center'
  uppercase?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <Tag
      className={`${SIZES[size]} ${TONES[tone]} ${
        align === 'center' ? 'text-center' : ''
      } ${uppercase ? 'uppercase' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
