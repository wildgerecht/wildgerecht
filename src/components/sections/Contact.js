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
