import React from "react"
import {graphql, Link} from "gatsby";
import {motion} from "framer-motion";
import SEO from "../components/SEO";
import TriggerText from "../components/TriggerText";
const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

// const projectsPage = ({data}) => {
const projectsPage = () => {

        return (
        <>
            <SEO title="Producent Domków Letniskowych | Projekty"/>

            <section className="section-products">
                <hr className="header-hr"/>
                <div className="row header">
                    <div className="col-md-2">
                        <p>Nasze produkty</p>
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
                            Projekty domków letniskowych
                        </motion.h2>
                    </div>
                    {/*<div className="gradient top-gradient"></div>*/}

                </div>
                <div>
                    {/*{data.allWordpressPost.nodes.map(node => (*/}
                    {/*    <motion.div key={node.id} className="products-listing"*/}
                    {/*                initial={{opacity: 0, y: 40}}*/}
                    {/*                animate={{*/}
                    {/*                    opacity: 1,*/}
                    {/*                    y: 0,*/}
                    {/*                    transition: {delay: .4, ...transition},*/}
                    {/*                }}*/}
                    {/*                exit={{*/}
                    {/*                    y: 40,*/}
                    {/*                    transition: { ...transition},*/}
                    {/*                }}>*/}
                    {/*        <div className=" image-container">*/}
                    {/*            <img src={node.featured_media.source_url} alt={node.featured_media.slug}/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <TriggerText> <p>{node.title}</p> </TriggerText>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <TriggerText> <Link to={`../${node.slug}`}><p>Sprawdź</p></Link> </TriggerText>*/}
                    {/*        </div>*/}
                    {/*    </motion.div>*/}
                    {/*))}*/}
                </div>
            </section>
        </>
    )
}
export default projectsPage;
//
// export const query = graphql`
//   {
//   allWordpressPost{
//     nodes {
//       id
//       slug
//       title
//       excerpt
//       featured_media {
//         source_url
//         slug
//       }
//     }
//   }
// }
// `