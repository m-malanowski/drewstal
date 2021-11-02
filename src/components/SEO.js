import React from "react"
import {Helmet} from "react-helmet"
import {StaticQuery, graphql} from "gatsby"

const SEO = ({title, description, keywords, image}) => (
    <StaticQuery
        query={query}
        render={({
                     site: {
                         siteMetadata: {
                             defaultTitle,
                             defaultDescription,
                             defaultImage,
                             url,
                             defaultKeywords,
                         },
                     },
                 }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: `${image ? image : url + defaultImage}`,
                keywords: keywords || defaultKeywords,
            }
            return (
                <Helmet>
                    <title>{seo.title}</title>
                    <meta name="image" content={seo.image}/>
                    <meta name="description" content={seo.description}/>
                    <meta name="keywords" content={seo.keywords}/>
                    <meta name="robots" content="index,follow"/>
                    <html lang="pl"/>

                    <meta property='og:image' content={seo.image}/>
                    <meta property='og:locale' content='pl'/>
                    <meta property='og:type' content='website'/>
                    <meta property='og:title' content={seo.title}/>
                    <meta property='og:description' content={seo.description}/>
                    <meta property='og:url' content='http://drewstal.com.pl'/>

                    <meta name="twitter:card" content={seo.title}/>
                    <meta name="twitter:description" content={seo.description}/>
                    <meta name="twitter:title" content={seo.title}/>
                    <meta name="twitter:image" content="http://drewstal.com.pl"/>

                </Helmet>
            )
        }}
    />
)

export default SEO

const query = graphql`
        {
            site {
            siteMetadata {
            defaultTitle: title
            defaultDescription: description
            defaultImge: image
            url
            defaultKeywords: keywords
        }
        }
        }
        `
