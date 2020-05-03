import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BioPage = () => (
  <Layout>
    <SEO title="Biography" keywords={['john', 'pham', 'biography', 'speaker']} />
    <h1>Bio</h1>

    <p>John is a Software Engineer at Microsoft. He's worked for several other places, including NASA Jet Propulsion Laboratory, AT&T, and Amazon, and he's had the privilege of working with small businesses and academic institutions as a freelancer. He's experienced with delivering delightful features and leading projects from ideation to general audience. His passion is in customer discovery, user experience, and design systems.</p>

  </Layout>
)

export default BioPage
