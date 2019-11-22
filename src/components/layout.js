import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    header = (
      <header style={{ textAlign: "left", width: "100%", overflow: "hidden" }}>
        <div style={{ float: "left" }}>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </div>
        <div style={{ float: "right" }}>
          <ul style={{ float: "left", listStyle: "none", lineHeight: "1" }}>
            <li>
              <a href="mailto:cal@ellemayo.com">cal@ellemayo.com</a>
            </li>
            <li>
              <a href="tel:4164556736">416-455-6736</a>
            </li>
          </ul>
        </div>
      </header>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <main>{children}</main>
        <footer
          style={{
            marginTop: 70,
          }}
        >
          © {new Date().getFullYear()}, it's basically just the
          {` `}
          <a href="https://github.com/gatsbyjs/gatsby-starter-blog">
            Gatsby Starter Blog
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
