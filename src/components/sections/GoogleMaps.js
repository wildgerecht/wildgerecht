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

const GoogleMapsWrapper = styled.div`
  flex: 0 1 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 670px;
  picture {
    opacity: 0.4;
  }
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    object-fit: contain;
    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }
  .ladenbutton {
    border: none;
    box-shadow: none;
    &:focus,
    &:hover {
      cursor: pointer;
    }
  }
  .maptext {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    line-height: 1.6;
    .centertext {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-top: -2rem;
      p {
        font-size: 22px;
      }
    }
  }
`

const GoogleMaps = ({ sectionid, text, settings, iframe }) => {
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

  function handleClick(e) {
    e.preventDefault()
    // Create Element.remove() function if not exist
    if (!("remove" in Element.prototype)) {
      Element.prototype.remove = function () {
        if (this.parentNode) {
          this.parentNode.removeChild(this)
        }
      }
    }
    const maptext = document.getElementById("maptext")
    maptext.remove()
    const div = document.getElementById("mapsframe")
    div.firstElementChild.remove()
    const gmapiframe = iframe
    div.innerHTML += gmapiframe
  }

  return (
    <Background id={sectionid} className={spacingtop + " " + spacingbottom}>
      <GoogleMapsWrapper id="mapsframe">
        <StaticImage
          className="mappreview"
          src="../../images/mappreview.png"
          alt="Google Maps Vorschaubild des Wildgerecht Standorts"
          height={750}
          objectFit="fill"
          loading="lazy"
        />
        <div id="maptext" className="maptext">
          <div className="centertext">
            {!!text && parse(text)}
            <button className="button ladenbutton" onClick={handleClick}>
              Karte laden
            </button>
          </div>
        </div>
      </GoogleMapsWrapper>
    </Background>
  )
}

export default GoogleMaps
