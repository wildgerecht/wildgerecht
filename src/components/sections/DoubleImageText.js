import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Button from "../button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { mq } from "../../utils/presets"

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  position: relative;
  .background {
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0.1;
    left: 0;
    right: 0;
    bottom: -5rem;
    object-fit: cover;
    overflow: hidden;
    height: 70vw;
    ${mq.desktop} {
      height: 60%;
    }
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      object-fit: cover;
      img {
        object-fit: cover;
      }
    }
  }

  .inner {
    overflow: hidden;
    max-width: ${mq.maxWidth5xl};
    margin: 6rem auto 2rem;

    .wrap {
      .content {
        padding: 1rem;
        margin-bottom: 2rem;
        h2 {
          margin-top: 1rem;
        }
        ul {
          li {
            padding: 0;
            margin: 0;
          }
        }
      }
    }

    .slogan {
      padding: 1rem;
    }
  }

  /* desktop design */
  ${mq.xl} {
    /* margin: 15rem auto 18rem; */
    .inner {
      margin: 4rem auto 7rem;
      .wrap {
        display: flex;
        flex-flow: row;
        h3 {
          margin: 2rem 0 1rem;
        }
        .content {
          padding: 0 3rem 0 3rem;
          margin-bottom: 6rem;
          h2 {
            margin-top: 0;
          }
        }
        .gatsby-image-wrapper {
          margin-right: 3rem;
          max-height: 40rem;
        }
      }

      .content {
        flex: 1 0 auto;
        width: 50%;
        padding-right: 3rem;
      }

      .image {
        flex: 1 0 auto;
        width: 50%;
        /* height: 65vh; */
        .gatsby-image-wrapper {
          height: 100%;
        }
      }

      .sloganwrap {
        margin-top: -4rem;

        .slogan {
          order: 0;
          width: 50%;
          flex: 1 0 auto;
          padding: 0;
          padding-right: 3rem;
          padding-left: 1rem;
          ${mq.xxl} {
            padding-left: 0;
          }
          margin-top: 6rem;
          /* text-align: right; */

          p {
            margin: 0 0 0 auto;
            /* max-width: 30rem; */
            margin-bottom: 0;
          }
        }
        .sloganimage {
          order: 1;
          width: 50%;
          flex: 1 0 auto;
          margin: 0 0 0 3rem;
          .gatsby-image-wrapper {
            order: 1;
          }
        }
      }
    }
  }
`

const DoubleImageText = ({
  image,
  title,
  content,
  button,
  slogan,
  sloganimage,
  backgroundimage,
  sectionid,
  settings,
}) => {
  const featuredImage = {
    // image: getImage(image?.localFile),
    image: getImage(image?.localFile),
    alt: image?.altText || ``,
  }

  const featuredsloganImage = {
    image: getImage(sloganimage?.localFile),
    alt: sloganimage?.altText || ``,
  }

  const backgroundImage = {
    image: getImage(backgroundimage?.localFile),
    alt: backgroundimage?.altText || ``,
  }
  return (
    <Wrapper id={sectionid}>
      <div className="background">
        {backgroundImage && (
          <GatsbyImage
            image={backgroundImage?.image}
            alt={backgroundImage?.alt}
            objectFit="cover"
          />
        )}
      </div>
      <div className="inner">
        <div className="wrap">
          <div className="image">
            {featuredImage && (
              <GatsbyImage
                image={featuredImage?.image}
                alt={featuredImage?.alt}
              />
            )}
          </div>

          <div className="content">
            {title && (
              <div
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="800"
              >
                {parse(title)}
              </div>
            )}
            {content && (
              <div
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="800"
              >
                {parse(content)}
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
          </div>
        </div>

        <div className="wrap sloganwrap">
          <div className="image sloganimage">
            {featuredsloganImage && (
              <GatsbyImage
                image={featuredsloganImage?.image}
                alt={featuredsloganImage?.alt}
              />
            )}
          </div>

          <div className="slogan">
            {slogan.title && (
              <div
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="800"
              >
                {parse(slogan.title)}
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default DoubleImageText
