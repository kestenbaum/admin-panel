import { FC, useState } from 'react'
import styles from './Page.module.css'
import Login from '../components/Login/Login'
import List from '../components/List/List'

const Page: FC = () => {
  const [iSLogin] = useState<boolean>(false)

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.wrapper}>
          {iSLogin ? (
            <Login />
          ) : (
            <>
              <List />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Page
