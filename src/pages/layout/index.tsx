import React, { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar/index'
import Header from '../../components/Header/index'

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main className='fixed top-[70px] right-0 w-[calc(100vw-300px)] h-[calc(100vh-40px)] bg-gray-300'>
        {children}
      </main>
    </>
  )
}

export default Layout;