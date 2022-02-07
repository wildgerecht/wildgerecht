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
  const posts = await getPosts(gatsbyUtilities)
  if (!posts.length) {
    return
  }

  // If there are pages, create pages for them
  await createIndividualPages({ pages, gatsbyUtilities })

  // If there are posts, create posts for them
  await createIndividualPosts({ posts, gatsbyUtilities })

  // And a paginated archive
  await createBlogPostArchive({ posts, gatsbyUtilities })
}

/**
 * This function creates all the individual pages in this site
 */
const createIndividualPages = async ({ pages, gatsbyUtilities }) =>
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
          lang: page.language.code,
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
            language {
              code
            }
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
      `There was an error loading your pages`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPage.edges
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */

const createIndividualPosts = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ post }) => {
      gatsbyUtilities.actions.createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          id: post.id,
        },
      })
    })
  )

async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress pages sorted by date
      allWpPost {
        edges {
          previous {
            id
          }
          post: node {
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

  return graphqlResult.data.allWpPost.edges
}

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/news/` : `/news/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/blog-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}
