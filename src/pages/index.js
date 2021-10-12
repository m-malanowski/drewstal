import React from "react"
import picture from "../assets/imgs/domek-letniskowy-całoroczny-drewniany-2.jpg";
// import HousesCarousel from '../components/HousesCarousel'
import IndexHeaderCarousel from "../components/IndexHeaderCarousel";
import {motion} from "framer-motion";
import SEO from "../components/SEO";
import {Link} from "gatsby"
import ImagesOverDescription from "../components/ImagesOverDescription";
// import innertext from "innertext";
import TriggerText from "../components/TriggerText";
import TriggerImg from "../components/TriggerImg";
import ImagesScrollingEffects from "../components/ImagesScrollingEffects";
import img1 from "../assets/imgs/nowoczesny-domek-letniskowy-karate.jpg"
import img2 from "../assets/imgs/nowoczesny-domek-letniskowy-karate2.jpg"
import img3 from "../assets/imgs/nowoczesny-domek-letniskowy-karate3.jpg"
import { graphql } from "gatsby"

// import AboutPicture3 from "../assets/imgs/domek-letniskowy-21.jpg";

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const IndexPage = ({ data }) => {


    return (
        <>
            <SEO title="🏠️ &nbsp; Nowoczesne Domki Letniskowe Drewniane | Gotowe Domki Całoroczne | DREWSTAL"
                 description="Nowoczesne domki letniskowe i całoroczne drewniane, gotowe domki oraz na zgłoszenie i pod wymiar. Szybkie terminy realizacji, elastyczność. Sprawdź!"
            />

            <section className="section-hero">
                <div className="index-header">
                    <motion.h2
                        initial={{opacity: 0, y: 40}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {delay: 1.5, ...transition},
                        }}
                        exit={{
                            y: 20,
                            opacity: 0,
                            transition: {...transition},
                        }}
                    >Gotowe projekty domów</motion.h2>
                </div>
            </section>

            <section className="projects-section">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {delay: 2.0, ...transition},
                    }}
                    exit={{
                        y: 20,
                        opacity: 0,
                        transition: {...transition},
                    }}
                    className="projects-wrapper">


                    {data.allStrapiProjects.nodes.map(node=>(
                        <article key={node.id}>
                            <div className="article-wrapper">
                                <img src={node.image.url} alt="Drewstal"/>
                                <a href={node.Link} rel="noreferrer noopener">
                                    <h2>{node.Title}</h2>
                                </a>
                                <p>{node.Description}</p>
                            </div>
                        </article>
                    ))}


                    {/*<article>*/}
                    {/*    <div className="article-wrapper">*/}
                    {/*        /!*<div className="box2 box"></div>*!/*/}
                    {/*        <img src={img3} alt=""/>*/}

                    {/*        <h2> Projekt Domku "Pavilon" 35m2</h2>*/}
                    {/*        <p>Semiotics asymmetrical williamsburg shabby chic umami vape. Normcore swag distillery meggings kitsch occupy keytar.</p>*/}
                    {/*    </div>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                    {/*    <div className="article-wrapper">*/}
                    {/*        /!*<div className="box3 box"></div>*!/*/}
                    {/*        <img src={img2} alt=""/>*/}

                    {/*        <h2> Projekt Domku "Lykke" 35m2</h2>*/}
                    {/*        <p>Brunch gochujang asymmetrical artisan.</p>*/}
                    {/*    </div>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                    {/*    <div className="article-wrapper">*/}
                    {/*        /!*<div className="box4 box"></div>*!/*/}
                    {/*        <img src={img3} alt=""/>*/}

                    {/*        <h2> Projekt Domku "Boho" 35m2</h2>*/}
                    {/*        <p>Mlkshk hexagon blog DIY, man braid man bun chillwave. Brooklyn swag taiyaki keffiyeh organic, bitters knausgaard drinking vinegar. P</p>*/}
                    {/*    </div>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                    {/*    <div className="article-wrapper">*/}
                    {/*        /!*<div className="box5 box"></div>*!/*/}
                    {/*        <img src={img1} alt=""/>*/}

                    {/*        <h2>Projekt domku "Enur" 35m2 </h2>*/}
                    {/*        <p>Prism organic chicharrones, polaroid freegan vape man braid health goth stumptown yr woke.</p>*/}
                    {/*    </div>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                    {/*    <div className="article-wrapper">*/}
                    {/*        /!*<div className="box6 box"></div>*!/*/}
                    {/*        <img src={img2} alt=""/>*/}
                    {/*        <h2>Projekt domku "Enur" 35m2 </h2>*/}
                    {/*        <p>Mlkshk crucifix ugh franzen, beard copper mug slow-carb lyft health goth XOXO. Microdosing pok pok mlkshk messenger bag freegan fingerstache. </p>*/}
                    {/*    </div>*/}
                    {/*</article>*/}

                </motion.div>
            </section>

            <section className="section-more-index">
                <div className="content-wrapper">
                    <h5>Jako producent domków letniskowych zawsze sięgamy jedynie po materiały najwyższej jakości.</h5>

                    <button type="submit"><Link to="/o-nas">Dowiedz się więcej</Link></button>
                </div>
            </section>

            {/*<div className="section-second">*/}
            {/*    <div className="services-container">*/}
            {/*        <p className="technologies">Technologia</p>*/}
            {/*        <ul>*/}
            {/*            <TriggerText>*/}
            {/*                <li className="link"><span data-content="Drewno świerkowe">Drewno świerkowe</span></li>*/}
            {/*            </TriggerText>*/}
            {/*            <TriggerText>*/}
            {/*                <li className="link"><span data-content="Wilgotność 12%-15%">Wilgotność 12%-15%</span></li>*/}
            {/*            </TriggerText>*/}
            {/*            <TriggerText>*/}
            {/*                <li className="link"><span data-content="Wełna mineralna">Wełna mineralna</span></li>*/}
            {/*            </TriggerText>*/}
            {/*            <TriggerText>*/}
            {/*                <li className="link"><span data-content="Folia izolacyjna">Folia izolacyjna</span></li>*/}
            {/*            </TriggerText>*/}
            {/*            <TriggerText>*/}
            {/*                <li className="link"><span data-content="Płyty karton-gips">Płyty karton-gips</span></li>*/}
            {/*            </TriggerText>*/}
            {/*            <TriggerText>*/}
            {/*                <li className="link"><span data-content="Boazeria">Boazeria</span></li>*/}
            {/*            </TriggerText>*/}
            {/*            <TriggerText>*/}
            {/*                <li className="link"><span data-content="Płyta OSB">Płyta OSB</span></li>*/}
            {/*            </TriggerText>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<section className="section-third">*/}
            {/*    <div className="section-container p-2">*/}
            {/*        <div className="section-third-description col-md-3 pr-lg-5 mr-lg-5">*/}
            {/*            <h1><TriggerText>Nowoczesne</TriggerText> <TriggerText>domki letniskowe</TriggerText></h1>*/}
            {/*            <p className="mt-5">*/}
            {/*                Coraz częściej i coraz chętniej rezygnujemy z ciężkich konstrukcji murowanych na rzecz*/}
            {/*                lekkich domków drewnianych.*/}
            {/*                Gotowe domki drewniane doskonale sprawdzają się również jako obiekty całoroczne.*/}
            {/*                Jako producent domków letniskowych zawsze sięgamy jedynie po materiały najwyższej jakości.*/}
            {/*            </p>*/}
            {/*            <button type="submit"><Link to="/o-nas">Dowiedz się więcej</Link></button>*/}
            {/*        </div>*/}

            {/*        <div className="col-md-5 picture-three-container p-5">*/}
            {/*            <TriggerImg> <ImagesScrollingEffects scaleValue={1.3} pictureSrc={picture}*/}
            {/*                                                 alt="Domki całoroczne bez pozwolenia"/> </TriggerImg>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<ImagesOverDescription trgiggerMoment={.4}/>*/}

            {/*<HousesCarousel/>*/}
        </>
    )
}


export const query = graphql`
query ProjectsIndex {
  allStrapiProjects {
    nodes {
      id
      Description
      Link
      Title
      image: Image {
        url
      }
    }
  }
}
`

export default IndexPage;
