import React, { useContext } from 'react'
import CountUp from 'react-countup';
import { useEffect } from 'react';
import mainContext from '../context/mainContext';


function AnalyticsDock() {



    const context = useContext(mainContext)

    const { fetchBlog, blogs, fetchVideo, videos, fetchVisitAnalytics, visitAnalytics, fetchReadAnalytics, readAnalytics, fetchWatchAnalytics, watchAnalytics } = context;

    useEffect(() => {
        fetchVideo();
        fetchBlog();

        fetchVisitAnalytics();
        fetchReadAnalytics();
        fetchWatchAnalytics();
    }, [])


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    start={0}
                                    end={visitAnalytics?.length}
                                    duration={2}
                                    separator=" "
                                    decimal=","
                                    enableScrollSpy
                                    className='duration-300'
                                />
                            </h2>
                            <p className="leading-relaxed">Visitors</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    start={0}
                                    end={blogs?.length}
                                    duration={2}
                                    separator=" "
                                    decimal=","
                                    enableScrollSpy
                                    className='duration-300'
                                />
                            </h2>
                            <p className="leading-relaxed">Blogs</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    start={0}
                                    end={readAnalytics?.length}
                                    duration={2}
                                    separator=" "
                                    decimal=","
                                    enableScrollSpy
                                    className='duration-300'
                                />
                            </h2>
                            <p className="leading-relaxed">Blogs Read</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    start={0}
                                    end={videos?.length}
                                    duration={2}
                                    separator=" "
                                    decimal=","
                                    enableScrollSpy
                                    className='duration-300'
                                />
                            </h2>
                            <p className="leading-relaxed">Videos</p>
                        </div>
                        
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    start={0}
                                    end={watchAnalytics?.length}
                                    duration={2}
                                    separator=" "
                                    decimal=","
                                    enableScrollSpy
                                    className='duration-300'
                                />
                            </h2>
                            <p className="leading-relaxed">Videos Watched</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AnalyticsDock