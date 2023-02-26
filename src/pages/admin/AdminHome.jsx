import React from 'react'
import SidebarAdmin from '../../components/SidebarAdmin'

function AdminHome() {
  return (
    <>
      <div className='flex h-full'>
        <SidebarAdmin />
        <div className='h-[91vh] w-full p-5 md:p-10 overflow-x-scroll'>

          {/* analytics section */}
          
          <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Visitors</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                            <p className="leading-relaxed">Blogs Read</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                            <p className="leading-relaxed">Videos</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Course</p>
                        </div>
                    </div>
                </div>
            </section>

          {/* manage offers popup section */}

        </div>
      </div>
    </>
  )
}

export default AdminHome