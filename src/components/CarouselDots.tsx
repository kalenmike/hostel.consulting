const VARIANTS = {
  hero: {
    base: 'h-3 w-3 cursor-pointer rounded-full border-3 border-[#e5e5e5]',
    active: 'bg-[#666]',
    idle: 'bg-[#999]',
    ariaCurrent: false,
  },
  accent: {
    base: 'h-2.5 w-2.5 cursor-pointer rounded-full border-2 border-accent transition-colors',
    active: 'bg-accent',
    idle: 'bg-transparent hover:bg-frost',
    ariaCurrent: true,
  },
} as const

// Shared dot navigation for the hero slider and the testimonial carousel. The
// two were near-identical copies; the remaining differences (size, palette,
// aria-current) are declared as variants so both stay data-driven.
export function CarouselDots({
  count,
  current,
  onSelect,
  getLabel,
  variant = 'accent',
  className = '',
}: {
  count: number
  current: number
  onSelect: (index: number) => void
  getLabel: (index: number) => string
  variant?: keyof typeof VARIANTS
  className?: string
}) {
  const { base, active, idle, ariaCurrent } = VARIANTS[variant]
  return (
    <div className={className}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={getLabel(i)}
          aria-current={ariaCurrent ? i === current : undefined}
          className={`${base} ${i === current ? active : idle}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  )
}

export default CarouselDots
