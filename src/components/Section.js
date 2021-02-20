import React, { Component } from 'react'
import styled from 'styled-components'
import {
  positive,
  negative,
  textSecondary,
  backgroundOnHover,
  textBold,
  textAccent,
} from '../colors'
import { InteractableComment } from './ProjectSection'

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

const Role = styled.span`
  color: ${textBold};
`

const Location = styled.span`
  color: ${textAccent};
`

export const SectionHeader = styled.div`
  margin-top: 25px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: ${props => !props.noHover && backgroundOnHover};
  }

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`

const SectionToggle = styled(SectionTitle)`
  cursor: pointer;
`

const Comment = styled.p`
  color: ${textSecondary};
  margin: 0;
  cursor: pointer;
`

export default class Section extends Component {
  MIN_NUM_ROLES_TO_SHOW = 5
  state = {
    showDetails: false,
  }

  toggleSection = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  componentDidMount = () => {
    this.setState({ showDetails: this.props.showDefault })
  }

  renderRoles = () => {
    let roles = []

    if (this.state.showDetails) {
      roles = this.props.data
    } else {
      roles = this.props.data.filter(
        (role, index) =>
          index < this.MIN_NUM_ROLES_TO_SHOW || role.class !== 'old'
      )
    }

    return (
      <ListContainer>
        {roles.map(role => (
          <ListItem
            className={role.class}
            key={`${role.role}${role.location}`}
            style={{
              display: 'block',
            }}
          >
            <Role>{role.role}</Role> <span>at</span>{' '}
            <Location>{role.location}</Location>
          </ListItem>
        ))}
      </ListContainer>
    )
  }

  render() {
    const { title } = this.props
    const { showDetails } = this.state
    return (
      <section>
        <SectionHeader onClick={this.toggleSection}>
          <SectionTitle>{title}</SectionTitle>
          <SectionToggle>{showDetails ? '[-]' : '[+]'}</SectionToggle>
        </SectionHeader>
        {this.renderRoles()}
        {!showDetails && (
          <InteractableComment onClick={this.toggleSection}>
            ...
          </InteractableComment>
        )}
      </section>
    )
  }
}
