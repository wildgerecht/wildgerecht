import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaLinkedinIn } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { mq } from "../utils/presets"
import Dog from "../images/deutschdrahthaar.svg"
import LogoWeiss from "../images/wildgerecht-logo-weiss.svg"
import FooterMenu from "../components/nav/FooterMenu"
import FooterMenuEn from "../components/nav/FooterMenuEn"

// const Year = new Date().getFullYear()

const Footer = styled.footer`
  padding: 0;
  position: relative;
  background: var(--color-darkgreen);
  padding-bottom: 4.3rem;
  .inner {
    max-width: ${mq.maxWidth5xl};
    margin: 0 auto;
    padding-top: 1rem;
    display: flex;
    flex-flow: column;
    .dog {
      z-index: 0;
      order: 4;
      display: block;
      position: relative;
      width: 100%;
      flex: 1 0 auto;
      pointer-events: none;
      img {
        /* display: none; */
        pointer-events: none;
        position: absolute;
        right: 0;
        left: -1rem;
        bottom: 0;
        width: 12rem;
        margin: 0 auto;
      }
    }
    ul {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      padding-right: 2rem;
      padding-left: 2rem;
      column-count: 1;
      text-align: center;
      order: 3;
      margin: 0;
      .nomobile {
        display: none;
      }
      li {
        display: inline;
        list-style: none;
        word-break: keep-all;
        .socialicon {
          margin-top: 1rem;
          margin-bottom: 0;
          font-size: 1.8rem;
          display: block;
          text-align: center;
          width: 100%;
        }
        a {
          font-size: 1.1rem;
          line-height: 1.8;
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          font-family: var(--fontFamily-sans);
          letter-spacing: 2px;
          &:hover {
            color: var(--color-primary);
          }
        }
      }
    }
    .logo {
      order: 0;
      margin: 0 auto;
      padding: 0.5rem 1rem 1.5rem;
      width: 10rem;
      display: block;
      text-align: center;
      text-decoration: none;
      .logooriginal {
        color: white;
        img {
          max-width: 15rem;
        }

        .copyright {
          font-size: 18px;
          display: block;
          color: var(--color-text);
          text-decoration: none;
          margin: 0;
          margin-top: 1rem;
        }
      }
      .logoinner {
        display: inline-block;
        text-align: right;
        .copyright {
          font-size: 16px;
          display: block;
          text-align: right;
          color: var(--color-text);
          text-decoration: none;
          margin: 0;
          margin-top: -0.5rem;
        }
      }
    }
    .buttons {
      order: 2;
      display: flex;
      justify-content: space-between;
      margin-bottom: 6rem;
      .button {
        width: 50%;
        flex: 0 1 auto;
        margin: 0 0.5rem 2.5rem;
        &:first-child {
          margin-left: 1rem;
        }
        &:last-child {
          margin-right: 1rem;
        }
        ${mq.phablet} {
          margin: 0 1rem 2rem;
        }
        text-align: center;
      }
      .linkedinbutton {
        padding-top: 0.7rem;
        padding-bottom: 0;
        width: 3rem;
        ${mq.desktop} {
          display: none !important;
        }
      }
    }
  }

  ${mq.desktop} {
    padding-bottom: 0;
    .inner {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      .dog {
        flex: 0 1 auto;
        display: block;
        width: 20%;
        order: 1;
        ${mq.xxl} {
          width: 30%;
        }
        img {
          pointer-events: none;
          position: absolute;
          left: -5rem;
          bottom: 0;
          width: 17rem;
          ${mq.xxl} {
            width: 22rem;
          }
        }
      }
      ul {
        display: block;
        gap: 30px;
        column-count: 2;
        width: 25%;
        flex: 0 1 auto;
        order: 1;
        margin: 0;
        padding: 0;
        margin-top: 1rem;
        text-align: left;
        .nomobile {
          display: block;
        }
        .linkedinicon {
          display: flex;
        }
        li {
          text-align: left;
          display: list-item;
          .socialicon {
            margin: 0.5rem 0 0 0;
            &:first-child {
              margin-right: 0.7rem;
            }
          }
        }
      }
      .logo {
        min-width: initial;
        max-width: initial;
        margin: 0;
        text-align: left;
        margin-top: 1rem;
        flex: 0 1 auto;
        width: 20%;
        order: 0;
        max-width: 250px;
      }
      .buttons {
        text-align: right;
        margin-top: 1.5rem;
        width: 20%;
        order: 2;
        flex: 0 1 auto;
        flex-flow: column;
        margin-bottom: 0;
        .button {
          width: initial;
          min-width: 7rem;
        }
      }
    }
  }
`

const FooterSection = ({ lang, uri, translationSlug }) => (
  <Footer>
    <div className="inner">
      <div className="dog">
        <img src={Dog} alt="Deutsch Drahthaar" />
      </div>
      <ul>
        {lang !== "EN" && (
          <FooterMenu lang={lang} uri={uri} translationSlug={translationSlug} />
        )}
        {lang === "EN" && (
          <FooterMenuEn
            lang={lang}
            uri={uri}
            translationSlug={translationSlug}
          />
        )}

        <li className="nomobile linkedinicon">
          <a
            href="https://www.linkedin.com/in/timothy-kolb-9a199a1b9/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            aria-label="wildgerecht auf LinkedIn"
            title="wildgerecht auf LinkedIn"
          >
            <FaLinkedin className="socialicon" />
          </a>
          {/* <a
            href="https://facebook.com/wildgerecht"
            target="_blank"
            rel="noopener nofollow noreferrer"
            aria-label="wildgerecht auf Facebook"
          >
            <FaFacebook className="socialicon" alt="wildgerecht auf Facebook" />
          </a> */}
          {/* <a
            href="https://instagram.com/wildgerecht"
            target="_blank"
            rel="noopener nofollow noreferrer"
            aria-label="wildgerecht auf Instagram"
          >
            <FaInstagram
              className="socialicon"
              alt="wildgerecht auf Instagram"
            />
          </a> */}
        </li>
      </ul>
      <div className="buttons">
        <a href="mailto:info@wildgerecht.de" className="button">
          E-Mail
        </a>
        <a
          href="https://www.linkedin.com/in/timothy-kolb-9a199a1b9/"
          className="button linkedinbutton"
          aria-label="wildgerecht auf LinkedIn"
          title="wildgerecht auf LinkedIn"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <FaLinkedinIn className="socialicon" />{" "}
        </a>
        <a href="tel:+4992719079880" className="button">
          Telefon
        </a>
      </div>
      <Link className="logo" to="/" rel="Home">
        <div className="logooriginal">
          <img src={LogoWeiss} alt="Wildgerecht Logo" />
        </div>
      </Link>
    </div>
  </Footer>
)

export default FooterSection
