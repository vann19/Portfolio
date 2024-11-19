import Socials from "../../components/Socials";
import AvatarPerson from "../../components/AvatarPerson";
import Countup from "react-countup";
import { motion } from "framer-motion";
import {smoothIn } from "../../animate";

const About = () => {
  return (
    <div className="h-full py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left Side Content */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2 variants={smoothIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            A <span className="text-accent">Professional</span> writer makes big differ
          </motion.h2>

          <motion.p variants={smoothIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 text-black mb-3 xl:mb-6 px-2 xl:px-0">
            My name is La Ode Muhammad Nurfansyah, a Bachelor of Computer Science student at Yogyakarta Technology University (UTY). I have a keen interest in web development, particularly frontend development, with experience building
            applications using Next.js, HTML, and CSS. Currently, I am developing a portfolio application to showcase my skills and projects.
          </motion.p>

          <motion.div variants={smoothIn("right", 0.6)} initial="hidden" animate="show" exit="hidden">
            <div className="flex justify-center lg:justify-start">
              <Socials />
            </div>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <motion.div variants={smoothIn("left", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0">
            <AvatarPerson />
          </div>
          {/* Count Up Experience */}
          <div className="flex-1 flex justify-center absolute mt-16 p-5 bg-white/90 rounded-full z-20">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <Countup start={0} end={3} duration={5} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">years of experience</div>
          </div>

          {/* Count Up Project  */}
          <div className="flex-1 flex justify-center absolute mt-80 ms-96 p-5 bg-white/90 rounded-full z-20">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <Countup start={0} end={2} duration={9} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Project</div>
          </div>

          {/* Count Up Project  */}
          <div className="flex-1 flex justify-center absolute mt-96 ms-18 p-5 bg-white/90 rounded-full z-20">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <Countup start={0} end={10} duration={5} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning Awards</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About