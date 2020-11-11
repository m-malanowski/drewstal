import React from "react";
import {graphql} from "gatsby"
import SEO from "../components/SEO";
import {motion} from "framer-motion";
const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const policyPage = ({data}) => {
    const post = data.wordpressPage

    return (
        <>
            <SEO title="Domki Drewniane Całoroczne Bez Pozwolenia | O nas"
                 description="Oferujemy nowoczesne domy drewniane całoroczne lub letniskowe bez pozwolenia"
            />

            <section className="section-policy">
                <hr className="header-hr"/>
                <div className="row header">
                    <div className="col-md-2">
                        <p>Regulamin</p>
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
                            Polityka Prywatności
                        </motion.h2>
                    </div>

                </div>

                <div className="content offset-lg-2" dangerouslySetInnerHTML={{__html: post.content}}/>
            </section>

        </>
    )
}
export default policyPage;

export const query = graphql`
    {
        wordpressPage {
            title
            content
        }
    }
`