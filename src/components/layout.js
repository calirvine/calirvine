import React from "react"
import { Link } from "gatsby"
import "./layout.css"

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
        <div className="contact-wrapper">
          <ul style={{ float: "left", listStyle: "none", lineHeight: "1" }}>
            <li>
              <a href="mailto:hi@calirvine.com">hi@calirvine.com</a>
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
          Content © {new Date().getFullYear()}, this page was built with{" "}
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a> (totally
          unnecessarily)
        </footer>
      </div>
    )
  }
}

export default Layout
