import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Danny Website</title>
      </Head>
      <div >
        <h1 className={styles.title}>distance</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et error a vitae reprehenderit iure explicabo, voluptatem porro natus, aliquid reiciendis quidem exercitationem alias eligendi, velit labore quia quibusdam. Iusto, laborum.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et error a vitae reprehenderit iure explicabo, voluptatem porro natus, aliquid reiciendis quidem exercitationem alias eligendi, velit labore quia quibusdam. Iusto, laborum.</p>
        <Link href="/danny/Detail">
          <a className={styles.btn}>See Danny List</a>
        </Link>
      </div>
    </>
  )
}
