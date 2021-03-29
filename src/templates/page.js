import React from "react"
import { graphql } from "gatsby"
// import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBild from "../components/text-bild"
import MoodPicture from "../components/moodpicture"
import TripletColumn from "../components/TripletColumn"
import FullScreenHeader from "../components/fullscreen-header"
import DoubleImageText from "../components/DoubleImageText"
import SpecialistsSection from "../components/specialists"
import PartnerSection from "../components/partner"

const PageTemplate = ({ data: { page } }) => {
  // const featuredImage = {
  //   image: getImage(page.featuredImage.node.localFile),
  //   alt: page.featuredImage.node.altText || ``,
  // }

  const metaDesc = page.seo.metaDesc || ``

  return (
    <Layout uri={page.uri}>
      {/* lang={page.language.slug} */}

      <SEO title={page.title || ``} description={metaDesc} />
      {/* lang={page.language.slug} */}

      {!!page.pageBuilder.layouts && (
        <>
          {page.pageBuilder.layouts.map((item, i) => (
            <div key={i}>
              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Fullscreenheader" && (
                <FullScreenHeader key={i} slide={item.slide} />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_TextMitBild" && (
                <TextBild
                  key={i}
                  image={item.image}
                  logo={item.logo}
                  title={item.textcontent.title}
                  content={item.textcontent.text}
                  button={item.textcontent.button}
                  settings={item.settings}
                  textRightSide={item.settings.textRightSide}
                  activateaccordion={item.textcontent.activateaccordion}
                  akkordion={item.textcontent.akkordion}
                />
              )}

              {item.fieldGroupName === "page_Pagebuilder_Layouts_Partner" && (
                <PartnerSection
                  key={i}
                  partnergroup={item.partnergroup}
                  image={item.image}
                  logos={item.logos}
                />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Specialists" && (
                <SpecialistsSection
                  key={i}
                  text={item.text}
                  allSpecialists={item.allspecialists}
                />
              )}
              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Doubleimagetext" && (
                <DoubleImageText
                  key={i}
                  image={item.imageWithText.image}
                  title={item.imageWithText.textcontent.title}
                  content={item.imageWithText.textcontent.text}
                  button={item.imageWithText.textcontent.button}
                  slogan={item.sloganWithImage.slogan}
                  sloganimage={item.sloganWithImage.image}
                  backgroundimage={item.sloganWithImage.slogan.backgroundimage}
                />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Tripletcolumn" && (
                <TripletColumn
                  key={i}
                  introText={item.introText}
                  button={item.button}
                  boxen={item.boxen}
                />
              )}

              {item.fieldGroupName ===
                "page_Pagebuilder_Layouts_Moodpicture" && (
                <MoodPicture
                  key={i}
                  vhheight={item.settings.vhheight}
                  title={item.title}
                  text={item.text}
                  button={item.button}
                  image={item.image}
                  horizontalLocation={item.settings.horizontalLocation}
                  gradient={item.settings.gradient}
                />
              )}
            </div>
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
              textRightSide
              header
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
            logo {
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

          ... on WpPage_Pagebuilder_Layouts_Doubleimagetext {
            fieldGroupName
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
                text
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
