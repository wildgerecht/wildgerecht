import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { mq } from "../utils/presets"
import Dog from "../images/deutschdrahthaar.svg"
import LogoWeiss from "../images/wildgerecht-logo-weiss.svg"

// const Year = new Date().getFullYear()

const Footer = styled.footer`
  padding: 0;
  position: relative;
  background: var(--color-darkgreen);
  .inner {
    max-width: ${mq.maxWidth5xl};
    margin: 0 auto;
    padding-top: 1rem;
    .dog {
      display: none;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 1rem;
      column-count: 2;
      column-gap: 50px;

      margin-bottom: 1rem;
      li {
        margin: 0;
        padding: 0;
        .socialicon {
          margin: 1rem 1.5rem 1rem 0;
          font-size: 1.8rem;
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
      margin: 0 auto;
      padding: 0.5rem 1rem;
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
      display: flex;
      justify-content: space-between;
      .button {
        width: 50%;
        flex: 0 1 auto;
        margin: 0 1rem 2rem;
        text-align: center;
      }
    }
  }

  /* tablet design */
  ${mq.tablet} {
    .inner {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      ul {
        width: 40%;
        flex: 0 1 auto;
        order: 1;
        margin: 0;
        padding: 0;
        margin-top: 1.5rem;
        li {
          .socialicon {
            margin: 0.5rem 0 0 0;
            &:first-child {
              margin-right: 0.7rem;
            }
          }
        }
      }
      .logo {
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
        width: 25%;
        order: 2;
        flex: 0 1 auto;
        flex-flow: column;
        .button {
          width: initial;
          min-width: 7rem;
        }
      }
    }
  }
  ${mq.xl} {
    .inner {
      padding-top: 0;
      .logo {
        max-width: initial;
        width: 30%;
        padding: 0;
        .logooriginal {
          img {
            max-height: 8.5rem;
          }
        }
      }
      .dog {
        order: 1;
        display: block;
        position: relative;
        width: 15%;
        flex: 1 0 auto;
        img {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 17rem;
        }
      }
      ul {
        flex: 0 1 auto;
        width: 25%;
        li {
          .socialicon {
            font-size: 2.2rem;
            margin: 1rem 0 0 0;
            &:first-child {
              margin-right: 0.5rem;
            }
          }
        }
      }
      .buttons {
        width: initial;
        /* margin-top: 1.8rem; */
        /* margin-bottom: 2rem; */

        .button {
          display: inline;
          width: initial;
        }
      }
    }
  }
`

const FooterSection = () => (
  <Footer>
    <div className="inner">
      <div className="dog">
        <img src={Dog} alt="Deutsch Drahthaar" />
      </div>
      <ul>
        <li>
          <Link to="/kompetenz/">Kompetenz</Link>
        </li>
        <li>
          <Link to="/leistungen/">Leistungen</Link>
        </li>
        <li>
          <Link to="/workshops/">Workshops</Link>
        </li>
        <li>
          <Link to="/kontakt/">Kontakt</Link>
        </li>
        <li>
          <Link to="/datenschutz/">Datenschutz</Link>
        </li>
        <li>
          <Link to="/impressum/">Impressum</Link>
        </li>
        <li>
          <a
            href="http://de.linkedin.com/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            aria-label="wildgerecht auf LinkedIn"
          >
            <FaLinkedin className="socialicon" alt="wildgerecht auf LinkedIn" />
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
        <a href="tel:+4992160806923" className="button">
          Telefon
        </a>
      </div>
      <Link className="logo" to="/" alt="Home">
        <div className="logooriginal">
          <img src={LogoWeiss} alt="Wildgerecht Logo" />
        </div>
      </Link>
    </div>
  </Footer>
)

export default FooterSection
