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
          You can add a bot using <b>"Invite Bot"</b></br>
          To see all commands, use <b>/help</b> and select Manager
        </p>
        <div className="invite">
          <h2>Invite Bot</h2>
        </div>
      </main>

      <Footer />
    </div>
  )
}
