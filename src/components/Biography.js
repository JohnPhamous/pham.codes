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
    <SectionHeader noHover>
      <SectionTitle>About</SectionTitle>
    </SectionHeader>

    <p>
      <span role="img" aria-label="Hand waving hello">
        👋
      </span>{' '}
      I'm John, an engineer passionate about accessibility,
      metacognition, and building delighters for the web.
    </p>

    <List>
      <li>
        <span role="img" aria-label="China Flag">
          🇨🇳
        </span>{' '}
        Learning Mandarin, 你好!
      </li>
      <li>
        <span role="img" aria-label="Running">
          🏋️‍♀️
        </span>{' '}
        Training to join the 1000 pound club.
      </li>
    </List>
  </Container>
)

export default Biography
