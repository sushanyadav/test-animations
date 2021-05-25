import { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";

const Gsap = () => {
  const mainItem = useRef();
  const textItem = useRef();
  const textItem2 = useRef();
  const smallText = useRef();

  useEffect(() => {
    const { current: main } = mainItem;
    const { current: text } = textItem;
    const { current: text2 } = textItem2;
    const { current: text3 } = smallText;

    //removes initial flash
    TweenMax.to(main, 0.2, { opacity: 1 });

    TweenMax.staggerFrom(
      [text, text2, text3],
      1.5,
      {
        y: 90,
        autoAlpha: 0,
        ease: Power3.easeInOut,
      },
      0.3
    );
    // .repeat(-1) //repeats the animation infinite times
    // .yoyo(true) //basically reverses the animation
    //.set([text, text2, text3], {display:"none"}) //sets display none to following elements
  }, []);

  return (
    <div
      ref={mainItem}
      className="flex  opacity-0 items-center justify-center min-h-screen bg-indigo-400 text-white"
    >
      <div>
        <div className="h-16 md:h-md overflow-hidden font-bold text-5xl md:text-7xl">
          <h1 ref={textItem} className="font-normal h-16 md:h-md">
            Hello, I am
          </h1>
        </div>
        <div className="h-16 md:h-md overflow-hidden font-bold text-5xl md:text-7xl">
          <h1 ref={textItem2} className="h-16 md:h-md">
            UX-UI designer
          </h1>
        </div>
        <div className="text-right overflow-hidden">
          <small ref={smallText} className="inline-block uppercase">
            Gsap
          </small>
        </div>
      </div>
    </div>
  );
};

export default Gsap;
