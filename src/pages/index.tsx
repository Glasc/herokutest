import type { NextPage } from 'next'
import Person from '../components/Person'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Person name="cesar" age={19}/>
    </div>
  )
}

export default Home
