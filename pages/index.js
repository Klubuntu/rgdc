import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>😎 Play Garden Radio Music in Discord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thanks for choose Manager bot" />
        <p className="description">
          You can add a bot using <b>"Invite Bot"</b><br />
          To see all commands, use <b>/help</b> and select Manager
        </p>
        <div className="invite">
          <h2><a href="https://discord.com/oauth2/authorize?client_id=1075549290279219205&scope=bot&permissions=549775919168">Invite Bot</a></h2>
        </div>
      </main>
      <Footer />
    </div>
  )
}
