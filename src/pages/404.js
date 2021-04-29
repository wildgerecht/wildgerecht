import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/index"
import { colors } from "../utils/presets"
import SEO from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 60vh;
  .button {
    transition: all 0.2s;
    background: ${colors.orange};
    display: inline;
    padding: 0.5rem 1rem;
    color: white;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border: 2px solid ${colors.orange};
    &:hover,
    &:focus {
      background: white;
      color: ${colors.orange};
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Nichts gefunden" />
    <Wrapper
      style={{
        maxWidth: "1140px",
        margin: "0 auto",
        padding: "5rem 1rem 6rem",
      }}
    >
      <h1>Nichts gefunden</h1>
      <p>Diese Seite existiert leider nicht.</p>
      <Link className="button" to="/" rel="home">
        Zur Startseite
      </Link>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
