import React from "react"
import AboutPicture from "../assets/imgs/domek-letniskowy-30.jpg"
import AboutPicture2 from "../assets/imgs/domek-letniskowy-kontakt.jpg"
import AboutPicture3 from "../assets/imgs/domek-letniskowy-21.jpg"
import AboutPicture4 from "../assets/imgs/domek-letniskowy-całoroczny-drewniany.jpg"

import {motion} from "framer-motion";
import SEO from "../components/SEO";
import ImagesOverDescription from "../components/ImagesOverDescription";
import ImagesScrollingEffects from "../components/ImagesScrollingEffects";

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const aboutPage = () => {

    return (
        <>
            <SEO title="Domki Drewniane Całoroczne Bez Pozwolenia | O nas"
                 description="Oferujemy nowoczesne domy drewniane całoroczne lub letniskowe bez pozwolenia"
            />

            <section className="section-about first-section">
                {/*<div className="gradient top-gradient"></div>*/}
                <div className="about-header">
                    <div className="h1-container ">
                        <motion.h2 initial={{opacity: 0, y: 40}}
                                   animate={{
                                       opacity: 1,
                                       y: 0,
                                       transition: {delay: .2, ...transition},
                                   }}
                                   exit={{
                                       y: 20,
                                       opacity:0,
                                       transition: { ...transition},
                                   }}
                        >

                            Nowoczesne domki letniskowe
                        </motion.h2>
                    </div>
                    <motion.div
                        className="image-container"
                        initial={{opacity: 0, x: 40}}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {delay: 1.2, ...transition},
                        }}
                        exit={{
                            x: 140,
                            transition: { ...transition},
                        }}
                    >

                        <ImagesScrollingEffects scaleValue={1.3} pictureSrc={AboutPicture} alt="nowoczesne domki letniskowe całoroczne"/>
                    </motion.div>
                    {/*<div className="gradient bottom-gradient"></div>*/}
                </div>

                <div className="about-sub-sec first-about-sec">
                    <div className="col-lg-4 image-container">
                        <ImagesScrollingEffects scaleValue={1.6} pictureSrc={AboutPicture2} alt="nowoczesne domki drewniane bez pozwolenia"/>
                    </div>
                    <div className="col-xl-4 col-lg-6 offset-lg-2 mt-5">
                        <h2>
                              Dlaczegeo DREWSTAL?
                        </h2>
                        <br/>
                        <p className="mt-5">
                            W naszej ofercie posiadamy różnorodna gammę domków letniskowych i całorocznych, które możemy dostosować do indywidualnych potrzeb i oczekiwań klientów.
                            Zajmujemy się głównie produkcją nowoczesnych domków letniskowych bez pozwolenia, dlatego w naszym katalogu są głównie domy o powierzchni nie większej niż 35 metrów kwadratowych.
                            Klientów zachęcamy do kontaktu z przedstawicielem naszej firmy.
                        </p>
                    </div>
                </div>
            </section>

            <ImagesOverDescription trgiggerMoment={.1} />

            <section className="section-about second-section">
                <div className="about-sub-sec sub-sec-second">

                    <div className="col-md-6 sub-sec-second">
                        <ImagesScrollingEffects scaleValue={1.4} pictureSrc={AboutPicture4} alt="gotowe domki letniskowe całoroczne"/>

                    </div>

                    <div className="col-xl-5 col-lg-6">
                        <h2 className="mt-5">
                            Technologie
                        </h2>
                        <br/>
                        <p className="mt-5">
                            Wybór technologii budowy domu to decyzja na całe życie i dłużej. W końcu solidny drewniany dom służy przyszłym pokoleniom.
                            Jeśli będzie to jednocześnie dom energooszczędny, zbudowany z ekologicznych surowców i harmonijnie wkomponowany w środowisko naturalne, stanie się domem idealnym.
                            Nasze nowoczesne domy budujemy w technologii szkieletowej - jest to lekkie, energooszczędne, ekonomiczne i jednocześnie szybkie w budowie rozwiązanie System konstrukcyjny w naszej firmie oparty jest na prefabrykacji ścian.
                            Skraca to czas ukończenia budowy do minimum.
                            Materiały użyte do budowy to: drewno certyfikowane (sosna, świerk) klasy C24. Jest to materiał chroniony przed szkodnikami, gniciem i ogniem dzięki nowoczesnej obróbce, czterostronnemu struganiu, komorowemu suszeniu do 14-18% wilgotności w temperaturze 60 stopni.
                            Drewniana fasada domu malowana jest dwukrotnie farbami Tikkurila.
                        </p>
                    </div>

                    <div className="col-md-10 sub-sec-second">
                        <ImagesScrollingEffects scaleValue={1.4} pictureSrc={AboutPicture3} alt="Domki całoroczne bez pozwolenia"/>
                    </div>

                    <div className="col-xl-5 col-lg-7 offset-lg-7 mt-5 about-h1">
                        <h1>
                            Domki drewniane całoroczne bez pozwolenia
                        </h1>
                        <br/>
                        <p className="mt-5">
                           W przypadku domów o powierzchni do 35 m2, dom całoroczny można zbudować w bardzo krótkim czasie bez pozwolenia, przy czym duża część biurokratycznej machiny zostaje prawnie pominięta.
                            Prefabrykowane domy drewniane o powierzchni do 35 m² sprawdzają się przez cały rok. Jsako producent domków letniskowych zawsze korzystamy wyłącznie z materiałów i surowców najwyższej jakości, dzięki czemu nasze konstrukcje charakteryzują się zwiększoną wytrzymałością i doskonałymi parametrami użytkowymi.
                            Oferujemy domy drewniane do 35m2 bez pozwolenia na budowę, domki letniskowe oraz całoroczne domy drewniane z izolacją zapewniającą komfortowe warunki życia.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}
export default aboutPage;