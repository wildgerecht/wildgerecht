import React from "react"
import styled from "styled-components"
import Button from "../button"
import { mq } from "../../utils/presets" // import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import Image from "gatsby-image"
import parse from "html-react-parser"
import { useInView } from "react-intersection-observer"

const Wrapper = styled.div`
  background: var(--color-black);
  scroll-margin-block-start: 100px;
  /* padding: 2rem 0; */
  .inner {
    /* padding: 0 1rem; */
    text-align: center;
    max-width: 60rem;
    margin: 0 auto;
  }

  .blur-in {
    font-size: calc(3.2rem + 0.2vw);
    filter: blur(25px);
    opacity: 0;
    animation: fadeIn 2.7s ease-in-out forwards;
    @keyframes fadeIn {
      0% {
        top: -10px;
        opacity: 0;
      }
      100% {
        filter: blur(0px);
        top: 0px;
        left: 0px;
        opacity: 1;
      }
    }
  }

  .content {
    /* padding: 0 1rem; */
  }

  h2 {
    margin-top: 2rem;
    font-size: var(--fontSize-4);
    word-break: keep-all;
  }

  /* tablet design */
  ${mq.tablet} {
    h2 {
      font-size: var(--fontSize-7);
    }
    .content {
      padding: 0 2rem;
    }
  }

  /* desktop design */
  /* ${mq.tablet} { */
  .height-100vh {
    height: 100vh;
  }
  .height-50vh {
    height: 70vh;
  }
  .height-75vh {
    height: 80vh;
  }
  .height-30vh {
    height: 35vh;
  }
  .height-20vh {
    height: 25vh;
  }

  padding: 0;
  .imgwrap {
    position: relative;
    text-align: center;
    color: white;
    overflow: hidden;
    /* .gatsby-image-wrapper {
        opacity: 0.5;
      } */
  }

  .content {
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .gradient-top {
    background: var(--color-black);
    background: linear-gradient(to bottom, #0a0a0a, rgba(0, 0, 0, 0));
  }

  /* .gradient-top {
      background: rgb(7, 7, 7);
      background: linear-gradient(
        180deg,
        rgba(7, 7, 7, 1) 0%,
        rgba(151, 0, 0, 0) 100%
      );
    } */

  /* .gradient-bottom {
      background: rgb(7, 7, 7);
      background: linear-gradient(
        180deg,
        rgba(7, 7, 7, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    } */
  .gradient-bottom {
    background: var(--color-black);
    background: linear-gradient(to top, #0a0a0a, rgba(0, 0, 0, 0));
  }

  .textcontent {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    /* margin: 3rem 1rem 3rem; */
    padding: 0 1rem;
    p {
      max-width: 800px;
      margin: 0.5rem auto;
    }
  }

  .button {
    margin-top: 1rem;
  }

  .img {
    width: 100%;
    height: 100%;
  }
  /* } */
`

const MoodPicture = ({
  image,
  vhheight,
  button,
  title,
  text,
  horizontalLocation,
  gradient,
  sectionid,
  settings,
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  })

  const featuredImage = {
    // image: getImage(image?.localFile),
    fluid: image?.localFile?.childImageSharp.fluid,
    alt: image?.altText || ``,
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

  // DEFINE  GRADIENT
  let gradientClass = "gradient-top"
  if (gradient === "none") {
    gradientClass = ""
  }
  if (gradient === "top") {
    gradientClass = "gradient-top"
  }
  if (gradient === "bottom") {
    gradientClass = "gradient-bottom"
  }

  // DEFINE CONTENT LOCATION

  let location = "space-around"

  if (horizontalLocation === "bottom") {
    location = "flex-end"
  }
  if (horizontalLocation === "top") {
    location = "flex-start"
  }
  if (horizontalLocation === "center") {
    location = "space-around"
  }

  // Height Classes

  let heightclass = ""

  if (vhheight === "20") {
    heightclass = "height-20vh"
  }
  if (vhheight === "30") {
    heightclass = "height-30vh"
  }
  if (vhheight === "50") {
    heightclass = "height-50vh"
  }
  if (vhheight === "75") {
    heightclass = "height-75vh"
  }
  if (vhheight === "100") {
    heightclass = "height-100vh"
  }

  // remove line breaks from title coming from wordpress
  const noShyTitle = title.replace(/\u00AD/g, "")

  return (
    <Wrapper id={sectionid}>
      <div
        className={
          "imgwrap " + heightclass + " " + spacingtop + " " + spacingbottom
        }
      >
        {!!featuredImage && (
          <Image
            className="img "
            fluid={featuredImage.fluid}
            alt={featuredImage.alt}
          />
        )}

        <div className={"content " + gradientClass}></div>
        <div className="textcontent" style={{ justifyContent: location }}>
          <div className="inner" ref={ref}>
            {!!title && (
              <div
                data-sal="zoom-in"
                data-sal-easing="ease-in-out"
                data-sal-duration="1000"
              >
                {parse(noShyTitle)}
              </div>
            )}

            {!!text && (
              <div
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="800"
              >
                {parse(text)}
              </div>
            )}

            {!!button && (
              <Button
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="800"
                button={button}
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default MoodPicture
