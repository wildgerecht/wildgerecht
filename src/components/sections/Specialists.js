import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import Image from "gatsby-image"
import styled from "styled-components"
import parse from "html-react-parser"
import { mq } from "../../utils/presets"
import Flickity from "react-flickity-component"
// import CameraImage from "../images/specialists/camera.svg"
import Logo from "../../images/wildgerecht-logo-weiss.svg"

const flickityOptions = {
  // initialIndex: 1,
  autoPlay: 4000,
  wrapAround: true,
}

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  max-width: ${mq.maxWidth5xl};
  /* margin: 3rem auto 3rem; */
  margin: var(--spacing-auto);
  .textcontent {
    position: relative;
    h2 {
      margin-top: 1rem;
    }
    .textcontentinner {
      background: var(--color-darkgreen);
      padding: 1rem;
      .illustration {
        display: none;
        transition: all 0.3s;
      }
    }
    .illustration {
      display: block;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      width: 7rem;
      opacity: 0.2;
    }
  }
  .slider {
    margin: 0 auto;
    text-align: center;
    .slideitem {
      /* display: none; */
      width: 100%;
      overflow: hidden;
      &:first-child {
        /* display: block; */
      }
      .img {
        height: 75vh;
      }
      .specialistcontent {
        padding: 1rem;
        text-align: left;
        h3 {
          margin-top: 0;
          margin-bottom: 0.7rem;
        }
      }
    }
  }
  ${mq.tablet} {
    padding: 1rem;
    .textcontent {
      margin-bottom: 2rem;
    }
  }
  ${mq.desktop} {
    /* margin: 7rem auto 7rem; */
    margin: var(--spacing-auto);
    display: flex;
    flex-flow: row;
    .textcontent {
      order: 1;
      width: 50%;
      flex: 1 0 auto;
      padding-left: 2rem;
      height: 100%;
      .textcontentinner {
        height: 75vh;
        padding: 2rem;
      }
      .illustration {
        width: 9rem;
      }
    }
    .slider {
      height: 75vh;
      order: 0;
      width: 50%;
      flex: 1 0 auto;
      .slideitem {
        position: relative;
        height: 75vh;

        &:hover {
          .specialistcontent {
            opacity: 1;
            /* height: initial; */
            /* max-height: 500px; */
          }
        }
        .gatsby-image-wrapper {
          height: 75vh;
          width: 100%;
        }
        .specialistcontent {
          /* max-height: 3.7rem; */
          /* height: 10rem; */
          /* transition: max-height 0.3s ease-in-out; */
          overflow: hidden;
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(255, 102, 0, 0.8);
          margin: 0;
          padding: 0;
          width: 100%;
          .specialinner {
            padding: 1rem;
            padding-bottom: 0;
            padding-top: 0;
            p {
              margin-bottom: 0;
            }
          }
          .button {
            background: white;
            color: black;
            &:hover {
              color: white;
              background: var(--color-black);
            }
          }
        }
      }
    }
  }
  ${mq.desktop} {
    .slider {
      margin: 0 auto;
      text-align: center;
      .slideitem {
        /* display: none; */
        width: 100%;
        overflow: hidden;
        &:first-child {
          /* display: block; */
        }
        .specialistcontent {
          color: black;
          padding: 1rem;
          text-align: left;
          h3 {
            color: black;
            margin-top: 0;
            margin-bottom: 0.7rem;
          }
        }
      }
    }
  }
  ${mq.xl} {
    .textcontent {
      width: 60%;
      padding-left: 3rem;
      .textcontentinner {
        padding: 3rem;
      }
      .illustration {
        width: 12rem;
        margin: 0.5rem;
      }
    }
    .slider {
      width: 40%;
    }
  }
  ${mq.xxl} {
    padding-right: 0;
    .textcontent {
      .illustration {
        width: 14rem;
        margin: 1rem;
      }
    }
  }
`

const SpecialistsSection = ({ text, allSpecialists, sectionid }) => {
  const specialists = allSpecialists

  return (
    <Wrapper id={sectionid}>
      <div className="textcontent">
        <div className="textcontentinner">{!!text && <>{parse(text)}</>}</div>
        {/* <img className="illustration" src={CameraImage} alt="Camera" /> */}
        <img className="illustration" src={Logo} alt="" />
      </div>

      <Flickity
        className={"carousel slider"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {specialists.map(item => (
          <div key={item.textcontent.title} className="slideitem">
            {!!item.image && (
              <Image
                className="img"
                fluid={item.image.localFile.childImageSharp.fluid}
                alt={item.image.altText}
              />
            )}
            <div className="specialistcontent">
              <div className="specialinner">
                {!!item?.textcontent?.title && (
                  <h3>{parse(item.textcontent.title)}</h3>
                )}
                {!!item?.textcontent?.text && (
                  <p>{parse(item.textcontent.text)}</p>
                )}
                {/* {!!item?.textcontent?.button && (
                    <Button button={item?.textcontent?.button} />
                  )} */}
              </div>
            </div>
          </div>
        ))}
      </Flickity>
    </Wrapper>
  )
}

export default SpecialistsSection
