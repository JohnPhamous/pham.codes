import React from 'react'
import { sha256 } from 'js-sha256'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HallOfFame from '../data/hallOfFame'

const sortPeople = p => {
  const hashedPeople = HallOfFame.map(p => {
    return {
      ...p,
      hash: sha256(p.name),
    }
  })

  const compare = (a, b) => {
    if (a.hash < b.hash) {
      return -1
    }
    if (a.hash > b.hash) {
      return 1
    }

    alert(a.name)
  }

  const sortedPeople = hashedPeople.sort(compare)

  return sortedPeople
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="The Phamous (Hall of Fame)"
      keywords={[
        'john',
        'pham',
        'riverside',
        'software',
        'engineer',
        'hall of fame',
      ]}
    />
    <h1>The Phamous People (My Hall of Fame)</h1>
    <p>
      Throughout my life, I've had the fortune of meeting some amazing folks.
      These folks have taught me technical skills and life lessons, given me
      opportunities, and been there when I needed help.
    </p>

    <p>To everyone here, thank you for everything and keep being awesome!</p>

    <img
      src="https://res.cloudinary.com/phamous/image/upload/v1551229104/be-phamous.png"
      style={{ width: `50%`, margin: `0 auto`, display: `block` }}
      alt="be phamous"
    />

    <p style={{ color: `#9c9c9c` }}>
      <sup>*</sup>The ordering of names is based on the SHA256 encoding for each
      person's name.
    </p>

    <ul>
      {sortPeople(HallOfFame).map(p => (
        <li key={p.hash}>{p.name}</li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
