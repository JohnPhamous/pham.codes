import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Projects from '../components/Projects/'
import PROJECTS from '../data/projects'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={['john', 'pham', 'riverside', 'software', 'engineer']}
    />
    <Projects projects={PROJECTS} />
  </Layout>
)

export default IndexPage
