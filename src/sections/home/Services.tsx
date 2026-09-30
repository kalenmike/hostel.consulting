import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import IconBadge from '../../components/IconBadge'
import { SectionHeading } from '../../components/SectionHeading'
import { SERVICES } from '../../data'

export function Services() {
  return (
    <section
      id="services"
      className="bg-ink-2 bg-[url('/images/services-bg.jpg')] bg-cover bg-center py-25"
    >
      <Container>
        <SectionHeading eyebrow="We tailor to your needs" title="Our Services" tone="light" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article key={service.title} className="text-center">
              <IconBadge name={service.icon} size="lg" />
              <h3 className="mb-3 font-condensed text-xl font-normal text-white uppercase">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-300">{service.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact-us/" className="btn btn-outline">
            Get In Touch
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Services
