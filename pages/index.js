import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Modules from '@/components/modules'
import Container from '@mui/material/Container';
 

export default function Home() {
  return (
    <>
      <Head>
        <title>Craft Demo App</title>
        <meta name="description" content="For Intuit Craft Round" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container maxWidth="lg" className={styles.textCenter}>
        <h1 className={styles.colorDark}>Welcome to Craft Demo</h1>
        <Modules/>
      </Container>
    </>
  )
}
