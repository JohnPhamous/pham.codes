import React, { Component } from 'react'
import styled from 'styled-components'

const Project = styled.article`
  position: relative;
`

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`

const ProjectImage = styled.img`
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  max-height: 300px;
`

const ProjectDetails = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const DetailsWrapper = styled.div`
  padding: 25px;
`

const Background = styled.div`
  background: black;
  opacity: 0.9;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
`

const Button = styled.a`
  all: unset;
  cursor: pointer;
  background: ${props => props.background};
  padding: 5px;
  margin-right: 15px;
`

export default class ProjectItem extends Component {
  state = {
    showDetails: false,
  }

  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails })

  render() {
    const { project } = this.props
    return (
      <Project>
        <ImageContainer onClick={this.toggleDetails}>
          <ProjectImage src={project.image} />
        </ImageContainer>
        {this.state.showDetails && (
          <>
            <ProjectDetails>
              <DetailsWrapper>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                {project.demo && (
                  <Button
                    href={project.demo}
                    target="_blank"
                    background="rgb(2, 98, 119)"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                )}
                {project.github && (
                  <Button
                    href={project.github}
                    target="_blank"
                    background="rgb(139, 72, 0)"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                )}
                {project.submission && (
                  <Button
                    href={project.submission}
                    target="_blank"
                    background="rgb(49, 6, 110)"
                    rel="noopener noreferrer"
                  >
                    DevPost
                  </Button>
                )}
              </DetailsWrapper>
            </ProjectDetails>
            <Background />
          </>
        )}
      </Project>
    )
  }
}
