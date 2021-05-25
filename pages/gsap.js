import { useEffect, useRef, useState } from "react";
import { Power4, TimelineLite, TweenMax } from "gsap";

import Gsap from "../components/Gsap";

const GaspPage = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const tl = new TimelineLite({
    onComplete: () => {
      setAnimationCompleted(true);
    },
  });

  const mainItem = useRef();
  const circleItem = useRef();

  useEffect(() => {
    const { current: main } = mainItem;
    const { current: circle } = circleItem;

    tl.add(TweenMax.to(circle, 0.5, { scale: 2, repeat: 2, yoyo: true }))
      .to(circle, 0.4, {
        scale: 50,
        opacity: 0,
        ease: Power4.easeInOut,
      })
      .to(main, 0.2, {
        autoAlpha: 0,
        ease: Power4.easeInOut,
      })
      .set([main, circle], { display: "none" });
  }, []);

  return (
    <>
      <div
        ref={mainItem}
        className="bg-gray-50 flex items-center justify-center  w-screen h-screen fixed top-0 left-0 z-10"
      >
        <div
          ref={circleItem}
          className="bg-gray-900 h-28 w-28 rounded-full"
        ></div>
      </div>
      {animationCompleted && <Gsap />}
    </>
  );
};

export default GaspPage;
