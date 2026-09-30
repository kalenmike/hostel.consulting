import About from '../sections/home/About'
import CTA from '../sections/home/CTA'
import Hero from '../sections/home/Hero'
import Services from '../sections/home/Services'
import Testimonials from '../sections/home/Testimonials'
import Why from '../sections/home/Why'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Why />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home
