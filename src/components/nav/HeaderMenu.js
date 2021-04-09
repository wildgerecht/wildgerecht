import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { mq, colors } from "../../utils/presets"
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
    margin: 0;
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
      a {
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
    }
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

const HeaderMenu = ({ uri, lang }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "hauptmenu" }) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
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
        const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        const itemId = "menu-item-" + menuItem.databaseId

        return (
          <li
            id={itemId}
            key={i + menuItem.url}
            className={
              "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
              itemId
            }
          >
            <Link
              className="left"
              key={i + menuItem.url}
              to={path}
              activeStyle={{
                color: "#FF6D20",
              }}
              activeClassName="active"
            >
              {menuItem.label}
            </Link>
          </li>
        )
      })}
      {/* <li>
        <LanguageSelector lang={lang} uri={uri} />
      </li> */}
    </MenuList>
  )
}

export default HeaderMenu
