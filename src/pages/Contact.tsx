import Container from '../components/Container'
import PageHero from '../components/PageHero'
import { PageHeading } from '../components/SectionHeading'

function Contact() {
  return (
    <>
      <PageHero align="center">
        <Container>
          <PageHeading as="h1" size="xl" tone="light" className="m-0">
            Contact Us
          </PageHeading>
        </Container>
      </PageHero>

      <section className="py-18">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/images/power-your-hostel.png"
              alt="Power your hostel"
              className="mb-5 max-w-105"
            />
            <p>
              Sending us a message is free! As every hostel&rsquo;s situation, needs and budgets
              vary, just let us know what you feel your hostel&rsquo;s opportunities are and what you
              would like guidance in.
            </p>
            <p>
              We will be in touch to discuss your situation and make an offer for assistance with
              absolutely zero obligation to sign up.
            </p>

            <PageHeading size="md">E-mail Us</PageHeading>
            <p>
              <a href="mailto:info@hostel.consulting" className="text-xl font-bold">
                info@hostel.consulting
              </a>
            </p>

            <PageHeading size="md">Visit our office on HostelLife Hub</PageHeading>
            <a
              href="https://community.hostellifehub.com/c/hostel-consulting/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/hub-logo.png" alt="HostelLife Hub" className="mb-2 block max-w-65" />
            </a>
            <p className="text-sm text-muted">Visit our office on HostelLife Hub</p>
          </div>

          <form
            className="rounded-lg border border-line bg-mist p-8"
            action="mailto:info@hostel.consulting"
            method="post"
            encType="text/plain"
          >
            <PageHeading className="mb-5">Contact Form</PageHeading>
            <label className="mb-4 block font-semibold text-ink">
              Your Name (required)
              <input type="text" name="your-name" required className="field" />
            </label>
            <label className="mb-4 block font-semibold text-ink">
              Your Email (required)
              <input type="email" name="your-email" required className="field" />
            </label>
            <label className="mb-4 block font-semibold text-ink">
              Hostel Name
              <input type="text" name="hostel-name" className="field" />
            </label>
            <label className="mb-4 block font-semibold text-ink">
              Location
              <input type="text" name="location" className="field" />
            </label>
            <label className="mb-4 block font-semibold text-ink">
              Subject (required)
              <input type="text" name="subject" required className="field" />
            </label>
            <label className="mb-5 block font-semibold text-ink">
              Your Message
              <textarea name="your-message" rows={6} className="field" />
            </label>
            <button type="submit" className="btn btn-accent">
              Send
            </button>
          </form>
        </Container>
      </section>
    </>
  )
}

export default Contact
