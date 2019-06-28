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

  a {
    color: rgb(189, 147, 249);
  }
`

const Biography = () => (
  <Container>
    <SectionHeader>
      <SectionTitle>Currently</SectionTitle>
    </SectionHeader>

    <List>
      <li>🧠 Learning penetration testing</li>
      <li>🇨🇳 Learning Mandarin, 你好!</li>
      <li>
        💻 Freelance web dev'ing, need some help? Let's{' '}
        <a href="mailto:john@pham.codes">chat</a>.
      </li>
      <li>🏃‍♂️ Training for a marathon</li>
    </List>
  </Container>
)

export default Biography
