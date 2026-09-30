import { useCallback, useState } from 'react'

// Shared index state for the two home-page carousels. Deliberately has no
// timer: the hero's autoplay is driven by the CSS progress animation calling
// `next` on animationend, so timing stays owned by the stylesheet.
export function useCarousel(length: number) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length])
  const goTo = useCallback((i: number) => setIndex(i), [])

  return { index, next, prev, goTo }
}
