import React from "react"
import {
  FaTwitterSquare as Twitter,
  FaLinkedin as Linkedin,
  FaStackOverflow as Stackoverflow,
  FaGithubSquare as Github,
  FaInstagram as Instagram,
} from "react-icons/fa"
import socialStyles from "./socialLink.module.css"

const SocialLink = ({ network, username }) => {
  if (network === "twitter")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://twitter.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
    )
  if (network === "linkedin")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://www.linkedin.com/in/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
    )
  if (network === "github")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    )
  if (network === "instagram")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://www.instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
    )
  if (network === "stackoverflow")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://stackoverflow.com/users/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Stackoverflow />
      </a>
    )
  return (
    <p>
      {network} {username}
    </p>
  )
}

export default SocialLink
