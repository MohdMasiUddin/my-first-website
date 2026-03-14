//make Experience component that has a list of experience and the years worked
import React from 'react'

function Experience() {
  const experienceData = [
    { company: 'Fresher', role: 'Open to Opportunities', years: 'Seeking Entry-level Position' }
  ]

  return (
    <div className="experience">
      <h2>Experience</h2>
      <ul>
        {experienceData.map((exp, index) => (
          <li key={index}>
            <strong>{exp.company}</strong> - {exp.role} ({exp.years})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience