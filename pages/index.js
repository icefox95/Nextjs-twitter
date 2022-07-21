import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        { /* Widgets */}

        { /* Modal */}
      </main>
    </div>
  )
}
