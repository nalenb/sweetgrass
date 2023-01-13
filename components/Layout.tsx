import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Sweetgrass Wyoming HOA</title>
        <meta name='description' content='Sweetgrass Wyoming HOA' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
