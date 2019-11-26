/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialLink from "./socialLink"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
            github
            stackoverflow
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <strong>{author}</strong> is a software developer from Toronto, Ontario,
        Canada. He mostly works in fullstack JavaScript, but he likes playing
        around with other languages as well. In his free time he loves to walk
        his dogs, hang out with his kid, rock climb, hike, and camp.{" "}
        <a href="mailto:hi@calirvine.com">Send him a message</a> if you think
        you would enjoy working together!
        <br />
        <div style={{ fontSize: rhythm(1) }}>
          {Object.keys(social).map(key => {
            return <SocialLink key={key} network={key} username={social[key]} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Bio
