import React from "react"
// import Image from "gatsby-image"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import parse from "html-react-parser"
import { Accordion, AccordionItem } from "react-sanfona"
import { mq } from "../../utils/presets"
import Button from "../button"
import Flickity from "react-flickity-component"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const flickityOptions = {
  pageDots: false,
  // freeScroll: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false,
}

const Background = styled.div`
  scroll-margin-block-start: 100px;
  ${mq.xl} {
    .midwrap {
      padding: 2rem 0;
    }
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
  /* margin: 1rem auto 3rem; */
  /* margin: var(--spacing-auto); */
  overflow: hidden;

  .video {
    display: flex;
    min-width: 50%;
    .video-container-wrapper {
      width: 100%;
      max-width: 100%;
      /* width: 600px; */
      left: 0;
      right: 0;
      margin: auto;
      .video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 0;
        height: 0;
        overflow: hidden;
      }

      .video-container iframe,
      .video-container object,
      .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .downloadbutton {
    position: relative;
    .gatsby-image-wrapper {
      position: absolute;
      left: 0.5rem;
      top: 0.2rem;
      object-fit: contain;
    }
    .buttontext {
      padding-left: 1.7rem;
      margin: 0;
    }
  }

  .wrap {
    display: flex;
    flex-flow: column;

    .imagefullheight {
      .gatsby-image-wrapper {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    .image {
      /* max-height: 65vh; */
      order: 0;
      /* position: relative; */

      .logowrapper {
        position: absolute;
        max-width: 200px;
        margin: 0 auto;
        top: -1rem;
        right: 0;
        left: 0;
        z-index: 1;
      }
    }
    .content {
      order: 1;
    }
  }

  .content {
    /* min-height: 36rem; */
    padding: 0 1rem;

    h1,
    h2 {
      margin-top: 1rem;
    }

    /* ul {
      li {
        padding: 0;
        margin: 0;
      }
    } */
    .button {
      margin: 1rem 0 0;
    }
  }

  .akkwrap {
    .button {
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }

    h3 {
      /* font-weight: 300; */
      /* line-height: calc(1.1em + 0.5vw); */
      font-size: calc(1.2em + 0.3vw);
      border-bottom: 2px solid #f47d00;
      padding-bottom: 0.3rem;
      position: relative;
      padding-right: 2rem;
      &:after {
        content: " ";
        clear: both;
        position: absolute;
        display: block;
        background-color: #f47d00;
        height: 4px;
        top: 15px;
        z-index: 9;
        width: 20px;
        right: 0;
        transition: all 300ms 0s ease-in-out;
        transform: rotate(0deg);
      }
      &:before {
        transition: all 300ms 0s ease-in-out;
        content: " ";
        position: absolute;
        display: block;
        background-color: #f47d00;
        width: 4px;
        right: 8px;
        top: 7px;
        bottom: 10px;
        z-index: 9;
        transition: all 0.3s;
        height: 21px;
      }
    }
    .react-sanfona-item-expanded {
      h3 {
        &:after {
          transform: rotate(180deg);
        }
        &:before {
          transform: rotate(180deg);
          opacity: 0;
        }
      }
    }
    .react-sanfona-item {
      padding: 0.7rem 0;
      p {
        padding-top: 0.3rem;
      }
    }
  }

  ${mq.desktop} {
    /* margin: 5rem auto 3rem; */
    /* margin: var(--spacing-auto); */
    margin: 0 auto;
    .wrap {
      display: flex;
      flex-flow: row;
      .image {
        order: initial;
        position: relative;
        .logowrapper {
          position: absolute;
          max-width: 300px;
          top: -4rem;
          right: -5rem;
          z-index: 1;
          left: initial;
        }
      }
      .content {
        order: initial;

        h1,
        h2 {
          margin-top: 0;
        }
      }
    }

    .content {
      flex: 1 0 auto;
      width: 50%;
      padding-right: 3rem;
    }

    .customwidth-small {
      width: 35% !important;
    }

    .customwidth-big {
      width: 65% !important;
    }

    .contentright {
      padding-left: 3rem;
      order: 1 !important;
    }

    .imageleft {
      padding-right: 3rem;
    }

    .imageright {
      padding-left: 3rem;
    }

    .image {
      flex: 1 0 auto;
      width: 50%;
      /* height: 65vh; */
      /* .gatsby-image-wrapper {
        height: 100%;
      } */
    }
  }
`

const Slider = styled.div`
  .slider {
    .slide {
      width: 100%;
      /* height: 35vh;
      height: 50vh;
      height: 70vh; */
      .gatsby-image-wrapper {
        object-fit: cover;
        height: 100% !important;
      }
    }
    .height-35vh {
      height: 35vh;
    }
    .height-50vh {
      height: 50vh;
    }
    .height-70vh {
      height: 70vh;
    }
    .height-90vh {
      height: 90vh;
    }
  }
`

