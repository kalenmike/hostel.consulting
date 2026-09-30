import Container from '../../components/Container'
import IconBadge from '../../components/IconBadge'
import { SectionHeading } from '../../components/SectionHeading'
import { HOSTEL_COLUMNS } from '../../data'

// The New/Existing hostel columns were two hand-written copies of the same
// markup; they are now one list rendered from HOSTEL_COLUMNS.
function HostelColumn({ icon, title, points, shaded }: (typeof HOSTEL_COLUMNS)[number]) {
  return (
    <div className={`px-6 py-16 ${shaded ? 'bg-[#262a2d]' : ''}`}>
      <IconBadge name={icon} />
      <h3 className="mb-4 font-condensed text-2xl text-white uppercase">{title}</h3>
      <ul className="m-0 list-none p-0 text-white/35">
        {points.map((point) => (
          <li key={point} className="mb-3">
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Why() {
  return (
    <>
      <section className="py-15 text-center">
        <Container width="narrow">
          <SectionHeading
            eyebrow="We appreciate the key differences between operating a hotel and a hostel"
            title="Why hostel.consulting"
          />
          <p className="mx-auto max-w-190">
            <em>Hotel</em> management is an established field that educates the industry in all
            aspects of opening and operating a hotel. Everything from reception and housekeeping to
            revenue management, has established standards and available resources to train owners and
            staff at all levels.
          </p>
          <p className="mx-auto max-w-190">
            <em>Hostel</em> management is a completely different structure with unique operational
            needs! Hostel management is much less standardized as a discipline. Most hostels are
            still experimenting in the dark, using &ldquo;trial and error&rdquo; to guide their business
            practices; from reception to management and even ownership. Skip the uncertainty and let
            our experts share their experience with your hostel.
          </p>
        </Container>
      </section>

      <section className="bg-ink py-15 text-center">
        <div className="mx-auto grid max-w-300 grid-cols-1 md:grid-cols-2">
          {HOSTEL_COLUMNS.map((column) => (
            <HostelColumn key={column.title} {...column} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Why
