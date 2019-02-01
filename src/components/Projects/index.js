import React from 'react'
import styled from 'styled-components'

import ProjectItem from './ProjectItem'

const ProjectsWrapper = styled.section`
  margin-top: 45px;
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`

const Projects = ({ projects }) => {
  return (
    <ProjectsWrapper>
      <ProjectsContainer>
        {projects.map(project => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </ProjectsContainer>
    </ProjectsWrapper>
  )
}

export default Projects
