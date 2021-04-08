import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Footer from "../components/footer"
import Header from "./Header"

const Main = styled.main``

const Layout = ({ isHomePage, children, uri }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  const frontPage = isHomePage

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header frontPage={frontPage} title={title} uri={uri} />

      <Main>{children}</Main>

      <Footer />
    </div>
  )
}

export default Layout
