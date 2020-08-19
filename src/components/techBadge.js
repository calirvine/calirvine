/*
Component is strongly based on https://github.com/willjw3/gatsby-starter-developer-diary
modified slightly and extended to suit my needs.
*/

import React from 'react'
import { rhythm, scale } from '../utils/typography'
import * as FontAwesome from 'react-icons/fa'
import * as Devicons from 'react-icons/di'
import * as GrommetIcons from 'react-icons/gr'
import * as SimpleIcons from 'react-icons/si'
import techTags from './techTags'

const ICONS_MAP = {
  Fa: FontAwesome,
  Di: Devicons,
  Gr: GrommetIcons,
  Si: SimpleIcons,
}

const TechBadge = ({ tag }) => {
  const buttonStyle = {
    background: `white`,
    borderRadius: `5%`,
    border: `1px solid black`,
    fontSize: `.85rem`,
    height: `100%`,
    paddingLeft: rhythm(0.2),
    paddingRight: rhythm(0.2),
  }
  const parentStyle = {
    display: `inline-block`,
    padding: `.25rem!important`,
    height: `40px`,
  }
  const styleInline = {
    display: `inline`,
  }

  if (!techTags[tag])
    return (
      <div style={parentStyle}>
        <button style={buttonStyle} className="tech-tag text-white">
          <div style={styleInline}>{tag} </div>
        </button>
      </div>
    )

  const { name, size, color, tech } = techTags[tag]
  const str = name

  const iconKey = str.slice(0, 2)
  const icon = React.createElement(ICONS_MAP[iconKey][name])

  return (
    <div style={parentStyle}>
      <div style={buttonStyle}>
        <div style={styleInline}>{tech} </div>
        <div
          style={{ ...styleInline, fontSize: size, color: color }}
          aria-hidden="true"
        >
          {icon}
        </div>
      </div>
    </div>
  )
}

export default TechBadge
