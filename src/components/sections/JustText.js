import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/presets"
import parse from "html-react-parser"

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
`

const JustText = ({ sectionid, text, settings }) => {
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
          <div className="textcontent">{!!text && <>{parse(text)}</>}</div>
        </Wrapper>
      </div>
    </Background>
  )
}

export default JustText
