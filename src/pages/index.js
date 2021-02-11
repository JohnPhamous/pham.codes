import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/Section'
import Biography from '../components/Biography'
import ProjectSection from '../components/ProjectSection'

import ROLES from '../data/roles'
import PROJECTS from '../data/projects'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'john',
        'pham',
        'riverside',
        'software',
        'engineer',
        'seattle',
      ]}
    />
    <Biography />
    <Section title="Experience" data={ROLES} />
    <ProjectSection title="Ships" data={PROJECTS} />
  </Layout>
)

export default IndexPage
