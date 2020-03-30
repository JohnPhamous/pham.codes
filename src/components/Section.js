import React, { Component } from 'react'
import styled from 'styled-components'
import {
  green,
  red,
  gray,
  onHoverGray,
  purple,
  blue,
  comment,
  positive,
  negative,
  textSecondary,
  backgroundOnHover,
  textBold,
  textAccent,
} from '../colors'

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

  &:hover {
    background: ${backgroundOnHover};
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
    background: ${backgroundOnHover};
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
        {
          <ListContainer>
            {data.map((role, index) => (
              <ListItem
                className={role.class}
                key={`${role.role}${role.location}`}
                style={{
                  display:
                    showDetails || role.class !== 'old' || index === 1
                      ? 'block'
                      : 'none',
                }}
              >
                <Role>{role.role}</Role> <span>at</span>{' '}
                <Location>{role.location}</Location>
              </ListItem>
            ))}
          </ListContainer>
        }
        {!showDetails && <Comment onClick={this.toggleSection}>...</Comment>}
      </section>
    )
  }
}
