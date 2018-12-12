import React from 'react'
import styled from 'styled-components'

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0px;
`

const SectionTitle = styled.h2`
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

  &.old::before {
    content: '-';
    color: rgb(255, 51, 51);
    margin-right: -8px;
    left: -20px;
    position: relative;
  }

  &.old {
    color: rgb(185, 180, 172);
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

const Section = props => {
  return (
    <div>
      <SectionTitle>{props.title}</SectionTitle>
      <ListContainer>
        {props.data.map(role => (
          <ListItem className={role.class}>
            <Role>{role.role}</Role> at <Location>{role.location}</Location>
          </ListItem>
        ))}
      </ListContainer>
    </div>
  )
}

export default Section
