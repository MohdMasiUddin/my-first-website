//make a projects component that displays a list of projects with descriptions and links
import React from 'react'

function Projects() {
  const projectsData = [
    { title: 'Project One', description: 'A web application that does something cool.', link: '#' },
    { title: 'Project Two', description: 'Another web application with unique features.', link: '#' }
  ]

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects