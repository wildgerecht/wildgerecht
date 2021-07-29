import React from "react"
import Button from "../button"
import styled from "styled-components"
import { mq } from "../../utils/presets"
import parse from "html-react-parser"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  max-width: ${mq.maxWidth5xl};
  margin: 1rem auto 3rem;
  /* margin: var(--spacing-auto); */

  padding: 1rem;
`

const Triple = styled.div`
  .item {
    text-align: center;
    margin-bottom: 4rem;
    .imgwrapper {
      margin: 0.5rem auto;
      height: 60px;
      width: 100%;
    }
  }
  ${mq.tablet} {
    display: flex;
    flex-flow: row wrap;
    width: 100%;

    .item {
      flex: 1 0 auto;
      width: 33.33%;
      margin-bottom: 0;

      .imgwrapper {
        margin: 0.8rem auto;
        overflow: hidden;
        max-width: 3rem;
        .gatsby-image-wrapper {
          width: 100%;
        }
      }
    }
  }
`

const GoogleMapsWrapper = styled.div`
  flex: 0 1 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 600px;
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

const Contact = ({ text, iconsWithText, sectionid }) => {
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
    <>
      <Wrapper id={sectionid}>
        <Triple>
          {!!iconsWithText &&
            iconsWithText.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <div className="imgwrapper">
                    {!!item?.icon?.localFile?.childImageSharp?.fixed && (
                      <Img
                        fixed={item.icon.localFile.childImageSharp.fixed}
                        alt={item.icon.localFile.childImageSharp?.altText}
                        style={{ height: "100%", width: "100%" }}
                        imgStyle={{ objectFit: "contain" }}
                      />
                    )}
                  </div>
                  {!!item.text && (
                    <div className="textcontent">
                      {parse(item.text)}{" "}
                      {!!item.button && <Button button={item.button} />}
                    </div>
                  )}
                </div>
              )
            })}
        </Triple>
      </Wrapper>
      <GoogleMapsWrapper id="mapsframe">
        <StaticImage
          src="../../images/mappreview.png"
          alt="Google Maps Vorschaubild des Wildgerecht Standorts"
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
      {/* <GoogleMaps>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.7327314509503!2d11.42896131609896!3d49.98338997941369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a19bc74f491315%3A0xe53cb1349cdca933!2sPleofen8!5e1!3m2!1sde!2sde!4v1620311130149!5m2!1sde!2sde"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </GoogleMaps> */}
    </>
  )
}

export default Contact
