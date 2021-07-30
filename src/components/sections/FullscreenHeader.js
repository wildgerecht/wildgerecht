import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/presets" // import LogoWeiss from "../images/wildgerecht-logo-weiss.svg"
import parse from "html-react-parser"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  /* margin-top: -2rem; */
  height: 100vh;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  z-index: 0;
  .imgwrap {
    height: 100vh;
    .gatsby-image-wrapper {
      z-index: -999;
      width: 100%;
      height: 100%;
    }
  }
  .contentwrapper {
    .content {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      max-width: 75rem;
      /* max-width: ${mq.maxWidth5xl}; */
      margin: 0 auto;
      padding: 1rem;

      .contentinner {
        h1 {
          max-width: 50rem;
          font-size: 2rem;
        }
      }
      img {
        display: none;
      }
    }
  }

  .overlay {
    z-index: -999;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgb(7, 7, 7);
    background: linear-gradient(
      180deg,
      rgba(7, 7, 7, 0.8855917366946778) 0%,
      rgba(7, 7, 7, 0.5046393557422969) 19%,
      rgba(0, 0, 0, 0) 32%,
      rgba(110, 184, 2, 0) 49%,
      rgba(7, 7, 7, 0.5298494397759104) 65%,
      rgba(7, 7, 7, 0.8491771708683473) 100%
    );
  }

  ${mq.tablet} {
    .contentwrapper {
      .contentinner {
        h1 {
          font-size: 3rem;
        }
      }
    }
  }

  ${mq.desktop} {
    height: 100vh;
    .imgwrap {
      height: 100vh;
      .gatsby-image-wrapper {
        picture {
          /* img {
            transform-origin: top right;
            animation: zoomInAndOut 30s ease infinite;
          } */
          @keyframes zoomInAndOut {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        }
      }
    }
    .contentwrapper {
      .content {
        display: flex;
        flex-flow: row;
        .contentinner {
          flex: 1 0 auto;
          width: 50%;
          align-self: flex-end;
          padding-bottom: 5rem;
          h1 {
            font-size: calc(3.2rem + 0.2vw);
            filter: blur(25px);
            opacity: 0;
            animation: fadeIn 0.7s ease-in-out forwards;
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
          button {
            cursor: pointer;
            border: none;
            outline: none;
            position: relative;
            opacity: 0;
            animation: slideInFromTop 1s ease-in-out forwards;
          }
          @keyframes slideInFromTop {
            0% {
              top: -10px;
              opacity: 0;
            }
            70% {
              top: -10px;
              opacity: 0;
            }
            100% {
              top: 0px;
              left: 0px;
              opacity: 1;
            }
          }
        }
        img {
          display: block;
          max-width: 20rem;
          padding-bottom: 5rem;
          align-self: flex-end;
          transition: all 0.5s;
        }
      }
    }
  }
`

const FullScreenHeader = ({ title, featuredImage }) => {
  const headerImage = {
    image: getImage(featuredImage?.node?.localFile),
    alt: featuredImage?.altText || "",
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <div className="imgwrap">
          {!!headerImage && (
            <GatsbyImage
              className="img"
              image={headerImage.image}
              alt={headerImage.alt}
            />
          )}
          <div className="contentwrapper">
            <div className="content">
              <div className="contentinner text-animation">
                {!!title && <h1>{parse(title)}</h1>}
                <button
                  className="button"
                  onClick={() => scrollTo("#maincontent")}
                >
                  Mehr erfahren ↓
                </button>
                {/* {slide[0].button && <Button button={slide[0].button} />} */}
              </div>
              {/* <img src={LogoWeiss} alt="Wildgerecht Logo" /> */}
            </div>
            <div className="overlay"></div>
          </div>
        </div>
        <div id="maincontent"></div>
      </ImageWrapper>
    </Wrapper>
  )
}

export default FullScreenHeader
