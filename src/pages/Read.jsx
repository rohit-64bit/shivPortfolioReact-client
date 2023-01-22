import React from 'react'
import { useLocation } from 'react-router-dom';


function Read() {

    const location = useLocation();
    const { data } = location.state;

    let date = data.date;
    let timeStamp = new Date(date).getTime();
    let day = new Date(timeStamp).getDate();
    let month = new Date(timeStamp).toLocaleString('default', { month: 'short' });
    let year = new Date(timeStamp).getFullYear();

    return (
        <>
            <div className='bg-slate-100 py-10 px-5 md:py-20'>


                <div className='h-max w-full md:w-[55%] mx-auto  '>
                    <div className='w-full bg-white'>
                        <img src={data.imageUrl} alt="" className='w-full' />
                        <div className='p-5'>

                            <div className='text-3xl font-bold font-sans my-6 p-5 bg-blue-50 border-l-[6px] border-blue-900 text-blue-900'>{data.title}</div>
                            <div className='flex gap-5 text-xs my-5 p-2 text-slate-500'>
                                <span>By : <span className='text-slate-400'>Shibdas Bhattacharya</span></span>
                                <span>Date : <span className='text-slate-400'>{day} {month} {year}</span></span>
                            </div>

                            <div className='text-justify font-medium md:text-lg text-slate-800'>
                                {data.description}
                            </div>

                        </div>
                    </div>
                    <div className='w-full p-5 mt-10 bg-white'>
                        <form action="" className='flex flex-col gap-5'>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <input type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='NAME' />

                                <input type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='EMAIL' />
                            </div>
                            <input type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='SUGGESTIONS' />
                            <textarea className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" name="" id="" cols="30" rows="6" placeholder='YOUR REVIEW'></textarea>
                            <button className='w-full bg-blue-900 hover:bg-sky-500 rounded-full py-4 font-medium text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read