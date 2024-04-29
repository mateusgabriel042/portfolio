import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import Sidebar from '@/components/Sidebar/index'
import Header from '@/components/Header/index'
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mateus Gabriel</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className='fixed flex top-[120px] px-[2%] gap-x-5 right-0 w-full h-[calc(100%-120px)]'>
        <Sidebar />
        <div className='overflow-y-auto h-[calc(100%)] px-[30px] w-full'>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}