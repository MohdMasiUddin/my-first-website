// make a education componenet that has a list of education and the years attended
import React from 'react'

function Education() {
  const educationData = [
    { institution: 'St Josephs Degree College', degree: 'Bachelor of Computer Applications', years: '2023 - 2026' },
    { institution: 'St Josephs Junior College', degree: 'Commerce', years: '2021-2023' },
    { institution: 'Key High School ', degree: '10th', years: '2020-2021' }
  ]

  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <strong>{edu.institution}</strong> - {edu.degree} ({edu.years})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education

