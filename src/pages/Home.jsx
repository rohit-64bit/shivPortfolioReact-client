import React, { useContext, useEffect, useState } from 'react'
import TypewriterComponent from 'typewriter-effect';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import shibDas from '../assets/img/shibdas.jpg';
import { Link } from 'react-router-dom';
import blogPost from '../assets/img/blog-post-1.jpg'
import ContactForm from '../components/ContactForm';
import mainContext from '../context/mainContext';


function Home() {

    const context = useContext(mainContext)

    const { fetchBlog, blogs, fetchVideo, videos } = context;

    const newBlog = blogs.slice(0, 3);
    const newVideo = videos.slice(0, 3);

    useEffect(() => {
        fetchVideo();
        fetchBlog();
    }, [])


    return (
        <>

            <div className='p-8 md:p-10 lg:p-28 h-[91vh] bg-blend-darken bg-blue-900 text-lg md:text-2xl lg:text-4xl font-extrabold text-white flex'>
                <div className='flex flex-col md:gap-3 my-auto h-max'>
                    <div className='text-blue-300'>HELLO !</div>
                    <div>
                        <div className='flex'>
                            I'M
                            <span className='ml-1 md:ml-2'>
                                <TypewriterComponent
                                    onInit={(typewriter) => {

                                        typewriter

                                            .typeString("SHIBDAS BHATTACHARYA")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("A LECTURER")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("A ML DEVELOPER")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("SHIBDAS BHATTACHARYA")
                                            .start()
                                    }}
                                />

                            </span>
                        </div>
                    </div>
                    <div className='text-sm md:text-base tracking-widest font-thin md:font-medium'>Lecturer | Machine Learning Consultant</div>
                    <div className='flex gap-1 md:gap-5 mt-1 md:mt-2 text-white'>
                        <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><FacebookIcon /></a>
                        <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><TwitterIcon /></a>
                        <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><InstagramIcon /></a>
                        <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
            <div className='h-max bg-slate-100 flex flex-col gap-5 lg:gap-0 md:flex-row justify-between p-8 md:p-10 '>
                <div className='m-auto'>
                    <img src={shibDas} alt="" className='shadow-md md:shadow-lg shadow-slate-600' />
                </div>
                <div className='m-auto lg:w-[60%]'>
                    <p className='text-2xl lg:text-3xl font-serif text-slate-400'>Enthusiastic educator and Machine Learning developer.</p>
                    <p className='text-slate-400 text-sm lg:text-lg text-justify lg:w-[90%] font-extralight mt-2 md:mt-3'>Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Motivated to learn new skills, grow and excel in the field of engineering.</p>
                </div>
            </div>

            <div className='bg-white h-max md:p-20 p-8 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>TALKS ABOUT</div>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-10 m-auto'>
                </div>
            </div>

            <div className='bg-slate-100 h-max md:p-20 p-8 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>MY BLOGS</div>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-10 m-auto'>

                    {newBlog.map((data) => {
                        return (
                            <Link key={data._id} to='/read' state={{ data: data }} className='flex flex-col gap-4'>
                                <img src={data.imageUrl} alt="" className='w-[640px] hover:shadow-lg shadow-slate-400 transition-all ease-in-out duration-300' />
                                <div>
                                    <div className='text-lg font-bold'>{data.title}</div>
                                    <div className='font-thin text-slate-300'>{data.description?.slice(0, 30)}...</div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
                <div className='mt-10 flex justify-end'>
                    <Link to='/blog' className='px-10 md:px-14 text-center py-3 text-lg font-medium text-white rounded-full bg-blue-900 hover:bg-sky-500 transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400 '>SEE MORE</Link>
                </div>

            </div>

            <div className='bg-slate-100 h-max p-8 md:p-20 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>MY VIDEOS</div>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-10 m-auto'>

                    {newVideo.map((data) => {
                        return (
                            <Link key={data._id} state={{ data: data }} to='/watch' className='flex flex-col gap-4'>

                                <img src={data.imageLink} alt="" />

                                <div>
                                    <div className='text-lg font-bold'>{data.title}</div>
                                    <div className='font-thin text-slate-300'>{data.authorName}</div>
                                </div>

                            </Link>
                        )
                    })}


                </div>
                <div className='mt-10 flex justify-end'>
                    <Link to='/video' className='px-10 md:px-14 text-center py-3 text-lg font-medium text-white rounded-full bg-blue-900 hover:bg-sky-500 transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400 '>SEE MORE</Link>
                </div>
            </div>


        </>
    )
}

export default Home