import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { mq, colors } from "../utils/presets"
import parse from "html-react-parser"
import Button from "../components/button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FullScreenHeader from "../components/sections/FullscreenHeader"

String.prototype.trunc = function (n, useWordBoundary) {
  if (this.length <= n) {
    return this
  }
  var subString = this.substr(0, n - 1)
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "&hellip;"
  )
}
const NewsWrapper = styled.div`
  scroll-margin-block-start: 100px;
  position: relative;
  margin: var(--spacing-auto);
  max-width: ${mq.maxWidth5xl};
`

const News = styled.ul`
  margin: 0;
  margin-top: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  a {
    width: 100%;
    flex: 0 1 auto;
    margin-right: 1rem;
    margin-bottom: 3rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    text-decoration: none;
    background: var(--color-darkgreen);
    &:hover,
    &:focus {
      opacity: 1;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
      transform: translateY(-10px) rotate(-0.2deg);
    }
    .imagewrapper {
      height: 10rem;
      position: relative;
    }
    .textwrapper {
      display: flex;
      flex-flow: column;
      padding: 1rem;
      color: white;
      .date {
        color: #ccc;
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
        span {
          color: ${colors.green};
          font-weight: 500;
        }
      }
      h2 {
        margin: 0 0 0.5rem;
      }
      h2 > span {
        font-size: 1.3rem;
        line-height: 1.7rem;
        margin-bottom: 0.05rem;
      }
    }
  }
  ${mq.phablet} {
    a {
      width: 46%;
    }
  }

  ${mq.xl} {
    a {
      width: 31.5%;
    }
  }
`

const BlogIndex = ({
  data: { post, frontPage, postsPage },
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = post.nodes

  const mobilemenu = frontPage.mobileMenu.mobilemenu

  if (!posts.length) {
    return (
      <Layout uri={post.uri} mobilemenu={mobilemenu}>
        <Seo title="News" />
        <p>Keine Beiträge gefunden.</p>
      </Layout>
    )
  }

  return (
    <Layout uri={post.uri} mobilemenu={mobilemenu}>
      <Seo
        title="Neuigkeiten im Bereich Jagd- und Outdoormarketing"
        description="Neuigkeiten im Bereich Jagd- und Outdoormarketing."
      />

      <FullScreenHeader
        title={postsPage.title}
        featuredImage={postsPage.featuredImage}
      />

      <NewsWrapper>
        <News style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.title

            let description = ""
            if (post.seo.metaDesc) {
              description = post?.seo?.metaDesc
            } else {
              description = post?.seo?.opengraphDescription
              description = description.trunc(210, true)
            }

            const editDateUS = post.postSettings.updateDate || null
            let editDateDE = null
            if (editDateUS !== null) {
              const editDateYear = editDateUS.substr(0, 4)
              const editDateMonth = editDateUS.substr(4, 2)
              const editDateDay = editDateUS.substr(6, 2)
              editDateDE =
                editDateDay + "." + editDateMonth + "." + editDateYear
            }

            return (
              <Link to={post.uri} itemProp="url">
                <li key={post.uri}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <div className="imagewrapper">
                      {!!post?.featuredImage?.node && (
                        <GatsbyImage
                          image={getImage(post.featuredImage.node.localFile)}
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt={post.featuredImage.node.altText}
                          style={{ position: "initial", transition: "all .2s" }}
                        />
                      )}
                    </div>
                    <div className="textwrapper">
                      <header>
                        <h2>
                          <span itemProp="headline">{parse(title)}</span>
                        </h2>
                        <p className="date">
                          Veröffentlicht: <span>{post.date}</span>{" "}
                          {!!editDateDE && (
                            <>
                              – Aktualisiert: <span>{editDateDE}</span>
                            </>
                          )}
                        </p>
                        <p className="excerpt">{parse(description)}</p>
                      </header>
                      {/* <section itemProp="description">{parse(post.excerpt)}</section> */}
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </News>

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>
              <Button content="Neuere Beiträge" />
            </Link>
            <br />
          </>
        )}
        {nextPagePath && (
          <Link to={nextPagePath}>
            <Button content="Ältere Beiträge" />
          </Link>
        )}
      </NewsWrapper>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    frontPage: wpPage(isFrontPage: { eq: true }) {
      title
      mobileMenu {
        mobilemenu {
          link {
            target
            title
            url
          }
          image {
            altText
            localFile {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          activeimage {
            localFile {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }

    postsPage: wpPage(isPostsPage: { eq: true }) {
      title

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }

    post: allWpPost(
      sort: { fields: postSettings___updateDate, order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        uri
        date(formatString: "DD.MM.YY")
        title
        postSettings {
          updateDate
        }

        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }

        seo {
          metaDesc
          opengraphDescription
        }
      }
    }
  }
`
