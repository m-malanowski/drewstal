import React from "react"
import {graphql, Link} from "gatsby";
import {motion} from "framer-motion";
import SEO from "../components/SEO";
import TriggerText from "../components/TriggerText";

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const projectsPage = ({data}) => {

    return (
        <>
            <SEO title="Producent Domków Letniskowych | Realizacje"/>

            <section className="section-products">
                <hr className="header-hr"/>
                <div className="row header">
                    <div className="col-md-2">
                        <p>Nasze realizacje</p>
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
                                opacity: 0,
                                transition: {...transition},
                            }}>
                            Realizacje domków letniskowych
                        </motion.h2>
                    </div>
                </div>

                <section className="realizations-section">
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
                        className="realizations-wrapper">

                        {data.strapiRealizations.images.map(image => (
                            <article key={image.id}>
                                <div className="article-wrapper">
                                    <img src={image.url} alt="Drewstal"/>
                                </div>
                            </article>
                        ))}

                    </motion.div>
                </section>

            </section>
        </>
    )
}
export default projectsPage;


export const query = graphql`
    query RealizationsPage {
      strapiRealizations {
        images {
          id
          url
        }
      }
    }
 `
