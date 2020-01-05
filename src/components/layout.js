import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import { FaGithubSquare as Github } from "react-icons/fa"
import { IconContext } from "react-icons"
import { rhythm, scale } from "../utils/typography"
import LayoutStyles from "./layout.module.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    header = (
      <header className={LayoutStyles.header}>
        <div style={{}}>
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
        <div
          className="contact-wrapper"
          style={{ justifyContent: `flex-end`, marginBottom: rhythm(1.5) }}
        >
          <a href="mailto:hi@calirvine.com">hi@calirvine.com</a>
        </div>
      </header>
    )

    return (
      <div style={{ height: "100vh" }}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(30),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              height: `100vh`,
              display: `flex`,
              flexDirection: `column`,
            }}
          >
            {header}
            <main>{children}</main>
            <footer
              style={{
                marginTop: `auto`,
                marginTop: `${rhythm(1.5)}`,
              }}
            >
              This page was built with{" "}
              <a href="https://www.gatsbyjs.org/">GatsbyJS</a> (totally
              unnecessarily)
            </footer>
          </div>
          <div style={{ position: "fixed", top: "1em", right: "1em" }}>
            <a href="https://github.com/calirvine/calirvine">
              <Github aria-hidden="true" /> Source{" "}
            </a>
          </div>
        </IconContext.Provider>
      </div>
    )
  }
}

export default Layout
