import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { mq } from "../utils/presets"
import HeaderMenu from "./HeaderMenu"
import Footer from "../components/footer"
import Logo from "../images/wildgerecht-logo-gruppe.svg"

const Navwrapper = styled.nav`
  display: flex;
  flex-flow: row;
  padding: 1rem 1rem 1rem;
  margin: 0 auto;
  justify-content: space-between;
  max-width: var(--maxWidth-5xl);
  a {
    flex: 0 1 auto;
    line-height: 0;
    display: block;
    color: white;
  }
  img {
    margin: 0;
    /* padding-bottom: 0.35rem; */
    padding-bottom: 0;
  }
  ${mq.xl} {
    h1 {
      text-align: left;
      margin-left: 1rem;
    }
  }
`

// import Header from "./header"

const Header = styled.header`
  /* background: var(--color-black); */
  height: 6rem;
  z-index: 10;
  position: relative;
  overflow: hidden;
`

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

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header className="global-header">
        <div>
          <Navwrapper aria-label="Horizontal" role="navigation">
            {isHomePage ? (
              <h1 className="main-heading">
                {title}
                <Link
                  to="/"
                  aria-label="Link zur Startseite"
                  aria-current="page"
                >
                  <img
                    src={Logo}
                    alt="Wildgerecht Logo"
                    className="logoblack"
                  />
                </Link>
              </h1>
            ) : (
              <Link className="header-link-home" to="/">
                <img src={Logo} alt="Wildgerecht Logo" className="logoblack" />
              </Link>
            )}

            <HeaderMenu uri={uri} />
          </Navwrapper>
        </div>
      </Header>

      <Main title="testing">{children}</Main>

      <Footer />
    </div>
  )
}

export default Layout
