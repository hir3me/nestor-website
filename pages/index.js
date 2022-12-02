import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nestor Professional</title>
        <meta name="description" content="Web Services Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <Hero/>
    </div>
  )
}
