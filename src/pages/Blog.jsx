import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../context/mainContext';
import blogimg from '../assets/images/undraw_post_re_mtr4.svg'
import Skeleton from '../components/Skeleton';


function Blog() {

    const context = useContext(mainContext)

    const { fetchBlog, blogs } = context;


    useEffect(() => {
        fetchBlog();
    }, [])

    return (
        <>
            <div className='bg-slate-100 h-max md:p-20 p-8 flex flex-col justify-center'>
                <div className='text-center text-xl md:text-2xl lg:text-4xl font-bold'>MY BLOGS</div>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-10 m-auto'>

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
                        <>
                            <Skeleton />
                        </>
                    }




                </div>

            </div>
        </>
    )
}

export default Blog