import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/presets"
import parse from "html-react-parser"
import { StaticImage } from "gatsby-plugin-image"

const Background = styled.div`
  scroll-margin-block-start: 100px;
  .midwrap {
    padding: 2rem 0;
  }
  /* background: darkgreen;
  color: black;
  h2,
  h1,
  h3 {
    color: black;
  } */
`

const Wrapper = styled.div`
  max-width: ${mq.maxWidth5xl};
  margin: 0 auto;
  /* margin: 1rem auto 3rem; */
  /* margin: var(--spacing-auto); */
  .textcontent {
    padding: 0 1rem;
  }
  padding-bottom: 4rem;

  /* BREAK LONG LINKS */
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`

const JustText = ({ sectionid, text, settings, download }) => {
  // DEFINE SPACING

  let spacingtop = ""
  if (settings?.spacingTop === "nospace") {
    spacingtop = "spacingtop-nospace"
  }
  if (settings?.spacingTop === "small") {
    spacingtop = "spacingtop-small"
  }
  if (settings?.spacingTop === "medium") {
    spacingtop = "spacingtop-medium"
  }
  if (settings?.spacingTop === "big") {
    spacingtop = "spacingtop-big"
  }

  let spacingbottom = ""
  if (settings?.spacingBottom === "nospace") {
    spacingbottom = "spacingbottom-nospace"
  }
  if (settings?.spacingBottom === "small") {
    spacingbottom = "spacingbottom-small"
  }
  if (settings?.spacingBottom === "medium") {
    spacingbottom = "spacingbottom-medium"
  }
  if (settings?.spacingBottom === "big") {
    spacingbottom = "spacingbottom-big"
  }

  // BACKGROUND COLOR

  let backgroundcolor = ""
  if (settings.backgroundcolor === "green") {
    backgroundcolor = "greenbackground"
  }
  if (settings.backgroundcolor === "orange") {
    backgroundcolor = "orangebackground"
  }

  return (
    <Background id={sectionid} className={spacingtop + " " + spacingbottom}>
      <div className={"midwrap " + backgroundcolor}>
        <Wrapper id={sectionid}>
          <div className="textcontent">
            {!!text && <>{parse(text)}</>}
            {download && (
              <a
                className="button downloadbutton"
                href={download.localFile.publicURL}
                download
              >
                <StaticImage
                  src="../../images/WG-Download_RGB_orange mit weß.svg"
                  alt=""
                  width={32}
                  height={40}
                />{" "}
                <span className="buttontext">
                  {download.title} ({download.localFile.prettySize})
                </span>
              </a>
            )}
          </div>
        </Wrapper>
      </div>
    </Background>
  )
}

export default JustText
