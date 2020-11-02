import React from "react";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import pictureTwo from "../assets/imgs/domek-letniskowy-32.jpg";
import picture from "../assets/imgs/domek-letniskowy-29.jpg";
import pictureThree from "../assets/imgs/domek-letniskowy-33.jpg"


const ImagesOverDescription = (props) => {

    const { scrollYProgress } = useViewportScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5])
    const yPosAnim1 = useTransform(scrollYProgress, [0, props.trgiggerMoment, 1], [0, 550, -800])
    const yPosAnim2 = useTransform(scrollYProgress, [0, props.trgiggerMoment + .1, 1], [0, 550, -1250])
    const yPosAnim3 = useTransform(scrollYProgress, [0, props.trgiggerMoment + .2, 1], [0, 450, -650])

    return (
        <>
            <section className="section-description index-page">
                <motion.img
                    style={{
                        scale: scaleAnim,
                        y: yPosAnim1,
                    }}
                    src={pictureThree} alt="domki letniskowe na działkę"
                />
                <motion.img
                    style={{
                        scale: scaleAnim,
                        y: yPosAnim2,
                    }}
                    src={picture} alt="domki na działkę ogrodową"
                />
                <motion.img
                    style={{
                        scale: scaleAnim,
                        y: yPosAnim3,
                    }}
                    src={pictureTwo} alt="nowoczesne domki letniskowe"
                />

                <h5>
                    Praca z drewnem to nasza pasja oraz sposób na życie. To również satysfakcja, którą lubimy się dzielić.
                    {/*Nasz zespół to wykwalifikowani stolarze i cieśle, inżynierowie oraz pracownicy budowlani.*/}
                </h5>

            </section>
        </>
    )
}
export default ImagesOverDescription