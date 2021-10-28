/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ image, description, meta, title, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            social {
              twitter
            }
          }
        }
        wp {
          generalSettings {
            title
            description
          }
        }
      }
    `
  )

  const nodashtitle = title.replace(/\u00AD/g, "")

  const Url = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description
  // const image = metaImage || site.siteMetadata.image

  const metaImageSrc =
    image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null

  // const image = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      titleTemplate={`${nodashtitle}`}
      meta={[
        {
          name: `image`,
          content: metaImageSrc,
        },
        {
          name: `description`,
          content: metaDescription,
        },

        {
          property: `og:locale`,
          content: "de_DE",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: Url,
        },

        {
          name: `twitter:card`,
          content: "summary_large_image",
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImageSrc
            ? [
                {
                  property: "og:image",
                  content: metaImageSrc,
                },
                {
                  property: "og:image:alt",
                  content: title,
                },
                {
                  property: "og:image:width",
                  content: image.width,
                },
                {
                  property: "og:image:height",
                  content: image.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(
          // handle Secure Image
          metaImageSrc && metaImageSrc.indexOf("https") > -1
            ? [
                {
                  property: "twitter:image:secure_url",
                  content: metaImageSrc,
                },
                {
                  property: "og:image:secure_url",
                  content: metaImageSrc,
                },
              ]
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
