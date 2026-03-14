//make Experience component that has a list of experience and the years worked
import React from 'react'

function Experience() {
  const experienceData = [
    { company: 'Tech Company', role: 'Software Engineer', years: '2024 - Present' },
    { company: 'Startup Inc.', role: 'Frontend Developer', years: '2023 - 2024' }
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