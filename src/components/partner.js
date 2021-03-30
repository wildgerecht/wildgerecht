import React from "react"
import styled from "styled-components"
import { mq } from "../utils/presets"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import Image from "gatsby-image"
import Flickity from "react-flickity-component"
import QuotationMark from "../images/quotationmark.svg"

const flickityOptions = {
  initialIndex: 4,
  pageDots: false,
  freeScroll: true,
  wrapAround: true,
}

const Wrapper = styled.section`
  background: var(--color-darkgreen);
  .inner {
    max-width: var(--maxWidth-5xl);
    margin: 1rem auto 3rem;
    ul {
      list-style: none;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }

    ul li {
      width: 50%;
      padding: 1rem;
      max-width: 400px;
    }

    .textcontent {
      padding: 0 3rem 2rem 2rem;
      position: relative;
    }

    .author {
      text-align: right;
    }

    .quotationmark {
      position: absolute;
      width: 2rem;
      height: auto;
    }

    .quote1 {
      bottom: 0rem;
    }

    .quote2 {
      transform: rotate(180deg);
      right: 2rem;
      top: -2rem;
    }

    .slider {
      list-style: none;
      margin: 0;
      padding: 0;
      .slideitem {
        width: 33.33%;
      }
    }
  }

  /* tablet design */
  ${mq.tablet} {
    .inner {
      .slider {
        max-width: 60rem;
        margin: 0 auto;
        .slideitem {
          width: 15%;
        }
        .flickity-prev-next-button.next {
          margin-right: -4rem;
        }
        .flickity-prev-next-button.previous {
          margin-left: -4rem;
        }
      }

      ul li {
        width: 25%;
      }

      .imgwrap {
        width: 100%;
        overflow: hidden;
        object-fit: cover;
      }

      .textcontent {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-self: center;
      }

      .quote1 {
        bottom: 2rem;
      }

      .quote2 {
        transform: rotate(180deg);
        right: 2rem;
        top: 4rem;
      }
    }
  }

  /* desktop design */
  ${mq.desktop} {
    margin: 2rem 0;
    .inner {
      margin: 0 auto;
      ul li {
        width: 20%;
      }
      .textcontent {
        text-align: center;
        .partnertext {
          font-size: 1.3rem;
          max-width: 65vw;
          margin: 0 auto;
        }
        .author {
          font-size: 1.3rem;
          font-style: italic;
        }
      }
      .quote1 {
        bottom: 4rem;
      }
      .quote2 {
        right: 2rem;
        top: 2.5rem;
      }
    }
  }
  ${mq.xxl} {
    padding-top: 3rem;
    padding-bottom: 1rem;
    .inner {
      .quote1 {
        height: 2rem;
        top: 8rem;
        left: -1rem;
        bottom: initial;
      }
      .quote2 {
        height: 2rem;
        top: 8rem;
        right: -1rem;
      }
    }
  }
`

const Partner = ({ partnergroup, image, logos }) => {
  const featuredImage = {
    // image: getImage(image?.localFile),
    fluid: image?.localFile?.childImageSharp?.fluid,
    alt: image?.localFile?.altText || ``,
  }

  const partnerlogos = logos

  return (
    <>
      <Wrapper>
        <div className="inner">
          <div className="flex">
            <div className="imgwrap">
              {!!featuredImage && (
                <Image
                  className="img"
                  fluid={featuredImage.fluid}
                  alt={featuredImage.alt}
                />
              )}
            </div>
            <div className="textcontent">
              <h1>{partnergroup.title}</h1>
              <img
                src={QuotationMark}
                alt=""
                aria-hidden="true"
                className="quotationmark quote1"
              />
              <p className="partnertext">{partnergroup.partnertext}</p>
              <p className="author">{partnergroup.author}</p>
              <img
                src={QuotationMark}
                alt=""
                aria-hidden="true"
                className="quotationmark quote2"
              />
            </div>
          </div>

          <Flickity
            className={"carousel slider"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {partnerlogos.map((item, i) => (
              <li className="slideitem" key={item.partner.website + i}>
                {!!item.partner.website ? (
                  <a
                    href={item.partner.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {!!item.partner.image && (
                      <Image
                        className="img"
                        fluid={
                          item.partner.image.localFile.childImageSharp.fluid
                        }
                        alt={item.partner.image.altText}
                      />
                    )}
                  </a>
                ) : (
                  <>
                    {!!item.partner.image && (
                      <li className="slideitem">
                        <Image
                          className="img"
                          fluid={
                            item.partner.image.localFile.childImageSharp.fluid
                          }
                          alt={item.partner.image.altText}
                        />
                      </li>
                    )}
                  </>
                )}
              </li>
            ))}
          </Flickity>
        </div>
      </Wrapper>
    </>
  )
}

export default Partner
