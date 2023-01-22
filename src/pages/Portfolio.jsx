import React from 'react'
import { Link } from 'react-router-dom'
import blogPost from '../assets/img/blog-post-1.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';



function Details(props) {

    return (
        <>
            <div className='flex flex-col gap-4'>
                
                    <img src={blogPost} alt="" className='w-[640px] hover:shadow-lg shadow-slate-400 transition-all ease-in-out duration-300' />
                
                <div className='flex gap-5 '> <a href="" className='text-slate-600 hover:text-slate-800 transition-all ease-in-out duration-300' target="_blank"><GitHubIcon /></a> <a href="" className='text-slate-600 hover:text-slate-800 transition-all ease-in-out duration-300' target="_blank"><LinkIcon /></a> </div>
                <div>
                    <div className='text-lg font-bold'>Project Title</div>
                    <div className='font-thin text-slate-500'>Type of the project</div>
                </div>
            </div>

        </>
    )
}


function Portfolio() {


    return (
        <>

            <div className='bg-slate-100 h-max md:p-20 p-8 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>MY PORTFOLIO</div>
                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 m-auto'>




                    <Details />



                </div>

            </div>
        </>
    )
}

export default Portfolio