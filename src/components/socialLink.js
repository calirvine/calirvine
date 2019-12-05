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
        aria-label="Twitter"
      >
        <span className={socialStyles.srOnly}>Twitter</span>
        <Twitter aria-hidden="true" />
      </a>
    )
  if (network === "linkedin")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://www.linkedin.com/in/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <span className={socialStyles.srOnly}>LinkedIn</span>
        <Linkedin aria-hidden="true" />
      </a>
    )
  if (network === "github")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <span className={socialStyles.srOnly}>GitHub</span>
        <Github aria-hidden="true" />
      </a>
    )
  if (network === "instagram")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://www.instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <span className={socialStyles.srOnly}>Instagram</span>
        <Instagram aria-hidden="true" />
      </a>
    )
  if (network === "stackoverflow")
    return (
      <a
        className={socialStyles.socialLink}
        href={`https://stackoverflow.com/users/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Stackoverflow"
      >
        <span className={socialStyles.srOnly}>Stackoverflow</span>
        <Stackoverflow aria-hidden="true" />
      </a>
    )
  return (
    <p>
      {network} {username}
    </p>
  )
}

export default SocialLink
