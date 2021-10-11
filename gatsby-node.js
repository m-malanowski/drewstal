// const { createFilePath } = require("gatsby-source-filesystem")
// const path = require("path")
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = createFilePath({ node, getNode, basePath: "posts" })
//     createNodeField({
//       node,
//       name: "slug",
//       value: `/projekty${slug}`,
//     })
//   }
// }
//
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allWordpressPost {
//         nodes {
//           slug
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allWordpressPost.nodes.forEach(node => {
//       createPage({
//         path: node.slug,
//         component: path.resolve("./src/layouts/BlogpostLayout.js"),
//         context: {
//           slug: node.slug,
//         },
//       })
//     })
//   })
// }
//
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /locomotive-scroll/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
//
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type CommentsYaml implements Node {
//       replyFor: String
//     }
//   `
//   createTypes(typeDefs)
// }


const path = require("path")

// create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       projects: allStrapiHouses {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)
//
//   result.data.projects.nodes.forEach(project => {
//     createPage({
//       path: `/projekty/${project.slug}`,
//       component: path.resolve(`src/templates/projects-template.js`),
//       context: {
//         slug: project.slug,
//       },
//     })
//   })
// }
