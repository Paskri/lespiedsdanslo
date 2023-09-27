import Image from 'next/image'

import Header from '@/components/Layout/Header'
import Gastronomy from '@/components/Gastronomy'
import Chef from '@/components/Chef'
import Carte from '@/components/Carte'
import Contact from '@/components/Contact'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Gastronomy />
        <Chef />
        <Carte />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
