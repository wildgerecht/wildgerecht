import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Footer from "../components/footer"
import Header from "./Header"
import { mq } from "../utils/presets"
import UniversalLink from "./UniversalLink"
import Image from "gatsby-image"
import "../style.scss"

const Main = styled.main``

const FixedBottomMenuWrapper = styled.nav`
  display: block;
  ul {
    z-index: 100;
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    /* background: var(--color-darkgreen); */
    background: #202020;
    width: 100%;
    display: flex;
    flex-flow: row;
    list-style: none;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

    li {
      flex: 1 0 auto;
      width: 20%;
      height: 85px;
      padding: 0;
      margin: 0;
      text-align: center;
      /* border-right: 1px solid #ddd; */
      padding-bottom: 0.3rem;
      &:last-child {
        border: 0;
      }
      a {
        height: 100%;
        color: #bbb;
        width: 100%;
        display: block;
        margin: 0;
        /* padding: 0.4rem 0.1rem 0.9rem; */
        padding-bottom: env(safe-area-inset-bottom);
        font-size: 0.75rem;
        text-decoration: none;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        font-family: var(--fontFamily-sans);
        text-transform: uppercase;
        letter-spacing: 1.5px;

        .imgwrapper {
          position: relative;
          display: block;
          margin: 0 auto;
          .img-top {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
          }
        }

        p {
          flex: 0 1 auto;
        }
      }
    }

    .activelink {
      .img-bottom {
        opacity: 0;
      }
      .img-top {
        display: inline !important;
      }
    }

    a:hover {
      .img-bottom {
        opacity: 0;
      }
      .img-top {
        display: inline !important;
      }
      p {
        color: var(--color-orange) !important;
      }
    }
  }
  ${mq.mobilemed} {
    font-size: 0.7rem;
  }
  ${mq.desktop} {
    display: none;
  }
`

const Layout = ({ isHomePage, children, uri, mobilemenu }) => {
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
      <FixedBottomMenuWrapper id="bottomnav">
        <ul>
          {mobilemenu.map((item, i) => (
            <li key={i} className={item.link.url === uri ? "activelink" : ""}>
              {!!item.link.url && (
                <UniversalLink
                  to={item.link.url}
                  activeStyle={{
                    color: "#FF6D20",
                  }}
                >
                  {!!item?.image && (
                    <div className="imgwrapper">
                      <div className="menuicon img-bottom">
                        {item.link.url === uri ? (
                          <Image
                            className="activeurl"
                            fixed={item.image.localFile.childImageSharp.fixed}
                            alt=""
                          />
                        ) : (
                          <Image
                            fixed={item.image.localFile.childImageSharp.fixed}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="menuicon img-top">
                        <Image
                          fixed={
                            item.activeimage.localFile.childImageSharp.fixed
                          }
                          alt={item.activeimage.altText}
                        />
                      </div>
                    </div>
                  )}
                  {!!item.link.title && <p>{item.link.title}</p>}
                </UniversalLink>
              )}
            </li>
          ))}
        </ul>
      </FixedBottomMenuWrapper>
      <Footer />
    </div>
  )
}

export default Layout
