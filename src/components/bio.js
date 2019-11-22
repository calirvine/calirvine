/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {
  FaTwitterSquare as Twitter,
  FaLinkedin as Linkedin,
  FaStackOverflow as Stackoverflow,
  FaGithubSquare as Github,
  FaInstagram as Instagram,
} from "react-icons/fa"

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
      <p>
        <strong>{author}</strong> is a developer from Toronto, Ontario, Canada.{" "}
        <a href="mailto:cal@ellemayo.com">Send him a message</a> if you think
        you would enjoy working together!
        <br />
        <div style={{ fontSize: rhythm(1) }}>
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <Linkedin />
          </a>
          <Stackoverflow />
          <Instagram />
          <Github />
        </div>
      </p>
    </div>
  )
}

export default Bio
