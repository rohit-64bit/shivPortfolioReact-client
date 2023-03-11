import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../context/mainContext';
import blogimg from '../assets/images/undraw_post_re_mtr4.svg'


function Blog() {

    const context = useContext(mainContext)

    const { fetchBlog, blogs } = context;


    useEffect(() => {
        fetchBlog();
    }, [])

    return (
        <>
            <div className='bg-slate-100 h-max md:p-20 p-8 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>MY BLOGS</div>
                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 m-auto'>

                    {blogs.length ?
                        blogs.map((data) => {
                            return (
                                <Link key={data._id} state={{ data: data }} to='/read' className='flex flex-col gap-4 w-auto h-auto'>
                                    <img src={data.imageUrl} alt="" className='w-[640px] hover:shadow-lg shadow-slate-400 transition-all ease-in-out duration-300' />
                                    <div>
                                        <div className='text-lg font-bold w-full'>{data.title}</div>
                                        {/* <div className='font-thin text-xs text-slate-500'>{data.author}</div> */}
                                    </div>
                                </Link>
                            )
                        })
                        :
                        <div className='col-span-full flex flex-col gap-5 items-center'>
                            <img src={blogimg} alt="" className='m-auto w-[50%] md:w-[30%]' />
                            <div className='font-bold text-blue-900 text-3xl'>No Blogs Found !</div>
                            <Link to="/" className='hover:bg-blue-900 hover:text-white text-blue-900 border-[3px] border-blue-900 px-10 py-3 m-auto text-center rounded-full h-max duration-300 ease-in-out font-bold'>RETURN TO HOME</Link>
                        </div>
                    }




                </div>

            </div>
        </>
    )
}

export default Blog