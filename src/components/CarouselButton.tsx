import type { ReactNode } from 'react'

// Circular outlined control used by the testimonial carousel's prev/next
// buttons, which were byte-identical duplicates of each other.
export function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-accent text-accent transition-colors hover:bg-accent hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CarouselButton
