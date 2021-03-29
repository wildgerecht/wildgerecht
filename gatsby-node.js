const path = require(`path`)
const chunk = require(`lodash/chunk`)
// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our pages from the GraphQL server
  const pages = await getPages(gatsbyUtilities)
  if (!pages.length) {
    return
  }

  // If there are pages, create pages for them
  await createIndividualPagePages({ pages, gatsbyUtilities })
}

/**
 * This function creates all the individual pages in this site
 */
const createIndividualPagePages = async ({ pages, gatsbyUtilities }) =>
  Promise.all(
    pages.map(({ page }) => {
      // if (page.uri === "/") {
      //   gatsbyUtilities.actions.createPage({
      //     path: page.uri,
      //     component: path.resolve(`./src/templates/index.js`),
      //     context: {
      //       id: page.id,
      //     },
      //   })
      // } else {
      gatsbyUtilities.actions.createPage({
        path: page.uri,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          id: page.id,
        },
      })
      // }
    })
  )

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPages({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPages {
      # Query all WordPress pages sorted by date
      allWpPage(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }
          page: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog pages`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPage.edges
}
