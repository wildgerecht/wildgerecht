import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import UniversalLink from "../UniversalLink"
import LanguageSelector from "./languageSelector"
import MenuList from "./menuStyles"

const HeaderMenu = ({ lang, uri, translationSlug }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "hauptmenu-englisch" }) {
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
    <MenuList className="nav__inner">
      {wpMenu.menuItems.nodes.map((menuItem, i) => {
        if (!menuItem.childItems.nodes.length !== 0 && !menuItem.parentId) {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url
          const itemId = "menu-item-" + menuItem.key

          const haschildren =
            menuItem.childItems.nodes.length !== 0 && "haschildren"

          return (
            <li
              id={itemId}
              key={menuItem.key + i}
              className={"menu-item " + haschildren}
            >
              <UniversalLink
                className="left"
                to={path}
                activeStyle={{
                  color: "#FF6D20",
                }}
                activeClassName="active "
              >
                {menuItem.title}
                {menuItem.childItems.nodes.length !== 0 && (
                  <span className="dropdownicon">▼</span>
                )}
              </UniversalLink>

              {menuItem.childItems.nodes.length !== 0 && (
                <ul className="submenu">
                  {menuItem.childItems.nodes.map((subMenuItem, i) => (
                    <li key={i}>
                      <UniversalLink
                        to={subMenuItem.path}
                        activeStyle={{
                          color: "#FF6D20",
                        }}
                        activeClassName="active"
                      >
                        - {subMenuItem.title}
                      </UniversalLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        }
      })}
      <li>
        <LanguageSelector
          lang={lang}
          uri={uri}
          translationSlug={translationSlug}
        />
      </li>
    </MenuList>
  )
}

export default HeaderMenu
