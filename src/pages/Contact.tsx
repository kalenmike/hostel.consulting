import Container from '../components/Container'
import { asset } from '../lib/assets'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import { PageHeading } from '../components/SectionHeading'

// Layout mirrors the original: a flat dark band holding the title and the
// wordmark, then a centred intro, then a 1/3 + 2/3 split where the narrow left
// column stays centred and the contact form runs down the wider right column.
function Contact() {
  return (
    <>
      <PageHero align="center" variant="band" padding="sm">
        <Container>
          <PageHeading as="h1" size="xl" tone="light" className="mb-0 tracking-tight">
            Contact Us
          </PageHeading>
          <img src={asset('/images/power-your-hostel.png')} alt="Hostel Consulting" className="mx-auto w-75" />
        </Container>
      </PageHero>

      <section className="py-11">
        <Container>
          <p className="text-center text-black">
            Sending us a message is <span className="text-accent">free</span>! As every
            hostel&rsquo;s situation, needs and budgets vary, just let us know what you feel your
            hostel&rsquo;s opportunities are and what you would like guidance in. We will be in
            touch to discuss your situation and make an offer for assistance with absolutely zero
            obligation to sign up.
          </p>
        </Container>
      </section>

      <section className="pt-12 pb-25">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="text-center">
            <PageHeading size="lg">E-mail Us</PageHeading>
            <p className="mt-5">
              <a href="mailto:info@hostel.consulting">info@hostel.consulting</a>
            </p>

            <div className="mt-12">
              <PageHeading size="lg">Visit our office on HostelLife Hub</PageHeading>
              <a
                href="https://community.hostellifehub.com/c/hostel-consulting/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 block"
              >
                <img
                  src={asset('/images/hostellife-hub-logo.png')}
                  alt="HostelLife Hub"
                  className="media-frame mx-auto w-full max-w-95"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
