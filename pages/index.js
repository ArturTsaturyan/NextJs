import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
        <h1>Barev Next</h1>
        <Link href="/burgers"><a>Բոլոր бургеры</a></Link>
      <Footer/>
    </div>
  )
}
