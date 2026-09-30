import Container from '../../components/Container'
import { SectionHeading } from '../../components/SectionHeading'

export function About() {
  return (
    <section className="py-15 text-center">
      <Container width="narrow">
        <SectionHeading
          eyebrow="Bringing Industry Experts & Hostels Together"
          title="We are hostel.consulting"
        />
        <p className="mx-auto mb-4 max-w-190">
          Hostel.consulting helps address the root causes of reoccurring problems and identify a
          variety of opportunities in your hostel.
        </p>
        <p className="mx-auto max-w-190">
          Our services are proven to achieve results in customer satisfaction ratings, increased
          revenue, marketing, bottom-line profitability, and overall operational efficiency.
        </p>
        <div className="media-frame mx-auto mt-8 max-w-200 overflow-hidden">
          <iframe
            width="100%"
            height="440"
            src="https://www.youtube.com/embed/uDPipMV1rq0?rel=0&showinfo=0"
            title="Hostel.consulting video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  )
}

export default About
