import React from "react"
import { graphql } from "gatsby"
// import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TextBild from "../components/sections/TextBild"
import MoodPicture from "../components/sections/MoodPicture"
import TripletColumn from "../components/sections/TripletColumn"
import FullScreenHeader from "../components/sections/FullscreenHeader"
import DoubleImageText from "../components/sections/DoubleImageText"
import SpecialistsSection from "../components/sections/Specialists"
import PartnerSection from "../components/sections/Partner"
import GallerySection from "../components/sections/Gallery"
import ContactSection from "../components/sections/Contact"
import JustText from "../components/sections/JustText"
import GoogleMaps from "../components/sections/GoogleMaps"

const PostTemplate = ({ data: { post, frontPage } }) => {
  const seo = post?.seo
  const seoTitle =
    post?.seo?.opengraphTitle.replace("^", "") ||
    post.title.replace("^", "") ||
    ``
  const metaDesc = seo.metaDesc || ``

  const mobilemenu = frontPage.mobileMenu.mobilemenu
  const mobileImage = post?.mobileImage?.beitragsbild

  const title = post?.title
  const featuredImage = post?.featuredImage

  const titleWitHBreak = title.replace("^", "<br />")

  const seoImage = post?.ogImage?.node.localFile.childImageSharp.resize

  return (
    <Layout uri={post.uri} mobilemenu={mobilemenu}>
      {/* lang={post.language.slug} */}

      <Seo title={seoTitle} description={metaDesc} image={seoImage} />
      {/* lang={post.language.slug} */}

      <FullScreenHeader
        title={titleWitHBreak}
        featuredImage={featuredImage}
        mobileImage={mobileImage}
      />

      {!!post.pageBuilder.layouts && (
        <>
          {post.pageBuilder.layouts.map((item, i) => (
            <section key={i}>
              {/* {item.fieldGroupName ===
                "post_Pagebuilder_Layouts_Fullscreenheader" && (
                <FullScreenHeader slide={item.slide} />
              )} */}

              {item.fieldGroupName ===
                "post_Pagebuilder_Layouts_TextMitBild" && (
                <TextBild
                  video={item.video}
                  image={item.image}
                  slider={item.slider}
                  slidersettings={item.sliderSettings}
                  title={item.textcontent.title}
                  content={item.textcontent.text}
                  button={item.textcontent.button}
                  settings={item.settings}
                  textRightSide={item.settings.textRightSide}
                  activateaccordion={item.textcontent.activateaccordion}
                  akkordion={item.textcontent.akkordion}
                  sectionid={item.settings.sectionid}
                  download={item.download}
                />
              )}

              {item.fieldGroupName === "post_Pagebuilder_Layouts_Justtext" && (
                <JustText
                  sectionid={item.sectionid}
                  text={item.justtextcontent}
                  settings={item.settings}
                  download={item.downloadButton}
                />
              )}

              {item.fieldGroupName ===
                "post_Pagebuilder_Layouts_Googlemaps" && (
                <GoogleMaps
                  sectionid={item.sectionid}
                  iframe={item.iframe}
                  text={item.justtextcontent}
                  settings={item.settings}
                />
              )}

              {item.fieldGroupName === "post_Pagebuilder_Layouts_Partner" && (
                <PartnerSection
                  partnergroup={item.partnergroup}
                  image={item.image}
                  textAboveLogos={item.textAboveLogos}
                  logos={item.logos}
                  sectionid={item.sectionid}
                />
              )}

              {item.fieldGroupName ===
                "post_Pagebuilder_Layouts_Specialists" && (
                <SpecialistsSection
                  text={item.text}
                  allSpecialists={item.allspecialists}
                  sectionid={item.sectionid}
                />
              )}

              {item.fieldGroupName === "post_Pagebuilder_Layouts_Gallery" && (
                <GallerySection images={item.gallery} />
              )}

              {item.fieldGroupName ===
                "post_Pagebuilder_Layouts_Doubleimagetext" && (
                <DoubleImageText
                  image={item.imageWithText.image}
                  title={item.imageWithText.textcontent.title}
                  content={item.imageWithText.textcontent.text}
                  button={item.imageWithText.textcontent.button}
                  slogan={item.sloganWithImage.slogan}
                  sloganimage={item.sloganWithImage.image}
                  backgroundimage={item.sloganWithImage.slogan.backgroundimage}
                  sectionid={item.sectionid}
                  settings={item.settings}
                />
              )}

              {item.fieldGroupName ===
                "post_Pagebuilder_Layouts_Tripletcolumn" && (
                <TripletColumn
                  introText={item.introText}
                  button={item.button}
                  boxen={item.boxen}
                  sectionid={item.sectionid}
                />
              )}

              {item.fieldGroupName ===
                "post_Pagebuilder_Layouts_Moodpicture" && (
                <MoodPicture
                  vhheight={item.settings.vhheight}
                  title={item.title}
                  text={item.text}
                  button={item.button}
                  image={item.image}
                  horizontalLocation={item.settings.horizontalLocation}
                  gradient={item.settings.gradient}
                  sectionid={item.sectionid}
                  settings={item.settings}
                />
              )}

              {item.fieldGroupName === "post_Pagebuilder_Layouts_Contact" && (
                <ContactSection
                  sectionid={item.sectionid}
                  text={item.text}
                  iconsWithText={item.iconMitText}
                />
              )}
            </section>
          ))}
        </>
      )}
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostById($id: String!) {
    # selecting the current page by id

    frontPage: wpPage(isFrontPage: { eq: true }) {
      title
      mobileMenu {
        mobilemenu {
          link {
            target
            title
            url
          }
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 40)
              }
            }
          }
          activeimage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 40)
              }
            }
          }
        }
      }
    }

    post: wpPost(id: { eq: $id }) {
      id
      uri
      content
      title
      nodeType
      date(formatString: "MMMM DD, YYYY")

      mobileImage {
        beitragsbild {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
      }

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }

      ogImage: featuredImage {
        node {
          localFile {
            childImageSharp {
              resize(width: 1200, height: 627) {
                src
                tracedSVG
                width
                height
                aspectRatio
                originalName
              }
            }
          }
        }
      }

      # language {
      #   slug
      # }

      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }

      pageBuilder {
        __typename
        layouts {
          ... on WpPost_Pagebuilder_Layouts_TextMitBild {
            fieldGroupName
            download {
              title
              altText
              localFile {
                publicURL
                prettySize
              }
            }
            video
            textcontent {
              title
              text
              activateaccordion
              akkordion {
                title
                text
                akkordionbutton {
                  url
                  title
                  target
                }
              }
              button {
                target
                title
                url
              }
            }
            settings {
              sectionid
              textRightSide
              header
              textthreequarters
              stretchimage
              slider
              spacingTop
              spacingBottom
              backgroundcolor
              video
            }
            sliderSettings {
              height
            }
            slider {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Gallery {
            fieldGroupName
            settings {
              spacingTop
              spacingBottom
            }
            gallery {
              altText
              localFile {
                childImageSharp {
                  resize(width: 2200) {
                    src
                  }
                  gatsbyImageData(
                    width: 600
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Doubleimagetext {
            fieldGroupName
            sectionid
            settings {
              spacingTop
              spacingBottom
              backgroundcolor
            }
            imageWithText {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
              textcontent {
                text
                title
                button {
                  target
                  title
                  url
                }
              }
            }
            sloganWithImage {
              slogan {
                title
                backgroundimage {
                  altText
                  localFile {
                    publicURL
                    extension
                    childImageSharp {
                      gatsbyImageData(
                        width: 1400
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Tripletcolumn {
            fieldGroupName
            sectionid
            introText
            button {
              url
              title
              target
            }
            boxen {
              box {
                title
                text
                icon {
                  altText
                  localFile {
                    publicURL
                    url
                  }
                }
                button {
                  url
                  title
                  target
                }
              }
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Specialists {
            fieldGroupName
            sectionid
            text
            allspecialists {
              textcontent {
                title
                text
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Contact {
            fieldGroupName
            text
            sectionid
            iconMitText {
              text
              button {
                target
                title
                url
              }
              icon {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 120
                      height: 120
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Googlemaps {
            fieldGroupName
            iframe
            justtextcontent
            settings {
              spacingTop
              spacingBottom
              sectionid
              fieldGroupName
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Justtext {
            fieldGroupName
            justtextcontent
            downloadButton {
              title
              altText
              localFile {
                publicURL
                prettySize
              }
            }
            settings {
              textthreequarters
              spacingTop
              spacingBottom
              sectionid
              fieldGroupName
              backgroundcolor
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Partner {
            fieldGroupName
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1800
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            textAboveLogos
            logos {
              partner {
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 300
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
                website {
                  title
                  url
                  target
                }
              }
            }
            partnergroup {
              author
              partnertext
              title
              fieldGroupName
            }
          }

          ... on WpPost_Pagebuilder_Layouts_Moodpicture {
            fieldGroupName
            sectionid
            text
            title
            button {
              target
              title
              url
            }
            settings {
              vhheight
              horizontalLocation
              gradient
              spacingTop
              spacingBottom
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
