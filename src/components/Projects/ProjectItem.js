import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Project = styled.article`
  position: relative;
  margin-bottom: 36px;
`

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const ProjectImage = styled.img`
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  width: 100%;
`

const OnHoverFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const ProjectDetails = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  animation: ${OnHoverFade} 0.2s linear 1;
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

const Button = styled(OutboundLink)`
  all: unset;
  cursor: pointer;
  background: ${props => props.background};
  padding: 5px;
  margin-right: 15px;
`

const Prize = styled.span`
  background: rgb(153, 0, 0);
  padding: 5px;
  position: absolute;
  z-index: 10;
  width: 100%;
  text-align: center;
`

export default class ProjectItem extends Component {
  state = {
    showDetails: false,
  }

  toggleDetails = val => this.setState({ showDetails: val })

  injectCloudinaryOptimizations = src => {
    if (src.includes('gif')) {
      return src
    }

    const tokens = src.split('upload')
    const flags = 'upload/f_auto,w_700/'
    const newSrc = `${tokens[0]}${flags}${tokens[1]}`
    return newSrc
  }

  render() {
    const { project } = this.props
    return (
      <Project>
        <ImageContainer onMouseOver={() => this.toggleDetails(true)}>
          {project.prizes.map(prize => (
            <Prize>{prize}</Prize>
          ))}
          <ProjectImage
            src={this.injectCloudinaryOptimizations(project.image)}
          />
        </ImageContainer>
        {this.state.showDetails && (
          <>
            <ProjectDetails onMouseLeave={() => this.toggleDetails(false)}>
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
