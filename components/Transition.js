import { motion } from "framer-motion";

//Creating Variants
const trasitionanimation = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%"
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  }
};

const Transition = () => {
  return (
    <>
      <motion.div
        variants={trasitionanimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#ffffff]"
      >
      </motion.div>

      <motion.div
        variants={trasitionanimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#f16324]"
      >
      </motion.div>


      <motion.div
        variants={trasitionanimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#000]"
      >
      </motion.div>
    </>
  );
}

export default Transition