import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const learningGoals = [
  {
    name: 'React Native',
    done: false,
    link: null,
    by: '2020-03-01',
  },
  {
    name: 'Memrise Mandarin Chinese 1 Course',
    done: false,
    link: null,
    by: '2020-06-01',
  },
  {
    name: 'GraphQL',
    done: false,
    link: null,
    by: '2020-02-01',
  },
  {
    name: 'Real Estate Investing',
    done: false,
    link: null,
    by: '2020-05-01',
  },
]

const healthGoals = [
  {
    name: 'Bench 220lbs',
    done: false,
    link: null,
    by: '2020-03-01',
  },
  {
    name: 'Squat 275lbs',
    done: false,
    link: null,
    by: '2020-03-01',
  },
  {
    name: 'Deadlift 325lbs',
    done: false,
    link: null,
    by: '2020-03-01',
  },
  {
    name: 'Overhead Press 150lbs',
    done: false,
    link: null,
    by: '2020-03-01',
  },
  {
    name: 'Climb a V5',
    done: false,
    link: null,
    by: '2020-06-01',
  },
]

const Goals2020Page = () => (
  <Layout>
    <SEO title="2020 Goals" keywords={[]} />
    <h1>2020 Goals</h1>

    <h2>Learning</h2>
    {learningGoals
      .sort((a, b) => b.by < a.by)
      .map(goal => {
        return (
          <div>
            <input
              type="checkbox"
              name={goal.name}
              id={goal.name}
              key={goal.name}
              checked={goal.done}
            ></input>
            <label htmlFor={goal.name}>
              {goal.by}: {goal.name}
            </label>
          </div>
        )
      })}

    <h2>Health</h2>
    {healthGoals
      .sort((a, b) => b.by < a.by)
      .map(goal => {
        return (
          <div>
            <input
              type="checkbox"
              name={goal.name}
              id={goal.name}
              key={goal.name}
              checked={goal.done}
            ></input>
            <label htmlFor={goal.name}>
              {goal.by}: {goal.name}
            </label>
          </div>
        )
      })}
  </Layout>
)

export default Goals2020Page
