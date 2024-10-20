import React from 'react';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import AppSidebar from './components/Menu/AppSidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SidebarProvider className="dark bg-zinc-800">
        <AppSidebar />
        <main className='w-full py-2'>
          <SidebarTrigger />
          <div className="p-4 w-full overflow-auto">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
