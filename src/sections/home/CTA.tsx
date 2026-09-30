import { Link } from 'react-router-dom'
import { Icon } from '../../components/Icon'

export function CTA() {
  return (
    <section>
      <Link
        to="/contact-us/"
        className="group relative flex items-center justify-center overflow-hidden bg-accent px-12 py-16 text-center"
      >
        <span className="text-4xl font-bold whitespace-nowrap text-white transition-all duration-300 ease-in group-hover:translate-x-[200%] group-hover:opacity-0 group-focus-visible:translate-x-[200%] group-focus-visible:opacity-0 md:text-5xl">
          Start your project today!
        </span>
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <Icon
            name="arrow-right"
            className="h-16 w-16 scale-75 text-white opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
          />
        </span>
      </Link>
    </section>
  )
}

export default CTA
