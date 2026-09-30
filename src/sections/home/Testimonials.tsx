import CarouselButton from '../../components/CarouselButton'
import CarouselDots from '../../components/CarouselDots'
import Container from '../../components/Container'
import { Icon } from '../../components/Icon'
import { SectionHeading } from '../../components/SectionHeading'
import { TESTIMONIALS } from '../../data'
import { useCarousel } from '../../hooks/useCarousel'

export function Testimonials() {
  const { index, next, prev, goTo } = useCarousel(TESTIMONIALS.length)

  return (
    <section id="Testimonial" className="py-12 pb-15">
      <Container>
        <SectionHeading title="Testimonials" tone="accent" />
        <div className="mx-auto mt-10 flex max-w-230 items-center gap-4 md:gap-6">
          <CarouselButton label="Previous testimonial" onClick={prev}>
            <Icon name="chevron-left" className="h-5 w-5" />
          </CarouselButton>

          {/* Every testimonial is rendered into the same grid cell and stretches
              to fill it, so the tallest quote always sets the row height. That
              means flipping between long and short testimonials never changes
              the layout and the page cannot jump. Inactive cards are
              visibility-hidden, which both hides them and removes them from the
              accessibility tree. */}
          <div className="grid flex-1">
            {TESTIMONIALS.map((testimonial, i) => (
              <figure
                key={testimonial.name}
                className={`${
                  i === index ? 'animate-testimonial-fade' : 'invisible'
                } col-start-1 row-start-1 rounded-lg border border-line bg-white p-6 text-center shadow-sm md:p-9`}
              >
                <blockquote className="m-0">
                  {testimonial.quote.split('\n\n').map((paragraph) => (
                    <p key={paragraph} className="mt-0 mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="mt-0 mb-1">
                    <u>
                      <strong>{testimonial.name}</strong>
                    </u>
                  </p>
                  <p className="mt-0 mb-3">
                    <strong>{testimonial.role}</strong>
                  </p>
                  <img src={testimonial.logo} alt="" className="mx-auto" />
                </figcaption>
              </figure>
            ))}
          </div>

          <CarouselButton label="Next testimonial" onClick={next}>
            <Icon name="chevron-right" className="h-5 w-5" />
          </CarouselButton>
        </div>
        <CarouselDots
          count={TESTIMONIALS.length}
          current={index}
          onSelect={goTo}
          getLabel={(i) => `Show testimonial from ${TESTIMONIALS[i].name}`}
          className="mt-6 flex justify-center gap-2"
        />
      </Container>
    </section>
  )
}

export default Testimonials