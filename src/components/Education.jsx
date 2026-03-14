// make a education componenet that has a list of education and the years attended
import React from 'react'

function Education() {
  const educationData = [
    { institution: 'St Joseph Junior College, Tolichowki', degree: 'Intermediate', years: '2021-2023', gpa: '64%' },
    { institution: 'Key High School, Tolichowki', degree: 'Secondary School', years: '2020-2021', gpa: '85%' }
  ]

  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <strong>{edu.institution}</strong> - {edu.degree} ({edu.years}) - GPA: {edu.gpa}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education

