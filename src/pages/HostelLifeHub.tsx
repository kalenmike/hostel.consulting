import Container from '../components/Container'
import { asset } from '../lib/assets'
import { Icon } from '../components/Icon'
import type { IconName } from '../components/icon-registry'

const BENEFITS: { icon: IconName; bg: string; title: string; body: string }[] = [
  { icon: 'lightbulb', bg: '#3498db', title: 'Find & Share solutions', body: 'to real hostel challenges' },
  { icon: 'graduation-cap', bg: '#9b59b6', title: 'Learn & Grow', body: 'through courses & mentorship' },
  {
    icon: 'user-gear',
    bg: '#1abc9c',
    title: 'Hire & Train Smarter',
    body: 'by finding, recruiting, and training the right staff efficiently',
  },
  { icon: 'people-group', bg: '#1b9d56', title: 'Join region-based groups', body: 'to tackle local challenges together' },
  {
    icon: 'comments',
    bg: '#e67e22',
    title: 'Network with hostel professionals',
    body: 'for partnerships, & collaboration',
  },
  {
    icon: 'piggy-bank',
    bg: '#e74c3c',
    title: 'Save Money',
    body: 'with exclusive supplier deals, industry discounts, and cost-saving strategies',
  },
]

const PILLARS: { title: string; body: string }[] = [
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

// The small round-cornered icon tile used by the benefits and pillars. The
// original draws a 77px square with a ~24px radius and a white glyph on top.
function IconTile({ icon, bg }: { icon: IconName; bg: string }) {
  return (
    <span
      className="mx-auto flex h-[77px] w-[77px] items-center justify-center rounded-[24px] text-white"
      style={{ backgroundColor: bg }}
    >
      <Icon name={icon} className="h-[38px] w-[38px]" />
    </span>
  )
}

// The uppercase Michroma label that opens the Challenge and Solution blocks.
function BlockLabel({ children }: { children: string }) {
  return <p className="mb-3 font-michroma text-2xl text-[#00282b] uppercase md:text-[35px]">{children}</p>
}

function HostelLifeHub() {
  return (
    <>
      <section className="bg-[#011b1e] pt-3 pb-5 text-center">
        <a
          href="https://community.hostellifehub.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-[#ff7a7a] px-5 py-3 text-[22px] text-white uppercase"
        >
          visit hostellife hub web
        </a>
      </section>

      <section className="bg-white pt-25 pb-15 text-center">
        <Container>
          <h1 className="font-poppins text-[34px] leading-tight font-bold text-[#006d8c] md:text-[56px]">
            Welcome To The Hostel Industry&rsquo;s Very Own Virtual Coworking Space
          </h1>
          <p className="mt-4 font-poppins text-[28px] leading-tight font-normal text-[#006d8c] md:text-[56px]">
            Where hostel professionals connect, collaborate, and thrive together
          </p>
          <img src={asset('/images/hub-logo.png')} alt="HostelLife Hub" className="mx-auto mt-10 max-w-150" />
        </Container>
      </section>

      <section className="bg-mist pt-[110px] pb-[90px] text-center md:pt-[188px] md:pb-[140px]">
        <Container>
          <BlockLabel>The Challenge:</BlockLabel>
          <h2 className="mx-auto max-w-230 font-poppins text-[34px] leading-tight font-black text-[#006d8c] md:text-[62px]">
            Running a Hostel Can Be Isolating
          </h2>
          <div className="mx-auto mt-10 max-w-230 space-y-6">
            <p className="font-poppins text-lg text-[#00282b] md:text-[30px] md:leading-[1.55]">
              Hostel professionals are some of the most passionate people in hospitality. But when it
              comes to <strong>finding support, reliable training, and a strong professional network</strong>,
              the options are limited.
            </p>
            <p className="font-poppins text-lg text-[#00282b] md:text-[30px] md:leading-[1.55]">
              Most hostel owners and teams <strong>rely on trial and error</strong>, online searches, or
              scattered industry groups to navigate the complexities of running a successful hostel
              wasting time and energy that could be spent elevating guest experiences.
            </p>
          </div>
          <p className="mt-10 text-2xl text-muted md:text-[40px]">What if there was one place built just for us?</p>
        </Container>
      </section>

      <section className="bg-white py-25 text-center">
        <Container>
          <BlockLabel>The Solution:</BlockLabel>
          <h2 className="mx-auto max-w-230 font-poppins text-[34px] leading-tight font-bold text-black md:text-[62px]">
            An Online Community Built <em>by</em> Hostel Professionals, <em>for</em> Hostel Professionals
          </h2>
          <div className="mx-auto mt-10 aspect-square max-w-240">
            <img
              src={asset('/images/hub-design.png')}
              alt="HostelLife Hub"
              className="h-full w-full object-contain"
            />
          </div>
        </Container>
      </section>

      <section className="bg-mist py-30">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <p className="font-poppins text-xl leading-[1.55] text-[#00282b] md:text-[30px]">
            <strong>HostelLife Hub</strong> is a <strong>collaborative space</strong> designed to bring
            together hostel industry experts, owners, managers, and even staff to{' '}
            <strong>share knowledge, connect with peers, and grow their businesses — together.</strong>
          </p>
          <div className="mx-auto aspect-[3/2] w-full max-w-158 overflow-hidden">
            <img
              src={asset('/images/hub-stationery.png')}
              alt="HostelLife Hub stationery"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {BENEFITS.map((b) => (
              <li key={b.title} className="text-left">
                <IconTile icon={b.icon} bg={b.bg} />
                <p className="mt-4 text-[22px] text-[#00282b] md:text-[25px]">
                  <strong>{b.title}</strong> <span className="font-normal">{b.body}</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mist py-30">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <img src={asset('/images/hostellife-hub-logo.png')} alt="HostelLife Hub" className="mx-auto max-w-105" />
          <p className="font-poppins text-[28px] leading-snug font-bold text-[#00282b] md:text-[42px] md:leading-[1.55]">
            More than just an e-learning and resource platform, it&rsquo;s a{' '}
            <strong>movement where hostels support hostels</strong>.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="mx-auto aspect-square w-full max-w-158 overflow-hidden">
            <img
              src={asset('/images/hub-mockup.png')}
              alt="HostelLife Hub community mockup"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-poppins text-3xl font-bold text-[#006d8c] md:text-[40px] md:leading-tight">
              A Revolution Rooted in Real Hostel Experience
            </h2>
            <p className="mt-4 text-base leading-relaxed">
              At <strong>HostelLife Hub</strong>, we believe{' '}
              <strong>expert knowledge and peer support should be accessible to everyone.</strong> Not
              just those who can afford consultants. That&rsquo;s why we&rsquo;ve worked hard to bring
              together <strong>coaches, experienced professionals, and the entire hostel community</strong>{' '}
              to help <strong>you grow, without breaking the bank.</strong>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16">
        <Container>
          <ul className="mx-auto flex max-w-230 flex-col gap-10">
            {PILLARS.map((p) => (
              <li key={p.title} className="flex items-start gap-6">
                <span className="flex h-[77px] w-[77px] shrink-0 items-center justify-center rounded-[24px] bg-[#006d8c] text-white">
                  <Icon name="check" className="h-[38px] w-[38px]" />
                </span>
                <div>
                  <h3 className="font-michroma text-[28px] font-bold text-[#006d8c]">{p.title}</h3>
                  <p className="mt-2 text-[25.6px] text-[#00282b]">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-poppins text-3xl font-bold text-[#006d8c]">Our Vision</h2>
            <p className="mt-3">
              To foster a <strong>stronger, more connected hostel industry</strong> where professionals{' '}
              <strong>connect, collaborate and thrive together.</strong>
            </p>
            <h2 className="mt-8 font-poppins text-3xl font-bold text-[#006d8c]">Our Mission</h2>
            <p className="mt-3">
              To <strong>equip hostel professionals</strong> with the{' '}
              <strong>knowledge, training, and network</strong> they need to thrive, navigating industry
              challenges, while <strong>supporting each other globally.</strong>
            </p>
          </div>
          <div className="mx-auto aspect-square w-full max-w-125 overflow-hidden">
            <img src={asset('/images/hub-paper.png')} alt="HostelLife Hub paper" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 text-center">
        <Container>
          <h2 className="font-poppins text-3xl font-bold text-[#006d8c] md:text-[40px]">
            Join HostelLife Hub Now
          </h2>
          <p className="mx-auto mt-4 max-w-190">
            HostelLife Hub accounts are personal and stay with you, not your hostel.
            <br />
            Please join with your own <strong>individual email</strong>, not a shared one{' '}
            <em>example: jane@besthostel.com or tom@gmail.com</em>
          </p>
          <a
            href="https://community.hostellifehub.com/sign_up"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-lg bg-[#ff7a7a] px-8 py-4 text-[22px] text-white uppercase"
          >
            JOIN HOSTELLIFE HUB
          </a>
        </Container>
      </section>
    </>
  )
}

export default HostelLifeHub