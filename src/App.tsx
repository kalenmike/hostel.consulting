import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import HostelLifeHub from './pages/HostelLifeHub'

// Fragment links are plain anchors (see NavLink), so the browser handles anchor
// scrolling natively. Client-side route changes keep the previous scroll offset,
// so reset it whenever the path changes. scrollTop is assigned directly because
// the stylesheet's `scroll-behavior: smooth` turns window.scrollTo() into an
// animation that a rapid follow-up navigation can interrupt.
function ScrollToTopOnPathChange() {
  const { pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    const scroller = document.scrollingElement ?? document.documentElement
    scroller.scrollTop = 0
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTopOnPathChange />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/hostellife-hub/" element={<HostelLifeHub />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
