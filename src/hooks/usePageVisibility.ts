import { useEffect, useState } from 'react'

// True while the browser window is focused. Used to pause the hero's autoplay
// and progress bar so slides don't advance while the tab is in the background.
export function usePageVisibility() {
  // There is no window focus to lose on the server, so prerendered HTML is
  // emitted as focused and the progress animation starts running.
  const [focused, setFocused] = useState(() =>
    typeof document === 'undefined' ? true : document.hasFocus(),
  )

  useEffect(() => {
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)
    return () => {
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [])

  return focused
}
