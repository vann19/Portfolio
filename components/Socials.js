import Link from "next/link"
import {RiBubbleChartFill, RiDribbbleFill, RiMessengerFill, RiPatreonFill, RiWhatsappFill, RiYuqueFill } from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg text-black">
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiBubbleChartFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDribbbleFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiMessengerFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiPatreonFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiWhatsappFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiYuqueFill />
      </Link>
    </div>
  )
}

export default Socials