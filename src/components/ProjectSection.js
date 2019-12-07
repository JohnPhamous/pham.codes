import React, { Component } from 'react'
import styled from 'styled-components'

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
    color: rgb(51, 255, 51);
    margin-right: -8px;
    left: -20px;
    position: relative;
  }

  &.primary::before {
    content: '>>>';
    color: rgb(51, 255, 51);
    margin-right: -28px;
    left: -40px;
    position: relative;
  }

  &.old::before {
    content: '-';
    color: rgb(255, 51, 51);
    margin-right: -8px;
    left: -20px;
    position: relative;
  }

  &.old {
    span,
    li {
      color: rgb(185, 180, 172) !important;
    }
  }

  &:hover {
    background: #3c3c3c;
  }
  padding: 8px 0px;
`

const ProjectName = styled.a`
  color: rgb(139, 233, 253);
`

export const SectionHeader = styled.div`
  margin-top: 25px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: #3c3c3c;
  }
`

const SectionToggle = styled(SectionTitle)`
  cursor: pointer;
`

const Comment = styled.p`
  color: rgb(185, 180, 172);
  margin: 0;
  margin-top: 6px;
  font-style: italic;
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
    const showCount = 3

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
        {!showDetails && <Comment onClick={this.toggleSection}>...</Comment>}
      </section>
    )
  }
}
