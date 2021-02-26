import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
// import { SplitText } from "./SplitText"

const TriggerText = ({children}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .5,
    // triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // else{
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          transition: { delay: .2, duration: .8}
        },
        hidden: { opacity: 0, y: 80, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
      }}
      // variants={{
      //   visible: {
      //     opacity: 1, y: 0,
      //     transition: { delay: .4, duration: .6,  }
      //   },
      //   hidden: { opacity: 0, y: -40, }
      // }}
    >
      {children}
    </motion.div>
  );
};
export default TriggerText