import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { mq } from "../utils/presets"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

const Wrapper = styled.div`
  margin: var(--spacing-auto);
  margin-top: 15rem;
  padding: 1rem;
  max-width: ${mq.maxWidth5xl};
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
                  gatsbyImageData(width: 40, height: 40)
                }
              }
            }
            activeimage {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 40, height: 40)
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
      <Seo title="404: Nichts gefunden" />
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
