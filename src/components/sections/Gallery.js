import React, { Component } from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import styled from "styled-components"
import { mq } from "../../utils/presets"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const Wrapper = styled.div`
  scroll-margin-block-start: 100px;
  max-width: ${mq.maxWidth5xl};
  /* margin: 3rem auto 3rem; */
  margin: var(--spacing-auto);
`

const CustomGallery = styled.div`
  display: flex;
  flex-flow: row wrap;

  /* padding: 1rem; */
  ${mq.xxl} {
    /* max-width: 85vw; */
    padding: 0;
    /* margin: 0 0 0 auto; */
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    width: 31%;
    /* height: 250px; */
    object-fit: cover;
    margin: 1%;
    transition: all 0.3s;
    &:hover,
    &:focus {
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }
    &:focus {
      outline: 1px dotted grey;
      outline-offset: 5px;
    }
    div {
      width: 100%;
      margin: 0;
    }
    img {
      width: 100%;
    }
  }
`

const GalleryImage = styled(Img)`
  width: 31%;
  height: 120px;
  object-fit: cover;
  margin: 1%;
  ${mq.tablet} {
    height: 300px;
  }
`

export default class LightboxProjects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const gallery = this.props.images

    const images = this.props.images
      ? this.props.images.map(item => item.localFile.childImageSharp.fluid.src)
      : null

    const { photoIndex, isOpen } = this.state

    return (
      <div>
        <Wrapper>
          {gallery !== null && (
            <CustomGallery>
              {gallery.map((image, i) => {
                return (
                  <button
                    key={i}
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: i })
                    }
                  >
                    <GalleryImage
                      key={i}
                      type="button"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      fluid={image.localFile.childImageSharp.fluid}
                      alt={image.title}
                    />
                  </button>
                )
              })}
            </CustomGallery>
          )}
        </Wrapper>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}
