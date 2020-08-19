import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"
import TechBadge from "./techBadge"

import { rhythm, scale } from "../utils/typography"

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query ExperienceQuery {
      allExperienceJson(sort: { fields: startDate, order: DESC }) {
        nodes {
          company
          description
          endDate
          id
          jobTitle
          skills
          startDate
          url
        }
      }
    }
  `)
  const experiences = data.allExperienceJson.nodes

  return (
    <div>
      <div>
        <h3
          style={{
            ...scale(0.2),
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
            color: "grey",
            textTransform: "uppercase",
          }}
        >
          Recent Experience
        </h3>
      </div>
      <div>
        {experiences.map(experience => {
          const {
            company,
            description,
            startDate,
            endDate,
            id,
            jobTitle,
            skills,
            url,
          } = experience
          let dateString = `${moment(startDate).format(`MMMM YYYY`)} `
          if (endDate) dateString += `to ${moment(endDate).format(`MMMM YYYY`)}`
          else dateString += `to present`
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
                  {company}
                </a>
              </h3>
              <p style={{ paddingBottom: 0, marginBottom: rhythm(0.25) }}>
                <strong>{jobTitle}</strong> {dateString}
              </p>
              {description.map(paragraph => (
                <p style={{ marginBottom: rhythm(0.5) }}>{paragraph}</p>
              ))}
              <div style={{ display: "block!important" }}>
                {skills.map(skill => (
                  <TechBadge key={skill} tag={skill} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experiences
