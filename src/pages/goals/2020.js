import React from 'react'
import dayjs from 'dayjs'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styled from 'styled-components'

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
  {
    name: 'A11y',
    done: false,
    link: null,
    by: '2020-04-01',
  },
]

const healthGoals = [
  {
    name: 'Bench 220lbs',
    done: false,
    link: null,
    by: '2020-07-15',
  },
  {
    name: 'Squat 275lbs',
    done: false,
    link: null,
    by: '2020-07-15',
  },
  {
    name: 'Deadlift 325lbs',
    done: false,
    link: null,
    by: '2020-07-15',
  },
  {
    name: 'Overhead Press 150lbs',
    done: false,
    link: null,
    by: '2020-07-15',
  },
  {
    name: 'Climb a V5',
    done: false,
    link: null,
    by: '2020-05-01',
  },
  {
    name: 'Bike Seattle to Portland (206mi)',
    done: false,
    link: null,
    by: '2020-08-01',
  },
  {
    name: "Rock 'n' Roll Seattle Marathon",
    done: false,
    link: null,
    by: '2020-06-15',
  },
]

const Goals2020Page = () => {
  return (
    <Layout>
      <SEO title="2020 Goals" keywords={[]} />
      <h1>2020 Goals</h1>

      <h2>Learning</h2>
      <Goals goals={learningGoals} />

      <h2>Health</h2>
      <Goals goals={healthGoals} />
    </Layout>
  )
}

export default Goals2020Page

const Goals = props => {
  const today = dayjs()
  const getLabel = goal => {
    const LINE_WIDTH = 75

    const dueDate = dayjs(goal.by).format('MM/DD')
    const label = `${dueDate} ${goal.name}`
    const daysUntil = `${dayjs(goal.by).diff(today, 'day')} days left`

    const dotsNeeded = LINE_WIDTH - label.length - daysUntil.length

    return `${label}${'.'.repeat(dotsNeeded)}${daysUntil}`
  }

  return props.goals
    .sort((a, b) => b.by < a.by)
    .map(goal => {
      return (
        <Goal key={goal.name}>
          <input
            type="checkbox"
            name={goal.name}
            id={goal.name}
            checked={goal.done}
          ></input>
          <label htmlFor={goal.name}>{getLabel(goal)}</label>
        </Goal>
      )
    })
}

const Goal = styled.div`
  input {
    display: none;
  }
`
