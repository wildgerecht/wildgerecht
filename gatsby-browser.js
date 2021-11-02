// custom typefaces
// import "typeface-zilla-slab"
// normalize CSS across browsers
// custom CSS styles

import "./src/components/normalize.css"
import "./src/components/layout.scss"
import "./src/components/typography.css"

// in gastby-browser.js
// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

//   window.scrollTo(...(currentPosition || [0, 0]))

//   return false
// }

export const onServiceWorkerUpdateReady = () => window.location.reload()
