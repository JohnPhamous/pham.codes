import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Section from '../components/Section'
import WritingSection from '../components/WritingSection'

// data
import ROLES from '../data/roles'
import COMMUNITY from '../data/community'
import WRITTING from '../data/writing'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['john', 'pham', 'riverside', 'software', 'engineer']}
    />
    <Section title="Technical" data={ROLES} />
    <WritingSection title="Writing" data={WRITTING} showDefault />
    <Section title="Community" data={COMMUNITY} />
  </Layout>
)

export default IndexPage
