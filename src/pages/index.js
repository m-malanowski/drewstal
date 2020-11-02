import React  from "react"
import picture from "../assets/imgs/domek-letniskowy-całoroczny-drewniany.jpg";
import HousesCarousel from '../components/HousesCarousel'
import IndexHeaderCarousel from "../components/IndexHeaderCarousel";
import {motion} from "framer-motion";
import SEO from "../components/SEO";
import {Link} from "gatsby"
import ImagesOverDescription from "../components/ImagesOverDescription";
// import innertext from "innertext";
import ImagesScrollingEffects from "../components/ImagesScrollingEffects";
// import AboutPicture3 from "../assets/imgs/domek-letniskowy-21.jpg";

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const IndexPage = () => {


    return (
        <>
            <SEO title="Nowoczesne Domki Letniskowe Drewniane | Gotowe Domki Całoroczne | DREWSTAL"
                 description="Nowoczesne domki letniskowe i całoroczne drewniane, gotowe domki oraz na zgłoszenie i pod wymiar. Szybkie terminy realizacji, elastyczność. Sprawdź!"
            />

            <section className="section-hero">
                {/*<div className="overlay"></div>*/}
                {/*<div className="gradient top-gradient"></div>*/}

                <div className="index-header">
                    <div className="welcome-text-container">
                        <motion.h2
                                   initial={{opacity: 0, y: -40}}
                                   animate={{
                                       opacity: 1,
                                       y: 0,
                                       transition: {delay: 1.5, ...transition},
                                   }}
                                   exit={{
                                       y: -20,
                                       opacity: 0,
                                       transition: {...transition},
                                   }}
                        >
                            <span>Gotowe drewniane</span> <br/> <span className="offset-md-2">Domki letniskowe</span>
                        </motion.h2>

                        <motion.div
                                    className="index-header-short"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {delay: 1.8, ...transition},
                                    }}
                                    exit={{
                                        y: 20,
                                        opacity: 0,
                                        transition: {...transition},
                                    }}
                            >

                            <div className="offset-md-2">
                               <p> Oferta </p>
                            </div>
                            <div className="offset-md-2">
                                 <p> Dopasujemy projekt domu do potrzeb Twoich i Twojej Rodziny </p>
                            </div>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {delay: 2.2, ...transition},
                        }}
                        className="scrolldown">
                        <div className="line"></div>
                    </motion.div>

                    <div className="carousel-container">
                        <IndexHeaderCarousel/>
                        <div className="gradient bottom-gradient"></div>
                    </div>
                </div>

            </section>

            <div className="section-second">
                <div className="services-container">
                    <p className="technologies">Technologia</p>
                    <ul>
                        {/*<li>Doświadczenie</li>*/}
                        {/*<li>Bezpieczeństwo</li>*/}
                        {/*<li>Design</li>*/}
                        {/*<li>Komfort </li>*/}
                        {/*<li>Energooszczędność</li>*/}
                        {/*<li>Ekologia </li>*/}
                        {/*<li>Trwałość </li>*/}
                        <li className="link"><span data-content="Drewno świerkowe">Drewno świerkowe</span></li>
                        <li className="link"><span data-content="Wilgotność 12%-15%">Wilgotność 12%-15%</span></li>
                        <li className="link"><span data-content="Wełna mineralna">Wełna mineralna</span></li>
                        <li className="link"><span data-content="Folia izolacyjna">Folia izolacyjna</span></li>
                        <li className="link"><span data-content="Płyty karton-gips">Płyty karton-gips</span></li>
                        <li className="link"><span data-content="Boazeria">Boazeria</span></li>
                        <li className="link"><span data-content="Płyta OSB">Płyta OSB</span></li>
                    </ul>
                </div>
            </div>


            <section className="section-third">
                <div className="section-container p-2">
                    <div className="section-third-description col-md-3 pr-lg-5 mr-lg-5">
                        <h1>Nowoczesne domki letniskowe</h1>
                        <p className="mt-5">
                            Coraz częściej i coraz chętniej rezygnujemy z ciężkich konstrukcji murowanych na rzecz lekkich domków drewnianych.
                            Gotowe domki drewniane doskonale sprawdzają się również jako obiekty całoroczne.
                            Jako producent domków letniskowych zawsze sięgamy jedynie po materiały najwyższej jakości.
                        </p>
                        <button type="submit"><Link to="/o-nas">Dowiedz się więcej</Link></button>
                    </div>

                    <div className="col-md-5 picture-three-container p-5">
                        <ImagesScrollingEffects scaleValue={1.3} pictureSrc={picture} alt="Domki całoroczne bez pozwolenia"/>
                    </div>
                </div>
            </section>

            <ImagesOverDescription trgiggerMoment={.4} />

            <HousesCarousel/>
        </>
    )
}
export default IndexPage;
