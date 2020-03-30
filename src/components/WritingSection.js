import React, { Component } from 'react'
import styled from 'styled-components'
import { positive, negative, textSecondary, backgroundOnHover } from '../colors'

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0px;
`

const SectionTitle = styled.h2`
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

  &:hover {
    background: ${backgroundOnHover};
  }
  padding: 8px 0px;
`

const Role = styled.a``

const SectionHeader = styled.div`
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

export default class Section extends Component {
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
    return (
      <section>
        <SectionHeader onClick={this.toggleSection}>
          <SectionTitle>{title}</SectionTitle>
          <SectionToggle>{showDetails ? '[-]' : '[+]'}</SectionToggle>
        </SectionHeader>
        {showDetails && (
          <ListContainer>
            {data.map(role => (
              <ListItem key={`${role.title}`}>
                <Role href={`${role.link}`} target="_blank" rel="noreferrer">
                  {role.title}
                </Role>
              </ListItem>
            ))}
          </ListContainer>
        )}
      </section>
    )
  }
}
