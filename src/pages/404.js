import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'

const Link = styled(OutboundLink)`
  color: rgb(139, 233, 253);
  text-decoration: none;
`
const Array = styled.span`
  color: rgb(189, 147, 249);
`

const Parenthesis = styled.span`
  color: rgb(139, 233, 253);
`

const Argument = styled.span`
  color: rgb(255, 121, 198);
`

const Info = styled.p`
  color: rgb(185, 180, 172);
`

const NotFoundPage = props => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      <Array>pham</Array>
      <Parenthesis>[</Parenthesis>
      <Argument>'{props.location.pathname}'</Argument>
      <Parenthesis>]</Parenthesis> is out of bounds
    </h1>
    <Info>This page does not exist.</Info>
    <p>
      Looks like we've run into a bug. Let's open an{' '}
      <Link
        href="https://github.com/JohnPhamous/pham.codes/issues/new"
        target="_blank"
        rel="noreferrer"
      >
        issue
      </Link>{' '}
      and fix it!
    </p>
  </Layout>
)

export default NotFoundPage
