import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar/index'
import Header from '../../components/Header/index'

type LayoutProps = {
  children: ReactNode;
};


export const Layout: React.FC<LayoutProps> = ({children}) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <Sidebar />
      <Header />
      <main className='fixed top-[90px] right-0 w-[calc(100vw-300px)] h-[calc(100vh-90px)] shadow-main rounded-tl-[40px]'>
        <img src="/assets/images/icon_main_about.png" alt="" className='absolute left-[-25px] top-[50px]' />
        {children}
      </main>
    </>
  )
}

export default Layout;