import React from "react"
import Button from "../button"
import styled from "styled-components"
import { mq } from "../../utils/presets"
import parse from "html-react-parser"
import Greenbox from "../../images/greenbox.png"
import GreenboxRotated from "../../images/greenbox-rotated.png"

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  max-width: var(--maxWidth-5xl);
  /* margin: 1rem auto 3rem; */
  margin: var(--spacing-auto);
  .introtext {
    max-width: 50rem;
    margin: 0 auto;
    padding: 1rem 1rem 2rem;
    text-align: center;
  }

  .flex {
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    justify-content: center;
    margin-bottom: 1rem;
    overflow: hidden;
    .item {
      margin-bottom: 2rem;
      text-align: center;
      width: 100%;
      h3 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
      &:nth-child(2) {
        background-image: url(${GreenboxRotated});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        max-width: 26rem;
      }

      .content {
        background-image: url(${Greenbox});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 3rem 2rem 3rem 2rem;
        max-width: 26rem;
        margin: 0 auto;

        img {
          margin: 0 auto;
          max-width: 110px;
          margin: 0.5rem 0.5rem 0.5rem;
        }
      }
    }
  }

  .buttonwrap {
    width: 100%;
    text-align: center;
  }

  @media screen and (min-width: 550px) {
    .flex {
      .item {
        .content {
          padding: 3rem 5rem 3rem 5rem;
        }
      }
    }
  }

  ${mq.xl}  {
    .flex {
      .item {
        width: 33.33%;
        .content {
          padding: 3rem 5rem 3rem 5rem;
        }
      }
    }
  }
`

const TripletColumn = ({ button, boxen, introText, sectionid }) => {
  return (
    <Wrapper id={sectionid}>
      <div className="introtext">{introText && parse(introText)}</div>
      <div className="flex">
        {!!boxen &&
          boxen.map((item, i) => {
            return (
              <div className="item" key={i}>
                <div className="content">
                  {!!item.box.icon.localFile.publicURL && (
                    <img
                      src={item.box.icon.localFile.publicURL}
                      alt={item.box.icon.altText}
                      aria-hidden="true"
                    />
                  )}
                  {!!item.box.title && <h3>{parse(item.box.title)}</h3>}
                  {!!item.box.text && <p>{parse(item.box.text)}</p>}
                  {!!item.box.button && <Button button={item.box.button} />}
                </div>
              </div>
            )
          })}

        {/* <div className="item">
            <div className="content">
              <div className="icon lupe">
                <StaticImage
                  src="../images/lupe.svg"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                eaque magni amet, at ipsum eos a, beatae aut, distinctio optio
                nobis esse enim illum! Ipsa ex sit illum rem dolores.
              </p>
            </div>
          </div> */}

        {/* <div className="item">
            <div className="bgimage second">
              <StaticImage
                src="../images/greenbox.svg"
                alt=""
                aria-hidden="true"
                layout="fullWidth"
              />
            </div>
            <div className="content">
              <div className="icon">
                <StaticImage
                  src="../images/target.png"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h3>{zweitesFeld.title}</h3>
              <p>{zweitesFeld.text}</p>
            </div>
          </div> */}

        {/* <div className="item">
            <div className="bgimage">
              <StaticImage
                src="../images/greenbox.svg"
                alt=""
                aria-hidden="true"
                layout="fullWidth"
              />
            </div>
            <div className="content">
              <div className="icon">
                <StaticImage
                  src="../images/street.png"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <h3>{drittesFeld.title}</h3>
              <p>{drittesFeld.text}</p>
            </div>
          </div> */}
      </div>
      <div className="buttonwrap">{!!button && <Button button={button} />}</div>
    </Wrapper>
  )
}

export default TripletColumn
