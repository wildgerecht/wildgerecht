import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Switcher = styled.div`
  background: red;
`

function LanguageSelector(lang, uri, translationSlug) {
  if (!!lang.translationSlug) {
    if (lang.lang === "DE") {
      return (
        <Link
          className="langswitcher"
          to={`/en/${lang.translationSlug}/`}
          title="English"
        >
          EN
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 30"
            width="30"
            height="20"
          >
            <clipPath id="s">
              <path d="M0,0 v30 h60 v-30 z" />
            </clipPath>
            <clipPath id="t">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
            </clipPath>
            <g clip-path="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                stroke="#fff"
                stroke-width="6"
              />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                clip-path="url(#t)"
                stroke="#C8102E"
                stroke-width="4"
              />
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
            </g>
          </svg> */}
        </Link>
      )
    } else {
      return (
        <Link to={`/${lang.translationSlug}/`} title="German">
          DE
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            viewBox="0 0 5 3"
          >
            <desc>Flag of Germany</desc>
            <rect
              id="black_stripe"
              width="5"
              height="3"
              y="0"
              x="0"
              fill="#000"
            />
            <rect
              id="red_stripe"
              width="5"
              height="2"
              y="1"
              x="0"
              fill="#D00"
            />
            <rect
              id="gold_stripe"
              width="5"
              height="1"
              y="2"
              x="0"
              fill="#FFCE00"
            />
          </svg> */}
        </Link>
      )
    }
  } else {
    return null
  }
}

export default LanguageSelector
