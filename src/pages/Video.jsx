import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../context/mainContext';

function Video() {

    const context = useContext(mainContext);
    const { fetchVideo, videos } = context;

    useEffect(() => {
        fetchVideo();
    }, [])


    return (
        <>
            <div className='bg-slate-100 h-max p-8 md:p-20 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>MY VIDEOS</div>
                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-10 m-auto'>

                    {videos.map((data) => {
                        return (

                            <Link to='/watch' state={{ data: data }} key={data._id} className='flex flex-col gap-4'>
                                    <img src={data.imageLink} alt="THUMBNAIL" />
                                <div>
                                    <div className='text-lg font-bold'>{data.title.length > 40 ? data.title.slice(0, 40) + "..." : data.title}</div>
                                    <div className='font-thin text-slate-500'>{data.authorName}</div>
                                </div>

                            </Link>

                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default Video