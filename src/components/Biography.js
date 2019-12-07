import React from 'react'
import styled from 'styled-components'
import { SectionTitle, SectionHeader } from './Section'

const Container = styled.div`
  margin: 16px 0;

  @media screen and (max-width: 600px) {
    margin: 0;
    padding-bottom: 30px;
  }
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
      <SectionTitle>Current</SectionTitle>
    </SectionHeader>

    <List>
      <li>
        <span role="img" aria-label="China Flag">
          🇨🇳
        </span>{' '}
        Learning Mandarin, 你好!
      </li>
      <li>
        <span role="img" aria-label="Laptop">
          💻
        </span>{' '}
        Freelance web dev'ing, need some help? Let's{' '}
        <a href="mailto:john@pham.codes">chat</a>.
      </li>
      <li>
        <span role="img" aria-label="Running">
          🧗‍♂️
        </span>{' '}
        Finding the next wall to climb.
      </li>
    </List>
  </Container>
)

export default Biography
