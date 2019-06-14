import React from 'react'
import styled from 'styled-components'
import { SectionTitle, SectionHeader } from './Section'

const Container = styled.div`
  margin: 16px 0;
`

const List = styled.ul`
  list-style: none;
  line-height: 1.3;
  margin: 0;

  li {
    margin-left: -40px;
    padding: 8px 0;
  }
`

const Biography = () => (
  <Container>
    <SectionHeader>
      <SectionTitle>Currently</SectionTitle>
    </SectionHeader>

    <List>
      <li>🧠 Learning about pen testing and deep learning</li>
      <li>💻 Freelance web dev for local businesses</li>
      <li>🏃‍♂️ Training for a marathon</li>
    </List>
  </Container>
)

export default Biography
