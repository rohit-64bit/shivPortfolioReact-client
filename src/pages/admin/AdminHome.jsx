import React from 'react'
import SidebarAdmin from '../../components/SidebarAdmin'

function AdminHome() {
  return (
    <>
      <div className='flex h-full'>
        <SidebarAdmin />
        <div className='h-[91vh] w-full p-5 md:p-10 overflow-x-scroll'>
          <div className="flex flex-col gap-5 md:gap-10 md:flex-row">


            <div className='h-max w-[15rem] flex gap-5 bg-slate-100 hover:bg-blue-900 px-10 py-5 rounded-lg text-slate-600 hover:text-white transition-all ease-in-out duration-300 border-2'>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-people-fill my-auto " viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <div className='my-auto'>
                <div className='text-lg font-medium'>Visitors</div>
                <div className='text-lg font-bold'>100</div>
              </div>
            </div>


            <div className='h-max w-[15rem] flex gap-5 bg-slate-100 hover:bg-blue-900 px-10 py-5 rounded-lg text-slate-600 hover:text-white transition-all ease-in-out duration-300 border-2 '>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-file-earmark-bar-graph-fill mx-auto" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
              </svg>
              <div className='my-auto'>
                <div className='text-lg font-medium'>Blog Visit</div>
                <div className='text-lg font-bold'>100</div>
              </div>
            </div>

            <div className='h-max w-[15rem] flex gap-5 bg-slate-100 hover:bg-blue-900 px-10 py-5 rounded-lg text-slate-600 hover:text-white transition-all ease-in-out duration-300 border-2 '>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-btn-fill my-auto" viewBox="0 0 16 16">
                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
              <div className='my-auto'>
                <div className='text-lg font-medium'>Watched</div>
                <div className='text-lg font-bold'>100</div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome