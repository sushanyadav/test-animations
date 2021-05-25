import { motion } from "framer-motion";

import FramerMotion from "../components/FramerMotion";

const FramerMotionPage = () => {
  const variants = {
    hide: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  const circle = {
    reveal: {
      scale: 0,
    },
    hide: {
      scale: 50,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <motion.div
        animate="hide"
        variants={variants}
        transition={{ duration: 1.3 }}
        className="bg-gray-50 flex items-center justify-center  w-screen h-screen fixed top-0 left-0 z-10"
      >
        <motion.div
          animate="hide"
          variants={circle}
          initial="reveal"
          transition={{ duration: 1.3 }}
          className="bg-gray-900 h-32 w-32 rounded-full"
        ></motion.div>
      </motion.div>
      <FramerMotion delay={0.6} />
    </>
  );
};

export default FramerMotionPage;
