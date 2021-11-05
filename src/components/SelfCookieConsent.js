import React from "react"
import LogoWeiss from "../images/wildgerecht-logo-weiss.svg"
import { Link } from "gatsby"
import { mq, colors } from "../utils/presets"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"

const Consent = styled.div`
  .consent-container {
    z-index: 999;
    text-align: center;
    padding: 1rem;
    background: #333;
    position: fixed;
    left: 1rem;
    right: 1rem;
    bottom: 5rem;
    max-width: 700px;
    border-radius: 13px;
    padding-top: 2.5rem;
    ${mq.tablet} {
      left: initial;
      right: 2rem;
      bottom: 2rem;
    }
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: -3rem;
      margin-bottom: 0.5rem;
      background: #333;
      padding: 0.5rem;
      border-radius: 13px;
      margin: 0 auto;
    }
    p {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    button {
      margin-right: 0.8rem;
      margin-top: 0.5rem;
      border: none;
      outline: none;
      &:hover {
        cursor: pointer;
        color: white;
      }
    }
  }
`

const SelfCookieConsent = () => {
  return (
    <Consent>
      <CookieConsent
        disableStyles={true}
        location="bottom"
        enableDeclineButton
        declineButtonText="Ablehnen"
        buttonText="Akzeptieren"
        cookieName="gatsby-gdpr-google-analytics"
        expires={365}
        declineButtonClasses="button"
        buttonClasses="button"
        containerClasses="consent-container"
        contentClasses="consent-content"
      >
        <img src={LogoWeiss} alt="Wildgerecht Logo" width="120" />

        <p>
          Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
          essenziell, während andere uns helfen, diese Website und Ihre
          Erfahrung zu verbessern. Wenn Sie akzeptieren, erlauben Sie uns,
          Google Analytics und Youtube-Dienste zu verwenden.
        </p>
        <p>
          Dabei erfolgt eine Datenübertragung in die USA, wo Ihre Daten
          eventuell von Sicherheitsbehörden eingesehen werden können, ohne dass
          Ihnen eine Rechtsschutzmöglichkeit zusteht.
        </p>
        <p>
          Mehr dazu in unserer &nbsp;
          <Link to="/datenschutz/">Datenschutzerklärung</Link>.
        </p>
      </CookieConsent>
    </Consent>
  )
}

export default SelfCookieConsent
