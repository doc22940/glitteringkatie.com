import React, { useRef } from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const today = new Date()
  let emojis = FUN
  if (today.getMonth() >= 10) {
    // zero indexed months, 10 == 11 == NOV
    emojis = emojis.concat(CHRISTMAS)
  } else if (today.getMonth() >= 8) {
    // 8 == 9 == SEP
    emojis = emojis.concat(HALLOWEEN)
  }
  const emojiIndex = useRef(Math.floor(Math.random() * emojis.length))

  const header = (
    <h1
      className="secondary"
      style={{
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {today.getFullYear()}, Built with {emojis[emojiIndex.current]} and
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

const FUN = [
  "✨",
  "💖",
  "🤷🏼‍♀️",
  "😂",
  "🍾",
  "🔮",
  "🥳",
  "🙃",
  "🤦🏼‍♀️",
  "🍑",
  "🤸🏼‍♀️",
  "🎨",
  "🎉",
  "🎶",
  "😻",
  "🥑",
]

const HALLOWEEN = ["🎃", "🎂", "🥳", "🦇", "🍂", "🍁", "🎁"]
const CHRISTMAS = ["🎄", "🎅🏼", "⛄️", "❄️", "🤶🏼", "🌲"]

export default Layout
