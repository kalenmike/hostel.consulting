import CarouselDots from '../../components/CarouselDots'
import { useCarousel } from '../../hooks/useCarousel'
import { usePageVisibility } from '../../hooks/usePageVisibility'

const SLIDES = [
  {
    title: 'Consulting',
    bg: '/images/experts-at-work.jpg',
    logo: true,
  },
  {
    title: 'Operational Diagnosis',
    bg: '/images/operational-diagnosis.jpg',
    subtitle: 'Operations, Revenue Management,\nMarketing and Sales, IT, Supply Chain and Finances.',
  },
  {
    title: 'Action Plan',
    bg: '/images/action-plan.jpg',
    subtitle: 'Creation of a comprehensive\nAction Plan to strengthen opportunities',
  },
  {
    title: 'Revenue Management',
    bg: '/images/mystery-guest.jpg',
    subtitle: 'We can help your hostel through our Revenue Management team.',
  },
]

export function Hero() {
  const { index, next, goTo } = useCarousel(SLIDES.length)
  const pageFocused = usePageVisibility()
  const slide = SLIDES[index]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 z-10 h-[8.5px] bg-line" role="presentation">
        <div
          key={index}
          className="h-full animate-slider-progress bg-accent"
          style={{ animationPlayState: pageFocused ? 'running' : 'paused' }}
          onAnimationEnd={next}
        />
      </div>
      <div
        className="relative flex h-140 items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slide.bg})` }}
      >
        <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative px-5">
          {slide.logo ? (
            <img
              src="/images/slider-logo.png"
              alt="Hostel Consulting"
              className="mx-auto max-w-105"
            />
          ) : (
            <div className="text-center">
              <div key={`title-${index}`} className="hero-reveal">
                <a
                  href="#services"
                  className="block animate-slide-title-up font-sans text-5xl font-bold text-black hover:opacity-80"
                >
                  {slide.title}
                </a>
              </div>
              <div className="mx-auto my-2 h-1 w-88 bg-accent" />
              {slide.subtitle && (
                <div key={`sub-${index}`} className="hero-reveal mt-3">
                  <p className="mx-auto mb-0 max-w-150 animate-slide-text-down font-condensed text-base font-normal leading-6 text-black">
                    {slide.subtitle.split('\n').map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <CarouselDots
        count={SLIDES.length}
        current={index}
        onSelect={goTo}
        getLabel={(i) => `Slide ${i + 1}: ${SLIDES[i].title}`}
        variant="hero"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5"
      />
    </section>
  )
}

export default Hero
