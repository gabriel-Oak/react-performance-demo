import Head from 'next/head'
import NewsRedux from '../components/NewsRedux'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News With Redux</title>
      </Head>

      <NewsRedux />
    </div>
  )
}
