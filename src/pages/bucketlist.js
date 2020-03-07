import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BucketList from '../data/bucketList'
import styled from 'styled-components'
import { comment } from '../colors'

const BucketListPage = () => (
  <Layout>
    <SEO title="Bucket List" keywords={['john', 'pham', 'bucket', 'list']} />
    <h1>John's Bucket List</h1>

    <List>
      {BucketList.map((item, index) => {
        return (
          <Item key={index}>
            {item.name ? (
              <ItemHeader className={item.isDone && 'done'}>
                {item.name}
              </ItemHeader>
            ) : (
              <ItemHeader
                className={item.isDone && 'done'}
                dangerouslySetInnerHTML={{ __html: item._html }}
              ></ItemHeader>
            )}

            {item.progress && !item.isDone && (
              <ItemProgress
                dangerouslySetInnerHTML={{ __html: item.progress }}
              ></ItemProgress>
            )}
          </Item>
        )
      })}
    </List>
  </Layout>
)

export default BucketListPage

const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`

const Item = styled.li`
  margin-bottom: 1.5em;
`

const ItemHeader = styled.p`
  margin: 0;
  font-size: 1em;

  &.done {
    text-decoration: line-through;
  }
`

const ItemProgress = styled.p`
  margin: 0;
  color: ${comment};

  .done {
    text-decoration: line-through;
  }
`
