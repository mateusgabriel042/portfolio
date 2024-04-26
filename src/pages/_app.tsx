import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import Sidebar from '@/components/Sidebar/index'
import Header from '@/components/Header/index'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />
      <main className='fixed flex top-[130px] px-[2%] gap-x-5 right-0 w-full '>
        <div className='col-span-3 min-w-[300px] border-r-gray-light border-r'>
          <Sidebar />
        </div>
        <div className='col-span-8 w-full'>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}