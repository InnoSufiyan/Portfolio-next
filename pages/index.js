import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inno Sufiyan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}
