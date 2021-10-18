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
                    >Producent domków  <br/> letniskowych  i  całorocznych</motion.h2>
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
                                <a target="_blank" href={node.Link} rel="noreferrer noopener"><img src={node.image.url} alt="Drewstal"/></a>
                                <a target="_blank" href={node.Link} rel="noreferrer noopener">
                                    <h2>{node.Title}</h2>
                                </a>
                                <p>{node.Description}</p>
                            </div>
                        </article>
                    ))}


                </motion.div>
            </section>

            <section className="section-more-index">
                <div className="content-wrapper">
                    <h5>Jako producent domków letniskowych zawsze sięgamy jedynie po materiały najwyższej jakości.</h5>

                    <button type="submit"><Link to="/o-nas">Dowiedz się więcej</Link></button>
                </div>
            </section>

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
