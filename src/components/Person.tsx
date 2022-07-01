import type { FC } from 'react'
import { Person } from '../shared/types'

type PersonProps = Person

const Person: FC<PersonProps> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}
export default Person
