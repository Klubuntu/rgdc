import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thanks for choose Manager bot" />
        <p className="description">
          You can add a bot using "Invite Bot" button
          To see all commands, use /help and select Manager
        </p>
        <div>
          <h2>Invite Bot<h2>
        </div>
      </main>

      <Footer />
    </div>
  )
}
