import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <label>teste</label>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;