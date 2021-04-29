import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { mq, colors } from "../../utils/presets"
import UniversalLink from "../UniversalLink"
// import LanguageSelector from "./languageSelector"

const MenuList = styled.ul`
  .nav__item--active {
    a {
      color: ${colors.orange};
    }
  }
  .nav__item--active.kontakt {
    a {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      opacity: 0.8;
    }
  }
  display: none;

  ${mq.desktop} {
    margin-right: 1rem;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-self: center;
    flex: 1 0 auto;
    justify-content: flex-end;
    li {
      display: block;
      margin: 0;
      padding-left: 2rem;
      margin-bottom: -1.2rem;
      /* &:last-child {
        a {
          padding-right: 0;
        }
      } */
      .dropdownicon {
        font-size: 0.9rem;
        padding-left: 0.4rem;
      }
      > a {
        font-family: var(--fontFamily-sans);
        letter-spacing: 0.1em;
        padding: 1rem 0.5rem 0;
        display: block;
        text-decoration: none;
        font-size: 1rem;
        text-transform: uppercase;
        color: white;
        transition: color 0.3s ease-in-out;
        padding: 1rem 0.5rem 0;
        font-size: 1.3rem;
        &:hover {
          color: ${colors.orange};
        }
      }
      a.left {
        position: relative;
      }

      a.left:before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: ${colors.orange};
        visibility: hidden;
        transition: width 0.3s ease-in-out;
      }
      a.left:hover:before,
      a.left:focus:before {
        visibility: visible;
        width: 100%;
      }
      a.active:before {
        visibility: visible;
        width: 100%;
      }

      /* DROPDOWN MENU  */
      position: relative;

      @keyframes growDown {
        0% {
          transform: scaleY(0.7);
        }
        100% {
          transform: scaleY(1);
        }
      }

      .submenu {
        visibility: hidden;
        position: absolute;
        display: none;
        opacity: 0;
        top: 100%;
        left: 0;
        width: 100%;
        perspective: 1000px;

        animation: growDown 300ms ease-in-out forwards;
        transition: all 1.3s;

        transform-origin: top center;
        left: 0;
        width: 15rem;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          margin: 0 0.5rem 0 0;
          /* background: green; */
          &:first-child {
            padding-top: 0.7rem;
          }
          a {
            /* background: gold; */
            padding: 0.5rem 0.5rem 0 0.5rem;
          }
        }
      }
    }
    .haschildren {
      transition: all 0.3s;
      &:hover {
        .submenu {
          display: block;
          opacity: 1;
          visibility: visible;
        }
      }
    }
    /* KONTAKT */
    .kontakt {
      margin-left: 0.5rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      transition: all 0.2s;
      &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      }
      .active {
        color: ${colors.orange};
        background: white;
      }
      a {
        background: ${colors.orange};
        padding-right: 0.7rem !important;
        padding-left: 0.7rem !important;
        color: white;
        outline: 2px solid ${colors.orange};
        &:hover,
        &:focus {
          color: ${colors.orange};
          background: white;
        }
      }
    }
  }
  ${mq.xl} {
    li {
      padding-left: 2rem;
      margin-bottom: -1.2rem;

      a {
        padding: 1rem 0.5rem 0;
        font-size: 1.3rem;
      }
    }
  }
`

const HeaderMenu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "hauptmenu" }) {
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
                        {subMenuItem.title}
                      </UniversalLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        }
      })}
      {/* <li>
        <LanguageSelector lang={lang} uri={uri} />
      </li> */}
    </MenuList>
  )
}

export default HeaderMenu
