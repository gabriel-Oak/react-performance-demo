import Head from 'next/head'
import News from '../components/News'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News Without Redux</title>
      </Head>

      <News />
    </div>
  )
}
