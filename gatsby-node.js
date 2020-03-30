const path = require(`path`)
// const slug = require(`slug`)
// const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allProjectsJson {
          edges {
            node {
              text
              title
              id
              image1 {
                publicURL
              }
              image2 {
                publicURL
              }
              image3 {
                publicURL
              }
              photos {
                publicURL
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const projectTemplate = path.resolve(`src/templates/project.jsx`)
  result.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      path: `/project/${edge.node.title}/`,
      component: projectTemplate,
      context: {
        node: edge.node,
      },
    })
  })

  const result2 = await graphql(
    `
      {
        allBlogsJson {
          edges {
            node {
              id
              fullText {
                text
                image {
                  publicURL
                }
              }
              title
              time(formatString: "MMM DD, YYYY")
              username
            }
          }
        }
      }
    `
  )

  if (result2.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogTemplate = path.resolve(`src/templates/blog.jsx`)
  result2.data.allBlogsJson.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.id}/`,
      component: blogTemplate,
      context: {
        node: edge.node,
      },
    })
  })
}

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   const result2 = await graphql(
//     `
//       {
//         allBlogsJson {
//           edges {
//             node {
//               id
//               fullText {
//                 text
//                 image {
//                   publicURL
//                 }
//               }
//               title
//               time(formatString: "MMM DD, YYYY")
//               username
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result2.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   const blogTemplate = path.resolve(`src/templates/blog.jsx`)
//   result2.data.allBlogsJson.edges.forEach(edge => {
//     createPage({
//       path: `/blog/${edge.node.id}/`,
//       component: blogTemplate,
//       context: {
//         node: edge.node,
//       },
//     })
//   })
// }
