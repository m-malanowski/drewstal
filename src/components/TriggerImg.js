import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
const TriggerText = ({children}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else{
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          transition: { delay: .2, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}
        },
        hidden: { opacity: 0, y: -20, clipPath: "polygon(0 0, 5% 0, 6% 100%, 0% 100%)" }
      }}
    >
      {/*<h2>{`Header inside viewport ${inView}.`}</h2>*/}
      {children}
    </motion.div>
  );
};
export default TriggerText