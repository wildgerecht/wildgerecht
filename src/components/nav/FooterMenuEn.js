import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

const FooterMenu = ({ lang, uri, translationSlug }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "footermenu-englisch" }) {
        name
        menuItems {
          nodes {
            key: id
            title: label
            url
            parentId
            childItems {
              nodes {
                id
                title: label
                url
                path
                parentId
              }
            }
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <>
      {wpMenu.menuItems.nodes.map((menuItem, i) => {
        if (!menuItem.childItems.nodes.length !== 0 && !menuItem.parentId) {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url
          const itemId = "menu-item-" + menuItem.key

          return (
            <li className="nomobile">
              <Link to={path}>{menuItem.title}</Link>
            </li>
          )
        }
      })}
    </>
  )
}

export default FooterMenu
