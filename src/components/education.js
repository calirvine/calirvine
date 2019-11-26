import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Education = () => {
  const data = useStaticQuery(graphql`
    query EducationQuery {
      allEducationJson {
        nodes {
          title
          startYear
          endYear
          degree
          url
          id
        }
      }
    }
  `)
  const education = data.allEducationJson.nodes

  return (
    <div>
      <div>
        <h3
          style={{
            ...scale(0.2),
            fontFamily: `Montserrat, sans-serif`,
            marginTop: rhythm(2.5),
            marginBottom: 0,
            color: "grey",
            textTransform: "uppercase",
          }}
        >
          Education
        </h3>
      </div>
      <div>
        {education.map(school => {
          const { title, startYear, endYear, degree, url, id } = school
          let dateString = `${startYear} to ${endYear}`

          return (
            <div key={id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <a
                  href={url}
                  style={{ boxShadow: `none` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </h3>
              <p style={{ paddingBottom: 0, marginBottom: rhythm(0.25) }}>
                <strong>{degree}</strong> {dateString}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education
