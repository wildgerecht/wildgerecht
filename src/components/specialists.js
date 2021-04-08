import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import Image from "gatsby-image"
import styled from "styled-components"
import parse from "html-react-parser"
import { mq } from "../utils/presets"
import Flickity from "react-flickity-component"
import CameraImage from "../images/specialists/camera.svg"

const flickityOptions = {
  // initialIndex: 1,
}

const Wrapper = styled.section`
  max-width: var(--maxWidth-5xl);
  margin: 3rem auto 3rem;
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
      width: 15rem;
      opacity: 0.9;
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
  ${mq.tablet} {
    padding: 1rem;
    .textcontent {
      margin-bottom: 2rem;
    }
  }
  ${mq.desktop} {
    margin: 7rem auto 7rem;
    display: flex;
    flex-flow: row;
    .textcontent {
      order: 1;
      width: 50%;
      flex: 1 0 auto;
      padding-left: 2rem;
      height: 100%;
      .textcontentinner {
        height: 66vh;
        padding: 2rem;
      }
      .illustration {
        width: 25rem;
      }
    }
    .slider {
      height: 66vh;
      order: 0;
      width: 50%;
      flex: 1 0 auto;
      .slideitem {
        position: relative;
        height: 66vh;

        &:hover {
          .specialistcontent {
            opacity: 1;
            /* height: initial; */
            /* max-height: 500px; */
          }
        }
        .gatsby-image-wrapper {
          height: 66vh;
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
          }
          .button {
            background: white;
            color: black;
            &:hover {
              color: white;
              background: black;
            }
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
    }
    .slider {
      width: 40%;
    }
  }
`

const SpecialistsSection = ({ text, allSpecialists }) => {
  const specialists = allSpecialists

  return (
    <Wrapper>
      <div className="textcontent">
        <div className="textcontentinner">{!!text && <>{parse(text)}</>}</div>
        <img className="illustration" src={CameraImage} alt="Camera" />
      </div>

      <Flickity
        className={"carousel slider"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {
          !!specialists.map(item => (
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
                  {!!item?.textcontent?.text && parse(item.textcontent.text)}
                  {/* {!!item?.textcontent?.button && (
                    <Button button={item?.textcontent?.button} />
                  )} */}
                </div>
              </div>
            </div>
          ))
        }
      </Flickity>
    </Wrapper>
  )
}

export default SpecialistsSection
