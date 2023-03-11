import React from 'react'
import AnalyticsDock from '../../components/AnalyticsDock'
import SidebarAdmin from '../../components/SidebarAdmin'

function AdminHome() {
  return (
    <>
      <div className='flex h-full'>
        <SidebarAdmin />
        <div className='h-[91vh] w-full p-5 md:p-10 overflow-x-scroll'>

          {/* analytics section */}

          <AnalyticsDock />

          {/* manage offers popup section */}

        </div>
      </div>
    </>
  )
}

export default AdminHome