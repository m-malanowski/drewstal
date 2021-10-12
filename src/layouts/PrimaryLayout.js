import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {motion, AnimatePresence} from "framer-motion";

const duration = .6
const durationExit = .6

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: duration,
            delay: duration,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        transition: {duration: durationExit},
    },
}

const PrimaryLayout = ({children, location}) => (
    <>
        <Header/>

        <motion.div
            className="fake-loader-wrapper"
            initial={{opacity: 1}}
            animate={{
                // display: 'none',
                opacity: 0,
                // y: -1000,
                transition: {delay: 1.0, when: "afterChildren", duration: 0.4},
                transitionEnd: {
                    display: "none",
                },
            }}
        >
            <motion.p
                animate={{
                    opacity: 0,
                    y: 10,
                    transition: {delay: .6, duration: 0.6},
                }}

            >DREWSTAL.
            </motion.p>
        </motion.div>

        <main>
            <div className="container-fullwidth">
                {/*<div className="row justify-content-md-center">*/}

                <AnimatePresence initial={true} exitBeforeEnter>

                    {/*<Scroll callbacks={location} />*/}

                    <motion.div
                        id="container"
                        location={location}
                        key={location.pathname}
                        variants={variants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        // transition={transition}
                    >

                        {children}

                    </motion.div>
                </AnimatePresence>
            </div>

        </main>
        <Footer/>
    </>
)

export default PrimaryLayout
