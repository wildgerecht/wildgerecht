import React from "react"
import UniversalLink from "./UniversalLink"
import styled from "styled-components"
import HeaderMenu from "./nav/HeaderMenu"
import HeaderMenuEn from "./nav/HeaderMenuEn"
// import Logo from "../images/wildgerecht-logo-gruppe.svg"
import Logo from "../images/wildgerecht-logo-weiss.svg"
import { mq } from "../utils/presets"
import Headroom from "react-headroom"

const HeaderWrapper = styled.header`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  ${mq.desktop} {
    position: fixed;
  }
`

const Navwrapper = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  max-width: ${mq.maxWidth5xl};
  margin: 0 auto;
  .logolink {
    flex: 0 1 auto;
    line-height: 0;
    display: block;
    position: relative;
    width: 100%;
    img {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0%);
      top: 1rem;
      display: block;
      max-width: 300px;
    }
  }

  ${mq.desktop} {
    h1 {
      text-align: left;
      margin-left: 1rem;
    }
    .logolink {
      width: initial;
      position: initial;
      padding: 0.5rem;
      /* padding: 1rem; */
      img {
        width: 170px;
        margin: 0;
        position: initial;
        transform: initial;
        top: 0;
      }
    }
  }
`

const Header = ({
  isHomePage,
  title,
  uri,
  frontPage,
  lang,
  translationSlug,
}) => {
  return (
    <HeaderWrapper className="global-header">
      <Headroom disableInlineStyles>
        <div>
          <Navwrapper aria-label="horizontal" role="navigation">
            {frontPage ? (
              <UniversalLink
                className="header-link-home logolink"
                to="/"
                aria-label="Link zur Startseite"
                aria-current="page"
              >
                <img src={Logo} alt="Wildgerecht Logo" className="logo" />
              </UniversalLink>
            ) : (
              <UniversalLink className="header-link-home logolink" to="/">
                <img src={Logo} alt="Wildgerecht Logo" className="logo" />
              </UniversalLink>
            )}
            {lang !== "EN" && (
              <HeaderMenu
                uri={uri}
                lang={lang}
                translationSlug={translationSlug}
              />
            )}
            {lang === "EN" && (
              <HeaderMenuEn
                uri={uri}
                lang={lang}
                translationSlug={translationSlug}
              />
            )}
          </Navwrapper>
        </div>
      </Headroom>
    </HeaderWrapper>
  )
}

export default Header
