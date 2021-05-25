import { useAnimation } from "framer-motion";
import { useEffect, useState, cloneElement } from "react";

const AnimateWhenVisible = ({ children, observerEntry, repeat }) => {
  const [show, setShow] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (observerEntry.isIntersecting) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [observerEntry]);

  useEffect(() => {
    if (show) {
      controls.start(children.props.animate);
    }
  }, [controls, show]);

  const motionElement = cloneElement(children, {
    animate: controls,
  });

  if (repeat) return show && motionElement;

  return motionElement;
};

export default AnimateWhenVisible;
