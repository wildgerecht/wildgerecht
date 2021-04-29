import React from "react"
import { graphql } from "gatsby"
// import { getImage } from "gatsby-plugin-image"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import TextBild from "../components/sections/TextBild"
import MoodPicture from "../components/sections/MoodPicture"
import TripletColumn from "../components/sections/TripletColumn"
import FullScreenHeader from "../components/sections/FullscreenHeader"
import DoubleImageText from "../components/sections/DoubleImageText"
import SpecialistsSection from "../components/sections/Specialists"
import PartnerSection from "../components/sections/Partner"
import GallerySection from "../components/sections/Gallery"

const PageTemplate = ({ data: { page, frontPage } }) => {
  // const featuredImage = {
  //   image: getImage(page.featuredImage.node.localFile),
  //   alt: page.featuredImage.node.altText || ``,
  // }

  const metaDesc = page.seo.metaDesc || ``

  const mobilemenu = frontPage.mobileMenu.mobilemenu

  return (
    <Layout uri={page.uri} mobilemenu={mobilemenu}>
      {/* lang={page.language.slug} */}

      <SEO title={page.title || ``} description={metaDesc} />
      {/* lang={page.language.slug} */}

      {!!page.pageBuilder.layouts && (
        <>
          {page.pageBuilder.layouts.map((item, i) => (
            <section key={i}>
              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Fullscreenheader" && (
                <FullScreenHeader slide={item.slide} />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_TextMitBild" && (
                <TextBild
                  image={item.image}
                  slider={item.slider}
                  logo={item.logo}
                  title={item.textcontent.title}
                  content={item.textcontent.text}
                  button={item.textcontent.button}
                  settings={item.settings}
                  textRightSide={item.settings.textRightSide}
                  activateaccordion={item.textcontent.activateaccordion}
                  akkordion={item.textcontent.akkordion}
                  sectionid={item.settings.sectionid}
                  settings={item.settings}
                />
              )}

              {item.fieldGroupName === "page_Pagebuilder_Layouts_Partner" && (
                <PartnerSection
                  partnergroup={item.partnergroup}
                  image={item.image}
                  logos={item.logos}
                  sectionid={item.sectionid}
                />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Specialists" && (
                <SpecialistsSection
                  text={item.text}
                  allSpecialists={item.allspecialists}
                  sectionid={item.sectionid}
                />
              )}

              {item.fieldGroupName === "page_Pagebuilder_Layouts_Gallery" && (
                <GallerySection images={item.gallery} />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Doubleimagetext" && (
                <DoubleImageText
                  image={item.imageWithText.image}
                  title={item.imageWithText.textcontent.title}
                  content={item.imageWithText.textcontent.text}
                  button={item.imageWithText.textcontent.button}
                  slogan={item.sloganWithImage.slogan}
                  sloganimage={item.sloganWithImage.image}
                  backgroundimage={item.sloganWithImage.slogan.backgroundimage}
                  sectionid={item.sectionid}
                />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Tripletcolumn" && (
                <TripletColumn
                  introText={item.introText}
                  button={item.button}
                  boxen={item.boxen}
                  sectionid={item.sectionid}
                />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Moodpicture" && (
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
            </section>
          ))}
        </>
      )}
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
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
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          activeimage {
            localFile {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }

    page: wpPage(id: { eq: $id }) {
      id
      uri
      content
      title
      nodeType
      date(formatString: "MMMM DD, YYYY")

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
          ... on WpPage_Pagebuilder_Layouts_Fullscreenheader {
            fieldGroupName
            slide {
              image {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }

                # altText
                # localFile {
                #   childImageSharp {
                #     gatsbyImageData(
                #       width: 1920
                #       placeholder: BLURRED
                #       formats: [AUTO, WEBP, AVIF]
                #     )
                #   }
                # }
              }
              title
            }
          }

          ... on WpPage_Pagebuilder_Layouts_TextMitBild {
            fieldGroupName
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
            }
            slider {
              image {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                    gatsbyImageData(
                      width: 1920
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
                  fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                  gatsbyImageData(
                    width: 1920
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            logo {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                  gatsbyImageData(
                    width: 1920
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }

          ... on WpPage_Pagebuilder_Layouts_Gallery {
            fieldGroupName
            settings {
              spacingTop
              spacingBottom
            }
            gallery {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                  gatsbyImageData(
                    width: 1200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }

          ... on WpPage_Pagebuilder_Layouts_Doubleimagetext {
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
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
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
                      fluid(maxWidth: 1800, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                      gatsbyImageData(
                        width: 1800
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
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
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

          ... on WpPage_Pagebuilder_Layouts_Tripletcolumn {
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

          ... on WpPage_Pagebuilder_Layouts_Specialists {
            fieldGroupName
            sectionid
            text
            allspecialists {
              textcontent {
                title
                text
                # button {
                #   url
                #   title
                #   target
                # }
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
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

          ... on WpPage_Pagebuilder_Layouts_Partner {
            fieldGroupName
            image {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                  gatsbyImageData(
                    width: 1920
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            logos {
              partner {
                image {
                  altText
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 400, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                      gatsbyImageData(
                        width: 400
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

          ... on WpPage_Pagebuilder_Layouts_Moodpicture {
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
                  fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
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
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
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
`
