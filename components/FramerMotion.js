import { motion } from "framer-motion";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import AnimateWhenVisible from "./AnimateWhenVisible";

const FramerMotion = ({ delay }) => {
  const { observerEntry, elRef } = useIntersectionObserver({ threshold: 0.1 });

  const variants = {
    hide: {
      y: 90,
      opacity: 0,
    },
    reveal: {
      y: 0,
      opacity: 1,
    },
  };

  const smallTextVariant = {
    hide: {
      y: 20,
      opacity: 0,
    },
    reveal: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex items-center justify-center bg-red-400 min-h-screen text-white">
      <div ref={elRef}>
        <div
          //ref={elRef}
          className="h-16 md:h-md overflow-hidden font-bold text-5xl md:text-7xl"
        >
          <AnimateWhenVisible repeat observerEntry={observerEntry}>
            <motion.h1
              animate="reveal"
              variants={variants}
              initial="hide"
              transition={{ duration: 0.8, delay: delay || null }}
              className="font-normal h-16 md:h-md"
            >
              Hello, I am
            </motion.h1>
          </AnimateWhenVisible>
        </div>
        <div
          //ref={elRef}
          className="h-16  md:h-md overflow-hidden font-bold text-5xl md:text-7xl"
        >
          <AnimateWhenVisible observerEntry={observerEntry}>
            <motion.h1
              animate="reveal"
              variants={variants}
              initial="hide"
              transition={{ duration: 0.8, delay: delay + 0.3 || 0.3 }}
              className="h-16 md:h-md"
            >
              UX-UI designer
            </motion.h1>
          </AnimateWhenVisible>
        </div>
        <div
          //ref={elRef}
          className="text-right overflow-hidden"
        >
          <AnimateWhenVisible observerEntry={observerEntry}>
            <motion.small
              animate="reveal"
              variants={smallTextVariant}
              initial="hide"
              transition={{ duration: 0.8, delay: delay + 0.6 || 0.6 }}
              className="inline-block uppercase"
            >
              Framer motion
            </motion.small>
          </AnimateWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default FramerMotion;
