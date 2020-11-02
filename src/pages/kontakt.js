import React from "react"
import ContactPicture from "../assets/imgs/domek-letniskowy-kontakt.jpg"
import ContactPicture2 from "../assets/imgs/domek-letniskowy-27.jpg"

import Form from '../components/Form'
import {motion} from "framer-motion";
import SEO from "../components/SEO";
const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const contactPage = () => (
    <>
    <SEO title="Domy z Drewna | Gotowe Domki Letniskowe Całoroczne | producent - DREWSTAL | Kontakt"
         description="Kontakt - Producent domów z drewna DREWSTAL oferuje zarówno domy mieszkalne całoroczne jak i rekreacyjne, letniskowe, wiaty garażowe oraz altany ogrodowe."
    />

        <section className="section-contact">
            <hr className="header-hr"/>
            <div className="row header">
                <div className="col-md-2">
                    <p>Skontaktuj się z nami</p>
                </div>
                <div className="col-md-8">
                    <motion.h2
                        initial={{opacity: 0, y: 40}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {delay: .2, ...transition},
                        }}
                        exit={{
                            y: 40,
                            opacity:0,
                            transition: { ...transition},
                        }}>
                        Ulica Piaskowa 13, Elbląg 82-300
                    </motion.h2>
                </div>
                <motion.div className="header-contact-info offset-md-2 col-md-4"
                            initial={{opacity: 0, y: 20}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {delay: .4, ...transition},
                            }}
                            exit={{
                                y: 40,
                                opacity:0,
                                transition: { ...transition},
                            }}
                >
                    <p>TEL: +48 666 743 003</p>
                    <p>EMAIL: <a href="mailto:kontakt@grgroup.pl">kontakt@grgroup.pl</a></p>
                    <p>GODZINY OTWARCIA: <br/> Pn-pt: 8:00 - 18:00, <br/> Sobota: 8:00 - 14:00 </p>
                    <p className="mt-5 find"><a href="#">Tu nas znajdziesz</a></p>
                </motion.div>
                {/*<div className="gradient top-gradient"></div>*/}

            </div>
        </section>
        <section className="row section-contact-picture-form">
            <motion.div className="col-md-6 col-12 mr-lg-5"
                        initial={{opacity: 0, y: 100}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {delay: .6, ...transition},
                        }}
                        exit={{
                            y: 100,
                            transition: { ...transition},
                        }}>
            >
                <img className="contact-picture-big-screen" src={ContactPicture} alt=""/>
                <img className="contact-picture-small-screen" src={ContactPicture2} alt=""/>

            </motion.div>
            <div className="col-md-5  mr-lg-5 mt-5 section-contact-info-form">
                <h1>Gotowe domki <br/> letniskowe całoroczne</h1>
                <p className="mt-5">
                    DREWSTAL to nowoczesne domki letniskowe, dostosowane do Twoich potrzeb!
                    Zaufaj nam! DREWSTAL to nie tylko domki letniskowe. To coś o wiele więcej. Dajemy Ci przede wszystkim możliwość bezpośredniego obcowania z naturą!
                    Każdą realizację traktujemy wyjątkowo i indywidualnie. Zapraszamy do kontaktu.
                    Nasi konsultanci chętnie odpowiedzą na Twoje pytania i przybliżą Ci wszystkie szczegóły naszej oferty.
                </p>

                <Form/>

            </div>
        </section>
    </>
)

export default contactPage;