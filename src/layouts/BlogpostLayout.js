import React from "react"
import {graphql, Link} from "gatsby"
import SEO from "../components/SEO"
import innertext from "innertext"
import {motion} from "framer-motion";

const transition = {duration: 2.0, ease: [0.83, 0.13, 0.23, 0.96]};

const BlogpostLayout = () => {
    // const post = data.wordpressPost
    return (
        <div>
            <SEO
                // title={innertext(post.title) + ' | Nowoczesne Domki Letniskowe na Działkę | DREWSTAL'}
                // description={innertext(post.excerpt)}
                // image={post.featured_media.source_url}
                // keywords={post.categories.map(res => res.name).join(", ")}
            />

            {/*<Helmet>*/}
            {/*    <style>{'body { background-color: white !important; }'}</style>*/}
            {/*</Helmet>*/}

            <section className="section-house-single">
                <hr className="header-hr"/>
                <div className="row header">
                    <div className="col-md-2">
                        <p>Projekt:</p>
                    </div>
                    <motion.div
                        className="col-md-8"
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
                        {/*<h2 dangerouslySetInnerHTML={{__html: post.title}}/>*/}
                    </motion.div>
                    {/*<div className="gradient top-gradient"></div>*/}

                </div>

                <div className="house-single-sub-sec">
                    <motion.div
                        className="col-md-10 offset-md-2"
                        initial={{opacity: 0, y: 140}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {delay: .6, ...transition},
                        }}
                        exit={{
                            y: 140,
                            opacity: 0,
                            transition: {...transition},
                        }}>
                        {/*<img src={post.featured_media.source_url} alt=""/>*/}
                    </motion.div>


                    <div className="row description mb-5">
                        <div className="col-md-2">
                            <p>Szczegóły:</p>
                        </div>

                        <div className="details-container  col-md-10">
                            <div className="details">
                                <div className="">
                                    <p>Powierzchnia:</p>
                                </div>
                                <div className=" area">
                                    {/*<div className="" dangerouslySetInnerHTML={{__html: post.acf.area}}/>*/}
                                    <span> &#13217; </span>
                                </div>
                            </div>

                            <div className="details">
                                <div className="">
                                    <p>Kondygnacje:</p>
                                </div>
                                <div className="">
                                    {/*<div className="" dangerouslySetInnerHTML={{__html: post.acf.storeys}}/>*/}
                                </div>
                            </div>

                            <div className="details">
                                <div className="">
                                    <p>Wymiary domku:</p>
                                </div>
                                <div className="">
                                    {/*<div className="" dangerouslySetInnerHTML={{__html: post.acf.dimensions}}/>*/}
                                </div>
                            </div>

                            <div className="details">
                                <div className="">
                                    <p>Wysokość ściany:</p>
                                </div>
                                <div className="">
                                    {/*<div className="" dangerouslySetInnerHTML={{__html: post.acf.wall_height}}/>*/}
                                </div>
                            </div>

                            <div className="details">
                                <div className="">
                                    <p>Wysokość szczytu:</p>
                                </div>
                                <div className="">
                                    {/*<div className="" dangerouslySetInnerHTML={{__html: post.acf.top_height}}/>*/}
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="row description">
                        <div className="col-md-2 ">
                            <p>Opis:</p>
                        </div>
                        <div className="col-md-10 content">
                            {/*<div dangerouslySetInnerHTML={{__html: post.content}}/>*/}
                        </div>
                    </div>


                    <div className="single-product-bottom">
                        <div className="return col-md-4  offset-md-2 description details">
                            <button type="submit"><Link to="/projekty">Powrót</Link></button>

                        </div>
                        <div className="request  col-md-4 text-right offset-lg-2 description details">
                            {/*<p><Link to="/kontakt"><p>Zamów wycenę</p></Link></p>*/}
                            <button type="submit"><Link to="/kontakt">Zamów wycenę</Link></button>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default BlogpostLayout

// export const query = graphql`
//   query($slug: String!) {
//     wordpressPost(slug: { eq: $slug }) {
//       content
//       title
//       featured_media {
//         source_url
//       }
//       acf{
//         area
//         storeys
//         dimensions
//         wall_height
//         top_height
//       }
//       categories {
//         name
//       }
//       excerpt
//     }
//   }
// `
