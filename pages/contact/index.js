import { BsArrowRight } from "react-icons/bs";

// Animation
import { motion } from "framer-motion";
import { smoothIn } from "../../animate";

const Contact = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 
          variants={smoothIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 text-center mb-7">
            Let's <span className="text-accent">talk</span>with exprience advisors.
          </motion.h2>

          <motion.form 
          variants={smoothIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-1 flex-col gap-6 w-full mx-auto ">
            {/** Input fields */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>

            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="No hp" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>

            <input type="text" placeholder="Subject" className="input" />
            <textarea className="textarea" placeholder="Message"></textarea>

            <button className="btn rounded-full bg-accent text-white border border-black/20 
            max-w-[175px] px-8 transition-all duration-300 flex items-center
            justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500">Let's talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]"/>
            </button>



          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;