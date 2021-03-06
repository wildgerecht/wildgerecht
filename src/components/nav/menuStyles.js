import styled from "styled-components"
import { mq, colors } from "../../utils/presets"

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

  .langswitcher {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

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
          transform: scaleY(0.5);
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

        animation: growDown 200ms ease-in-out forwards;
        transition: all 1.3s;

        transform-origin: top center;
        left: 0;
        min-width: 18rem;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          display: inline-block;
          margin: 0 0.5rem 1px 0;
          width: 100px;
          &:first-child {
            padding-top: 0.7rem;
          }
          a {
            padding: 0.35rem 0.6rem;
          }
          li:last-child {
            padding-bottom: 1rem;
          }
        }
      }
    }
    .haschildren {
      transition: all 0.3s;
      &:hover {
        .submenu {
          display: block;
          position: absolute;
          opacity: 1;
          visibility: visible;
          li {
            width: auto;
            a {
              background: rgba(0, 0, 0, 0.8);
            }
          }
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

export default MenuList
