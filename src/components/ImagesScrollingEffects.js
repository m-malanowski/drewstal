import React from "react";
import {motion, useTransform, useViewportScroll} from "framer-motion";


const ImagesScrollingEffects = (props) => {

    const { scrollYProgress } = useViewportScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, props.scaleValue, 1])
    // const yPosAnim1 = useTransform(scrollYProgress, [0, 0.4, 1], [0, 250, -400])

    return (
        <>
            <section className="">
                <motion.img
                    style={{
                        scale: scaleAnim,
                        // y: yPosAnim1,
                    }}
                    src={props.pictureSrc} alt="domki letniskowe na działkę"
                />
            </section>
        </>
    )
}
export default ImagesScrollingEffects