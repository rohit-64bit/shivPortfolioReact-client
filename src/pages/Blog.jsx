import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import blogPost from '../assets/img/blog-post-1.jpg'
import mainContext from '../context/mainContext';

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

                    {blogs.map((data) => {
                        return (
                            <Link key={data._id} state={{ data: data }} to='/read' className='flex flex-col gap-4'>
                                <img src={data.imageUrl} alt="" className='w-[640px] hover:shadow-lg shadow-slate-400 transition-all ease-in-out duration-300' />
                                <div>
                                    <div className='text-lg font-bold'>{data.title}</div>
                                    <div className='font-thin text-slate-300'>Description of the blog lorem ipsum</div>
                                </div>
                            </Link>
                        )
                    })}


                </div>

            </div>
        </>
    )
}

export default Blog