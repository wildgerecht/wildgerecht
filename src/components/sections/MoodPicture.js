import React from "react"
import styled from "styled-components"
import Button from "../button"
import { mq } from "../../utils/presets" // import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import Image from "gatsby-image"
import parse from "html-react-parser"

const Wrapper = styled.section`
  background: var(--color-black);
  padding-bottom: 3rem;
  scroll-margin-block-start: 100px;

  .inner {
    padding: 0 1rem;
    text-align: center;
  }

  .content {
    padding: 0 1rem;
  }

  h2 {
    margin-top: 2rem;
    font-size: var(--fontSize-7);
  }

  /* tablet design */
  ${mq.tablet} {
    .content {
      padding: 0 2rem;
    }
  }

  /* desktop design */
  ${mq.desktop} {
    .height-100vh {
      height: 100vh;
    }
    .height-50vh {
      height: 50vh;
    }
    .height-75vh {
      height: 75vh;
    }

    margin-top: 5rem;
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
      background: rgb(7, 7, 7);
      background: linear-gradient(
        180deg,
        rgba(7, 7, 7, 1) 0%,
        rgba(151, 255, 0, 0) 100%
      );
    }

    .gradient-bottom {
      background: rgb(7, 7, 7);
      background: linear-gradient(
        180deg,
        rgba(7, 7, 7, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }

    .textcontent {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      margin: 3rem 1rem 3rem;
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
  }
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
}) => {
  const featuredImage = {
    // image: getImage(image?.localFile),
    fluid: image?.localFile?.childImageSharp.fluid,
    alt: image?.altText || ``,
  }

  // DEFINE GRADIENT
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

  let heightclass = "height-100vh"

  if (vhheight === "50") {
    heightclass = "height-50vh"
  }
  if (vhheight === "75") {
    heightclass = "height-75vh"
  }

  return (
    <Wrapper id={sectionid}>
      <div className={"imgwrap " + heightclass}>
        {!!featuredImage && (
          <Image
            className="img "
            fluid={featuredImage.fluid}
            alt={featuredImage.alt}
          />
        )}

        <div className={"content " + gradientClass}></div>
        <div className="textcontent" style={{ justifyContent: location }}>
          <div className="inner">
            {!!title && (
              <div
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="300"
              >
                {parse(title)}
              </div>
            )}

            {!!text && (
              <p
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="300"
              >
                {parse(text)}
              </p>
            )}

            {!!button && (
              <Button
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="300"
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
