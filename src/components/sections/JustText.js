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
  height: 600px;
  .mappreview {
    height: 100%;
    img {
      object-fit: cover;
    }
  }
  picture {
    opacity: 0.4;
  }
  p {
    font-size: 1rem;
    font-weight: bold;
    a {
      font-size: 1.1rem;
      font-weight: bold;
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
    padding: 220px 1rem;
    background: rgba(0, 0, 0, 0.2);
    line-height: 1.6;
  }
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

    var maptext = document.getElementById("maptext")
    maptext.remove()
    var div = document.getElementById("mapsframe")
    div.firstElementChild.remove()
    var gmapiframe =
      "<iframe id='googlemaps' title='Google Maps Wildgerecht' width='100%' height='600px' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.7327314509503!2d11.42896131609896!3d49.98338997941369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a19bc74f491315%3A0xe53cb1349cdca933!2sPleofen8!5e1!3m2!1sde!2sde!4v1620311130149!5m2!1sde!2sde' frameborder='0' allowfullscreen />"
    div.innerHTML += gmapiframe
  }

  return (
    <Background id={sectionid} className={spacingtop + " " + spacingbottom}>
      <div className={"midwrap " + backgroundcolor}>
        <GoogleMapsWrapper id="mapsframe">
          <StaticImage
            className="mappreview"
            src="../../images/mappreview.png"
            alt="Google Maps Vorschaubild des Wildgerecht Standorts"
            height={600}
            style={{ width: "100%" }}
          />
          <div id="maptext" className="maptext">
            <p>
              Mit dem Laden der Karte akzeptieren
              <br /> Sie die{" "}
              <a
                href="https://policies.google.com/privacy"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                Datenschutzerklärung
              </a>{" "}
              von Google.
            </p>
            <button className="button ladenbutton" onClick={handleClick}>
              Karte laden
            </button>
          </div>
        </GoogleMapsWrapper>
      </div>
    </Background>
  )
}

export default JustText
