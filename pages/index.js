import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
 

export default function Home() {
  return (
    <>
      <Head>
        <title>Craft Demo App</title>
        <meta name="description" content="For Intuit Craft Round" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to Craft Demo</h1>
        
      </main>
    </>
  )
}
