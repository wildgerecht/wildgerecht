import React from "react"
import Button from "../button"
import styled from "styled-components"
import { mq } from "../../utils/presets"
import parse from "html-react-parser"
import Img from "gatsby-image"

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  max-width: var(--maxWidth-5xl);
  margin: 1rem auto 3rem;
  /* margin: var(--spacing-auto); */

  padding: 1rem;

  .left {
    .flex {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      align-content: flex-end;
      margin-top: 3rem;
      .imgwrapper {
        width: 35%;
        flex: 1 0 auto;
        overflow: hidden;
        max-width: 3rem;
        .gatsby-image-wrapper {
          width: 100%;
        }
      }
      .textcontent {
        padding-left: 1rem;
        width: 70%;
        flex: 1 0 auto;
        h2 {
          margin: 0;
        }
        p {
          margin-top: 0.5rem;
        }
      }
    }
  }

  ${mq.tablet} {
    display: flex;
    flex-flow: row wrap;
    .left {
      flex: 1 0 auto;
      width: 50%;
      .flex {
        .imgwrapper {
          width: 40%;
        }
        .textcontent {
          padding-left: 3rem;
          width: 60%;
          h2 {
            margin-top: 0;
          }
        }
      }
    }
    .right {
      flex: 1 0 auto;
      width: 50%;
    }
  }

  ${mq.xl}  {
    .left {
      width: 40%;
      padding-right: 1rem;
    }
    .right {
      padding-left: 1rem;
      width: 60%;
      padding-top: 3rem;
      iframe {
        height: 600px !important;
      }
    }
  }
`

const Contact = ({ text, iconsWithText, sectionid }) => {
  return (
    <Wrapper id={sectionid}>
      <div className="left">
        {!!text && parse(text)}
        {!!iconsWithText &&
          iconsWithText.map((item, i) => {
            return (
              <div className="flex" key={i}>
                <div className="imgwrapper">
                  {!!item?.icon?.localFile?.childImageSharp?.fixed && (
                    <Img
                      fixed={item.icon.localFile.childImageSharp.fixed}
                      alt={item.icon.localFile.childImageSharp?.altText}
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
      </div>
      <div className="right">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.7327314509503!2d11.42896131609896!3d49.98338997941369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a19bc74f491315%3A0xe53cb1349cdca933!2sPleofen8!5e1!3m2!1sde!2sde!4v1620311130149!5m2!1sde!2sde"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Wrapper>
  )
}

export default Contact
