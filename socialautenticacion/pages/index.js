import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginLogout from '../src/components/LoginLogout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Inicio de sesión <a href="https://nextjs.org">Social Next.js!</a>
        </h1>

        <br></br>
          <br></br>

          <a href="/profile" className={styles.card}>
          Mi perfril 
          </a>

          <a href="/profile" className={styles.card}>
          Contacto
          </a>
          <a href="/profile" className={styles.card}>
          Curso 
          </a>

        <br></br>
        <br></br>

        <div className={styles.grid}>

          <LoginLogout />
        
        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}