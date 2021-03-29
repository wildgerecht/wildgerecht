import React from "react"
import UniversalLink from "./UniversalLink"

const Button = ({ button }) => {
  return (
    <>
      {button && button.target ? (
        <>
          <a
            className="button"
            href={button.url}
            target="_blank"
            rel="noreferrer"
          >
            {button.title}
          </a>
        </>
      ) : (
        <>
          <UniversalLink className="button" to={button.url}>
            {button.title}
          </UniversalLink>
        </>
      )}
    </>
  )
}

export default Button
