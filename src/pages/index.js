import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Section from '../components/Section'

// data
import ROLES from '../data/roles'
import COMMUNITY from '../data/community'

const IndexPage = () => (
  <Layout>
    <SEO
      title="John Pham"
      keywords={['john', 'pham', 'riverside', 'software', 'engineer']}
    />
    <Section title="Experience" data={ROLES} showDefault />
    <Section title="Community Building" data={COMMUNITY} />
  </Layout>
)

export default IndexPage
