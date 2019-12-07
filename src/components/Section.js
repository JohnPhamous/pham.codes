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

const Role = styled.span`
  color: rgb(189, 147, 249);
`

const Location = styled.span`
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

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`

const SectionToggle = styled(SectionTitle)`
  cursor: pointer;
`

const Comment = styled.p`
  color: rgb(185, 180, 172);
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
                    showDetails || (role.class !== 'old' || index === 1)
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
