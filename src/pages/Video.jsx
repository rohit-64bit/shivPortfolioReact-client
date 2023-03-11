import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../context/mainContext';
import videoimg from '../assets/images/undraw_video_files_fu10.svg';


function Video() {

    const context = useContext(mainContext);
    const { fetchVideo, videos } = context;

    useEffect(() => {
        fetchVideo();
    }, [])


    return (
        <>
            <div className='bg-slate-100 h-max p-8 md:p-20 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>RESOURCES FOR YOU</div>
                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-10 m-auto'>

                    {videos.length ? videos.map((data) => {
                        return (

                            <Link to='/watch' state={{ data: data }} key={data._id} className='flex flex-col gap-4'>
                                <img src={data.imageLink} alt="THUMBNAIL" />
                                <div>
                                    <div className='text-lg font-bold'>{data.title.length > 40 ? data.title.slice(0, 40) + "..." : data.title}</div>
                                    <div className='font-thin text-slate-500'>{data.authorName}</div>
                                </div>

                            </Link>

                        )
                    }) :
                        <div className='col-span-full flex flex-col gap-5 items-center'>
                            <img src={videoimg} alt="" className='m-auto w-[50%] md:w-[30%]' />
                            <div className='font-bold text-blue-900 text-3xl'>No Videos Found !</div>
                            <Link to="/" className='hover:bg-blue-900 hover:text-white text-blue-900 border-[3px] border-blue-900 px-10 py-3 m-auto text-center rounded-full h-max duration-300 ease-in-out font-bold'>RETURN TO HOME</Link>
                        </div>
                    }


                </div>
            </div>
        </>
    )
}

export default Video