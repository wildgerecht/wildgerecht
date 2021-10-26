import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/presets" // import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import Image from "gatsby-image"
import Flickity from "react-flickity-component"
import QuotationMark from "../../images/quotationmark.svg"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const flickityOptions = {
  initialIndex: 4,
  pageDots: false,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false,
  prevNextButtons: false,
}

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  background: var(--color-darkgreen);
  margin: var(--spacing-auto);
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;

  .inner {
    max-width: ${mq.maxWidth5xl};
    margin: 1rem auto 0rem;
    ${mq.tablet} {
      margin-bottom: 2rem;
    }

    .textcontent {
      padding: 0 3rem 2rem 2rem;
      position: relative;
      p {
        font-style: italic;
      }
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
      bottom: 1rem;
    }

    .quote2 {
      transform: rotate(180deg);
      right: 2rem;
      top: -2rem;
    }

    .slider {
      list-style: none;
      margin: 2rem 0;
      padding: 1rem 0 0;
      .slideitem {
        width: 33.33%;
      }
    }
  }

  ${mq.tablet} {
    .inner {
      padding-bottom: 0;
      .slider {
        .slideitem {
          width: 20%;
        }
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
    .inner {
      margin: 0 auto;

      .slider {
        .slideitem {
          width: 14.9%;
        }
      }

      .textcontent {
        text-align: center;
        .partnertext {
          /* font-size: 1.3rem; */
          max-width: 65vw;
          margin: 0 auto;
        }
        .author {
          /* font-size: 1.3rem; */
          font-style: italic;
        }
      }
      .quote1 {
        height: 2rem;
        top: 50%;
        left: 0.5rem;
        bottom: initial;
      }
      .quote2 {
        height: 2rem;
        top: 50%;
        right: 0.5rem;
      }
    }
  }
  ${mq.xxl} {
    padding-top: 3rem;
    .inner {
      .slider {
        margin: 0;
        .slideitem {
          /* width: 12.5%; */
        }
      }

      .quote1 {
        height: 2rem;
        top: 50%;
        left: -1rem;
        bottom: initial;
      }
      .quote2 {
        height: 2rem;
        top: 50%;
        right: -1rem;
      }
    }
  }
`

const Partner = ({ partnergroup, image, logos, textAboveLogos, sectionid }) => {
  const featuredImage = {
    image: getImage(image?.localFile),
    alt: image?.altText || "",
  }

  const partnerlogos = logos

  return (
    <>
      <Wrapper id={sectionid}>
        <div className="inner">
          <div className="flex">
            <div className="imgwrap">
              {!!featuredImage && (
                <GatsbyImage
                  className="img"
                  image={featuredImage.image}
                  alt={featuredImage.alt}
                />
              )}
            </div>
            <div className="textcontent">
              {parse(partnergroup.title)}
              <img
                src={QuotationMark}
                alt=""
                aria-hidden="true"
                className="quotationmark quote1"
              />
              <p className="partnertext">{parse(partnergroup.partnertext)}</p>
              <p className="author">{parse(partnergroup.author)}</p>
              <img
                src={QuotationMark}
                alt=""
                aria-hidden="true"
                className="quotationmark quote2"
              />
            </div>
          </div>

          {!!textAboveLogos && (
            <h2 style={{ width: "100%", textAlign: "center" }}>
              Marketing Kompetenz in den Bereichen
            </h2>
          )}

          {!!partnerlogos && (
            <Flickity
              className={"carousel slider"} // default ''
              elementType={"ul"} // default 'div'
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
                      {!!item?.partner?.image && (
                        <GatsbyImage
                          className="img"
                          image={getImage(item?.partner?.image?.localFile)}
                          alt={item?.partner?.image?.altText}
                        />
                      )}
                    </a>
                  ) : (
                    <>
                      {!!item?.partner?.image && (
                        <GatsbyImage
                          className="img"
                          image={getImage(item?.partner?.image?.localFile)}
                          alt={item?.partner?.image?.altText}
                        />
                      )}
                    </>
                  )}
                </li>
              ))}
            </Flickity>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default Partner
