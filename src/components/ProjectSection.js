import React, { Component } from 'react'
import styled from 'styled-components'
import { positive, negative, textSecondary, backgroundOnHover } from '../colors'

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0px;
`

export const SectionTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
`

const ListItem = styled.li`
  &.new::before {
    content: '+';
    color: ${positive};
    margin-right: -8px;
    left: -20px;
    position: relative;
  }

  &.primary::before {
    content: '>>>';
    color: ${positive};
    margin-right: -28px;
    left: -40px;
    position: relative;
  }

  &.old::before {
    content: '-';
    color: ${negative};
    margin-right: -8px;
    left: -20px;
    position: relative;
  }

  &.old {
    span,
    li {
      color: ${textSecondary} !important;
    }
  }
  padding: 8px 0px;
`

const ProjectName = styled.a``

export const SectionHeader = styled.div`
  margin-top: 25px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: ${backgroundOnHover};
  }
`

const SectionToggle = styled(SectionTitle)`
  cursor: pointer;
`

const Comment = styled.p`
  color: ${textSecondary};
  margin: 0;
  margin-top: 6px;
  font-style: italic;
`

export const InteractableComment = styled(Comment)`
  cursor: pointer;
  display: inline;

  &:hover {
    background: ${backgroundOnHover};
  }
`

export default class ProjectSection extends Component {
  state = {
    showDetails: false,
  }

  toggleSection = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  componentDidMount = () => {
    this.setState({ showDetails: this.props.showDefault })
  }

  render() {
    const { title, data } = this.props
    const { showDetails } = this.state
    const showCount = 5

    return (
      <section>
        <SectionHeader onClick={this.toggleSection}>
          <SectionTitle>{title}</SectionTitle>
          <SectionToggle>{showDetails ? '[-]' : '[+]'}</SectionToggle>
        </SectionHeader>
        {
          <ListContainer>
            {data.map((project, index) => (
              <ListItem
                key={index}
                style={{
                  display: showDetails || index < showCount ? 'block' : 'none',
                }}
              >
                <ProjectName
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </ProjectName>
                <Comment>// {project.description}</Comment>
              </ListItem>
            ))}
          </ListContainer>
        }
        {!showDetails && (
          <InteractableComment onClick={this.toggleSection}>
            ...
          </InteractableComment>
        )}
      </section>
    )
  }
}
