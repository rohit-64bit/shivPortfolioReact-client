import React from 'react'
import { useLocation } from 'react-router-dom';
import ContactFormRdWr from '../components/ContactFormRdWr';
import { useEffect } from 'react';
import { SERVER_URL } from './../services/helper';


function Read() {

    const location = useLocation();
    const { data } = location.state;

    let date = data.date;
    let timeStamp = new Date(date).getTime();
    let day = new Date(timeStamp).getDate();
    let month = new Date(timeStamp).toLocaleString('default', { month: 'short' });
    let year = new Date(timeStamp).getFullYear();

    const createReadAnalytics = async () => {
        const response = await fetch(`${SERVER_URL}/api/analytics/createBlogAnalytics`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ blogID: data._id })
        })
    }

    useEffect(() => {
        createReadAnalytics();
    }, [])


    return (
        <>
            <div className='bg-slate-100 py-10 px-5 md:py-20'>

                <div className='h-max w-full md:w-[55%] mx-auto  '>
                    <div className='w-full bg-white'>
                        <img src={data.imageUrl} alt="" className='w-full' />
                        <div className='p-5'>

                            <div className='text-lg md:text-3xl font-bold font-sans my-6 p-5 bg-blue-50 border-l-[6px] border-blue-900 text-blue-900'>{data.title}</div>
                            <div className='flex gap-5 text-xs my-5 p-2 text-slate-500'>
                                <span>By : <span className='text-slate-400'>{data.author}</span></span>
                                <span>Date : <span className='text-slate-400'>{day} {month} {year}</span></span>
                            </div>

                            <div className='text-justify font-medium md:text-lg whitespace-pre-wrap'>
                                {data.description}
                            </div>

                        </div>
                    </div>

                    <ContactFormRdWr />
                </div>
            </div>
        </>
    )
}

export default Read