const TextBild = ({
  image,
  title,
  content,
  button,
  textRightSide,
  activateaccordion,
  akkordion,
  settings,
  sectionid,
  slider,
  slidersettings,
  download,
  video,
}) => {
  console.log(settings)

  const featuredImage = {
    // image: getImage(image?.localFile),
    image: image?.localFile?.childImageSharp,
    fluid: image?.localFile?.childImageSharp?.fluid,
    alt: image?.altText || ``,
  }

  // const featuredLogo = {
  //   fluid: logo?.localFile?.childImageSharp?.fluid,
  //   alt: logo?.altText || ``,
  // }

  // TEXT / IMAGE POSITION

  let textrightside = "contentleft"
  let imageposition = "imageright"
  let slideleft = "slide-right"
  let slideright = "slide-left"
  if (textRightSide === true) {
    textrightside = "contentright"
    imageposition = "imageleft"
    slideleft = "slide-left"
    slideright = "slide-right"
  }

  // SLIDER SETTINGS HEIGHT

  let sliderheight = ""
  if (slidersettings?.height === "35") {
    sliderheight = "height-35vh"
  }
  if (slidersettings?.height === "50") {
    sliderheight = "height-50vh"
  }
  if (slidersettings?.height === "70") {
    sliderheight = "height-70vh"
  }
  if (slidersettings?.height === "90") {
    sliderheight = "height-90vh"
  }

  // CUSTOM WIDTH

  let customwidthsmall = ""
  let customwidthbig = ""
  if (settings.textthreequarters) {
    customwidthsmall = "customwidth-small"
    customwidthbig = "customwidth-big"
  }

  let customImageHeight = "initial"
  let imagefullheight = ""
  if (settings.stretchimage) {
    customImageHeight = "100%"
    imagefullheight = "imagefullheight"
  }

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
        <Wrapper>
          <div className="wrap">
            <div
              className={"content " + textrightside + " " + customwidthbig}
              data-sal={slideleft}
              data-sal-easing="ease"
              data-sal-duration="800"
            >
              {settings.header && settings.header
                ? !!title && parse(title)
                : !!title && parse(title)}
              {content && <div>{parse(content)}</div>}
              {!!activateaccordion === true && (
                <div className="akkwrap">
                  {!!akkordion && (
                    <Accordion>
                      {akkordion.map((item, i) => {
                        return (
                          <AccordionItem
                            className="akkordiontitle"
                            key={item.title + i}
                            title={item.title}
                            expanded={item === 1}
                          >
                            {!!item.text && <div>{parse(item.text)}</div>}
                            {!!item.akkordionbutton && (
                              <Button button={item.akkordionbutton} />
                            )}
                          </AccordionItem>
                        )
                      })}
                    </Accordion>
                  )}
                </div>
              )}
              {button && (
                <Button
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="800"
                  button={button}
                />
              )}

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

            {!settings?.slider && !settings?.video && (
              <>
                <div
                  className={
                    "image " +
                    imagefullheight +
                    " " +
                    imageposition +
                    " " +
                    customwidthsmall
                  }
                  data-sal={slideright}
                  data-sal-easing="ease"
                  data-sal-duration="800"
                >
                  {featuredImage && (
                    <GatsbyImage
                      image={getImage(featuredImage.image)}
                      alt={featuredImage.alt}
                    />
                  )}
                </div>
              </>
            )}

            {settings?.video && (
              <>
                <div className="video">
                  <div className="video-container-wrapper">
                    <div className="video-container">
                      {video && parse(video)}
                    </div>
                  </div>
                </div>
              </>
            )}

            {settings?.slider && (
              <>
                <Slider
                  className={
                    "image " +
                    imagefullheight +
                    " " +
                    imageposition +
                    " " +
                    customwidthsmall
                  }
                >
                  {/* data-sal={slideright}
                  data-sal-easing="ease"
                  data-sal-duration="800" */}
                  {!!slider && (
                    <Flickity
                      className={"carousel slider"} // default ''
                      elementType={"div"} // default 'div'
                      options={flickityOptions} // takes flickity options {}
                      disableImagesLoaded={false} // default false
                      reloadOnUpdate // default false
                      static // default false>
                    >
                      {slider.map((item, i) => (
                        <div className={"slide " + sliderheight} key={i}>
                          <GatsbyImage
                            objectFit="cover"
                            objectPosition="50% 50%"
                            style={{ height: customImageHeight }}
                            image={getImage(item?.image?.localFile)}
                            alt={item?.image?.localFile?.childImageSharp?.alt}
                          />
                        </div>
                      ))}
                    </Flickity>
                  )}
                </Slider>
              </>
            )}
          </div>
        </Wrapper>
      </div>
    </Background>
  )
}

export default TextBild
