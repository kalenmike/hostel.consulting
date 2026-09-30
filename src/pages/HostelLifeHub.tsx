import Container from '../components/Container'
import PageHero from '../components/PageHero'
import { PageHeading } from '../components/SectionHeading'

const PILLARS = [
  {
    title: 'Community-Focused',
    body: 'Built on a self-sustaining network where you\u2019re never alone.',
  },
  {
    title: 'Built on Expertise',
    body: 'Informed by years of hands-on work with unique hostels worldwide.',
  },
  {
    title: 'Collaborative, Not Competitive',
    body: 'This isn\u2019t about selling you consultancy or tools. It\u2019s about building a supportive network geared to boost every hostel\u2019s success.',
  },
]

const BENEFITS = [
  'Find & Share solutions to real hostel challenges',
  'Learn & Grow through courses & mentorship',
  'Hire & Train Smarter by finding, recruiting, and training the right staff efficiently',
  'Join region-based groups to tackle local challenges together',
  'Network with hostel professionals for partnerships, & collaboration',
  'Save Money with exclusive supplier deals, industry discounts, and cost-saving strategies',
]

function HostelLifeHub() {
  return (
    <>
      <PageHero padding="lg">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-2 font-bold tracking-widest text-sky-200 uppercase">
              visit hostellife hub web
            </p>
            <PageHeading as="h1" size="lg" tone="light">
              Welcome To The Hostel Industry&rsquo;s Very Own Virtual Coworking Space
            </PageHeading>
            <p className="mt-4 text-xl text-white">
              Where hostel professionals connect, collaborate, and thrive together
            </p>
          </div>
          <img src="/images/hub-logo.png" alt="HostelLife Hub" className="mx-auto max-w-80" />
        </Container>
      </PageHero>

      <section className="py-18">
        <Container width="copy">
          <PageHeading size="sm" tone="accent" uppercase>
            The Challenge:
          </PageHeading>
          <PageHeading as="h3" size="md">
            Running a Hostel Can Be Isolating
          </PageHeading>
          <p>
            Hostel professionals are some of the most passionate people in hospitality. But when it
            comes to <strong>finding support, reliable training, and a strong professional network</strong>, the
            options are limited.
          </p>
          <p>
            Most hostel owners and teams <strong>rely on trial and error</strong>, online searches, or scattered
            industry groups to navigate the complexities of running a successful hostel wasting time
            and energy that could be spent elevating guest experiences.
          </p>
          <p className="text-xl font-bold text-ink">What if there was one place built just for us?</p>
        </Container>
      </section>

      <section className="py-18">
        <Container width="copy">
          <PageHeading size="sm" tone="accent" uppercase>
            The Solution:
          </PageHeading>
          <PageHeading as="h3" size="md">
            An Online Community Built <em>by</em> Hostel Professionals, <em>for</em> Hostel Professionals
          </PageHeading>
          <img src="/images/hub-design.png" alt="HostelLife Hub" className="media-frame my-5" />
          <p>
            <strong>HostelLife Hub</strong> is a <strong>collaborative space</strong> designed to bring
            together hostel industry experts, owners, managers, and even staff to{' '}
            <strong>share knowledge, connect with peers, and grow their businesses — together.</strong>
          </p>
          <ul className="hub-benefits">
            {BENEFITS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="text-xl font-bold text-ink">
            More than just an e-learning and resource platform, it&rsquo;s a movement where{' '}
            <strong>hostels support hostels</strong>.
          </p>
          <img
            src="/images/hub-mockup.png"
            alt="HostelLife Hub community mockup"
            className="media-frame my-5"
          />
        </Container>
      </section>

      <section className="bg-mist py-18">
        <Container>
          <PageHeading size="md" align="center">
            A Revolution Rooted in Real Hostel Experience
          </PageHeading>
          <p className="mx-auto mt-4 max-w-190 text-center">
            At <strong>HostelLife Hub</strong>, we believe{' '}
            <strong>expert knowledge and peer support should be accessible to everyone.</strong> Not just
            those who can afford consultants. That&rsquo;s why we&rsquo;ve worked hard to bring together{' '}
            <strong>coaches, experienced professionals, and the entire hostel community</strong> to help{' '}
            <strong>you grow, without breaking the bank.</strong>
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-line border-t-4 border-t-accent bg-white p-6"
              >
                <h3 className="text-xl text-accent">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-190 text-center">
            <PageHeading size="sm" tone="accent" uppercase>
              Our Vision
            </PageHeading>
            <p>
              To foster a <strong>stronger, more connected hostel industry</strong> where professionals{' '}
              <strong>connect, collaborate and thrive together.</strong>
            </p>
            <PageHeading size="sm" tone="accent" uppercase className="mt-6">
              Our Mission
            </PageHeading>
            <p>
              To <strong>equip hostel professionals</strong> with the <strong>knowledge, training, and network</strong>{' '}
              they need to thrive, navigating industry challenges, while{' '}
              <strong>supporting each other globally.</strong>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-18 text-center text-white">
        <Container>
          <img src="/images/hub-paper.png" alt="" className="media-frame my-5" />
          <PageHeading size="md" tone="light">
            Join HostelLife Hub Now
          </PageHeading>
          <p className="text-white">
            HostelLife Hub accounts are personal and stay with you, not your hostel.
            <br />
            Please join with your own <strong>individual email</strong>, not a shared one{' '}
            <em>example: jane@besthostel.com or tom@gmail.com</em>
          </p>
          <a
            href="https://community.hostellifehub.com/sign_up"
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent"
          >
            JOIN HOSTELLIFE HUB
          </a>
        </Container>
      </section>
    </>
  )
}

export default HostelLifeHub
