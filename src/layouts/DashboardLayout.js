import React from 'react';
import DashboardSidebar from '../components/Sidebar/Sidebar'
import DashboardNavbar from '../components/Navbar/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <main className='flex h-screen'>
      <DashboardSidebar />
      <section className='flex-1 flex flex-col overflow-hidden'>
        <DashboardNavbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-dashboard">
          <div className="container pt-2 xl:pt-6 children">
            {children}
          </div>
        </main>
      </section>
    </main>
  )
}

export default DashboardLayout