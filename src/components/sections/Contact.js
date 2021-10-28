import React from "react"
import Button from "../button"
import styled from "styled-components"
import { mq } from "../../utils/presets"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  max-width: ${mq.maxWidth5xl};
  margin: 1rem auto 3rem;
  /* margin: var(--spacing-auto); */

  padding: 1rem;
`

const Triple = styled.div`
  .item {
    text-align: center;
    margin-bottom: 4rem;
    .imgwrapper {
      margin: 0.5rem auto;
      height: 60px;
      width: 100%;
    }
  }
  ${mq.tablet} {
    display: flex;
    flex-flow: row wrap;
    width: 100%;

    .item {
      flex: 1 0 auto;
      width: 33.33%;
      margin-bottom: 0;

      .imgwrapper {
        margin: 0.8rem auto;
        overflow: hidden;
        max-width: 3rem;
        .gatsby-image-wrapper {
          width: 100%;
        }
      }
    }
  }
`

const GoogleMapsWrapper = styled.div`
  flex: 0 1 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 600px;
  .mappreview {
    height: 100%;
    img {
      object-fit: cover;
    }
  }
  picture {
    opacity: 0.4;
  }
  p {
    font-size: 1rem;
    font-weight: bold;
    a {
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  .ladenbutton {
    border: none;
    box-shadow: none;
    &:focus,
    &:hover {
      cursor: pointer;
    }
  }
  .maptext {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    padding: 220px 1rem;
    background: rgba(0, 0, 0, 0.2);
    line-height: 1.6;
  }
`

const Contact = ({ text, iconsWithText, sectionid }) => {
  return (
    <Wrapper id={sectionid}>
      <Triple>
        {!!iconsWithText &&
          iconsWithText.map((item, i) => {
            return (
              <div className="item" key={i}>
                <div className="imgwrapper">
                  {!!item?.icon?.localFile?.childImageSharp && (
                    <GatsbyImage
                      image={getImage(item.icon.localFile)}
                      alt={item.text}
                      style={{ height: "100%", width: "100%" }}
                      imgStyle={{ objectFit: "contain" }}
                    />
                  )}
                </div>
                {!!item.text && (
                  <div className="textcontent">
                    {parse(item.text)}{" "}
                    {!!item.button && <Button button={item.button} />}
                  </div>
                )}
              </div>
            )
          })}
      </Triple>
    </Wrapper>
  )
}

export default Contact
