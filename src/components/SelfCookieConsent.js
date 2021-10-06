import * as React from "react"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { colors, mq } from "../utils/presets"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoWeiss from "../images/wildgerecht-logo-weiss.svg"

const CookieConsentWrapper = styled.div`
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
  .decline {
    color: #333;
    background: #ccc;
    margin-right: 0.8rem;
  }
  .accept {
    background: ${colors.green};
    color: #222;
  }
  .decline,
  .accept {
    margin-top: 0.5rem;
    border: none;
    outline: none;
    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`

function isBrowser() {
  return typeof window !== "undefined"
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function useStickyState(defaultValue, key) {
  const [value, setter] = React.useState(() => {
    return getValue(key, defaultValue)
  })

  React.useEffect(() => {
    setValue(key, value)
  }, [key, value])

  return [value, setter]
}

const CookieConsent = () => {
  const location = useLocation()
  if (isBrowser()) {
    initializeAndTrack(location)
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    "consentCookieHidden"
  )

  const EnableAnalytics = () => {
    document.cookie = "gatsby-gdpr-google-analytics=true"
    setBannerHidden(true)
  }

  const Decline = () => {
    setBannerHidden(true)
  }

  return (
    <>
      {!bannerHidden && (
        <CookieConsentWrapper>
          <div>
            <img src={LogoWeiss} alt="Wildgerecht Logo" width="120" />
            <p>
              Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
              essenziell, während andere uns helfen, diese Website und Ihre
              Erfahrung zu verbessern. Wenn Sie akzeptieren, erlauben Sie uns,
              Google Analytics und Youtube-Dienste zu verwenden.
            </p>
            <p>
              Dabei erfolgt eine Datenübertragung in die USA, wo Ihre Daten
              eventuell von Sicherheitsbehörden eingesehen werden können, ohne
              dass Ihnen eine Rechtsschutzmöglichkeit zusteht.
            </p>
            <p>
              Mehr dazu in unserer &nbsp;
              <Link to="/datenschutz/">Datenschutzerklärung</Link>.
            </p>

            <button className="button decline" onClick={Decline}>
              Ablehnen
            </button>
            <button className="button accept" onClick={EnableAnalytics}>
              Akzeptieren
            </button>
          </div>
        </CookieConsentWrapper>
      )}
    </>
  )
}

export default CookieConsent
