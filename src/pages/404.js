import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/index"
import { mq } from "../utils/presets"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

const Wrapper = styled.div`
  margin: var(--spacing-auto);
  margin-top: 15rem;
  padding: 1rem;
  max-width: var(--maxWidth-5xl);
  ${mq.xxl} {
    padding: 0;
    min-height: 45vh;
  }
`
const NotFoundPage = () => {
  const { frontPage } = useStaticQuery(graphql`
    {
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
    }
  `)

  const mobilemenu = frontPage.mobileMenu.mobilemenu
  return (
    <Layout uri="/404/" mobilemenu={mobilemenu}>
      <SEO title="404: Nichts gefunden" />
      <Wrapper>
        <h1>Nichts gefunden</h1>
        <p>Diese Seite existiert leider nicht.</p>
        <Link className="button" to="/" rel="home">
          Zur Startseite
        </Link>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
