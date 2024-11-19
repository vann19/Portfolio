import TestimonialSlider from "../../components/TestimonialSlider";

// Animate
import { motion } from "framer-motion";
import { smoothIn } from "../../animate";

const Testimonials = () => {
  return (
    <div className="h-full py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/** Tittle */}
        <motion.h2 
        variants={smoothIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 mb-8 xl:mb-0">
          Testimonials <span className='text-accent'> .</span>
        </motion.h2>

        {/** Slider */}
        <motion.div
        variants={smoothIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        >
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials;