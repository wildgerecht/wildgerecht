import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import parse from "html-react-parser"
import Button from "../button"
import Image from "gatsby-image"
import { mq } from "../../utils/presets"

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  position: relative;
  margin: var(--spacing-auto);
  .background {
    /* text-align: center; */
    width: 100%;
    z-index: -1;
    opacity: 0.1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5rem;
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
      /* text-align: center; */
      h3 {
        margin-top: 1rem;
        font-family: var(--fontFamily-sans);
        line-height: var(--lineHeight-tight);
        font-size: var(--fontSize-7);
      }
    }
  }

  /* tablet design */
  @media only screen and (min-width: var(--minWidth-tablet)) {
  }

  /* desktop design */
  @media only screen and (min-width: 75rem) {
    margin: 15rem auto 18rem;
    .inner {
      margin: 10rem auto 7rem;
      .wrap {
        display: flex;
        flex-flow: row;
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
          margin-top: 6rem;
          /* text-align: right; */

          h3 {
            /* max-width: 30rem; */
            margin: 0 0 0 auto;
            padding-bottom: 0;
          }
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
}) => {
  const featuredImage = {
    // image: getImage(image?.localFile),
    fluid: image?.localFile?.childImageSharp?.fluid,
    alt: image?.altText || ``,
  }

  const featuredsloganImage = {
    fluid: sloganimage?.localFile?.childImageSharp?.fluid,
    alt: sloganimage?.altText || ``,
  }

  const backgroundImage = {
    fluid: backgroundimage?.localFile?.childImageSharp?.fluid,
    alt: backgroundimage?.altText || ``,
  }
  return (
    <Wrapper id={sectionid}>
      <div className="background">
        {backgroundImage && (
          <Image
            className="backgroundimage"
            fluid={backgroundImage?.fluid}
            alt={backgroundImage?.alt}
          />
        )}
      </div>
      <div className="inner">
        <div className="wrap">
          <div className="image">
            {featuredImage && (
              <Image fluid={featuredImage?.fluid} alt={featuredImage?.alt} />
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
              <Image
                fluid={featuredsloganImage?.fluid}
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
