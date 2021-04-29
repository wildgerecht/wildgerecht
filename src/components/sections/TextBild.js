import React from "react"
import Image from "gatsby-image"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import parse from "html-react-parser"
import { Accordion, AccordionItem } from "react-sanfona"
import { mq } from "../../utils/presets"
import Button from "../button"
import Flickity from "react-flickity-component"

const flickityOptions = {
  pageDots: false,
  // freeScroll: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false,
}

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
  max-width: var(--maxWidth-5xl);
  /* margin: 1rem auto 3rem; */
  /* margin: var(--spacing-auto); */
  .wrap {
    display: flex;
    flex-flow: column;

    .image {
      order: 0;
      position: relative;
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
      /* font-size: calc(1em + 0.4vw); */
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

  ${mq.xl} {
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

    .contentright {
      padding-left: 3rem;
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
  width: 100%;
  .slide {
    width: 100%;
  }
`

const TextBild = ({
  image,
  logo,
  title,
  content,
  button,
  textRightSide,
  activateaccordion,
  akkordion,
  settings,
  sectionid,
  slider,
}) => {
  const featuredImage = {
    // image: getImage(image?.localFile),
    fluid: image?.localFile?.childImageSharp?.fluid,
    alt: image?.altText || ``,
  }

  // const featuredLogo = {
  //   fluid: logo?.localFile?.childImageSharp?.fluid,
  //   alt: logo?.altText || ``,
  // }

  let customwidthsmall = "50%"
  let customwidthbig = "50%"
  if (settings.textthreequarters) {
    customwidthsmall = "30%"
    customwidthbig = "70%"
  }

  let customImageHeight = "initial"
  if (settings.stretchimage) {
    customImageHeight = "100%"
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
      <div className={"midwrap" + " " + backgroundcolor}>
        <Wrapper>
          <div className="wrap">
            {textRightSide && textRightSide ? (
              <div
                className="content contentright"
                style={{ order: "1", width: customwidthbig }}
                data-sal="slide-left"
                data-sal-easing="ease"
                data-sal-duration="1000"
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
                    data-sal-duration="1000"
                    button={button}
                  />
                )}
              </div>
            ) : (
              <div
                className="content"
                style={{ width: customwidthbig }}
                data-sal="slide-right"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                {settings.header && settings.header
                  ? !!title && parse(title)
                  : !!title && parse(title)}
                {!!content && <div>{parse(content)}</div>}
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
                    data-sal-duration="1000"
                    button={button}
                  />
                )}
              </div>
            )}

            {!settings?.slider && (
              <>
                {textRightSide && textRightSide ? (
                  <div
                    className="image imageleft"
                    style={{ width: customwidthsmall }}
                    data-sal="slide-right"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
                  >
                    {featuredImage && (
                      <Image
                        style={{ height: customImageHeight }}
                        fluid={featuredImage.fluid}
                        alt={featuredImage.alt}
                      />
                    )}
                  </div>
                ) : (
                  <div
                    className="image imageright"
                    style={{ width: customwidthsmall }}
                    data-sal="slide-left"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
                  >
                    {/* <div className="logowrapper">
                      {!!featuredLogo && (
                        <Image
                          fluid={featuredLogo.fluid}
                          alt={featuredLogo.alt}
                        />
                      )}
                    </div> */}
                    {featuredImage && (
                      <Image
                        style={{ height: customImageHeight }}
                        fluid={featuredImage.fluid}
                        alt={featuredImage.alt}
                      />
                    )}
                  </div>
                )}
              </>
            )}

            {settings?.slider && (
              <>
                {textRightSide && textRightSide ? (
                  <Slider
                    className="image imageleft"
                    style={{ width: customwidthsmall }}
                  >
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
                          <div className="slide" key={i}>
                            <Image
                              style={{ height: customImageHeight }}
                              fluid={
                                item?.image?.localFile?.childImageSharp?.fluid
                              }
                              alt={item?.image?.localFile?.childImageSharp?.alt}
                            />
                          </div>
                        ))}
                      </Flickity>
                    )}
                  </Slider>
                ) : (
                  <Slider
                    className="image imageright"
                    style={{ width: customwidthsmall }}
                  >
                    <Flickity
                      className={"carousel slider"} // default ''
                      elementType={"div"} // default 'div'
                      options={flickityOptions} // takes flickity options {}
                      disableImagesLoaded={false} // default false
                      reloadOnUpdate // default false
                      static // default false>
                    >
                      {slider.map((item, i) => (
                        <div className="slide" key={i}>
                          <Image
                            style={{ height: customImageHeight }}
                            fluid={item.image.localFile.childImageSharp.fluid}
                            alt={item.image.localFile.childImageSharp.alt}
                          />
                        </div>
                      ))}
                    </Flickity>
                  </Slider>
                )}
              </>
            )}
          </div>
        </Wrapper>
      </div>
    </Background>
  )
}

export default TextBild
