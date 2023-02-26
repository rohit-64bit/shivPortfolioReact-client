import React, { useState } from 'react'
import { SERVER_URL } from './../services/helper';

function ContactFormRdWr() {
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        body: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${SERVER_URL}/api/contact/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        

        setData({
            name: "",
            email: "",
            subject: "",
            body: ""
        })
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className='w-full p-5 mt-10 bg-white'>
                <form method='POST' onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <input onChange={onChange} name="name" value={data.name} type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='NAME' required/>

                        <input onChange={onChange} type="email" name='email' value={data.email} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='EMAIL' required/>
                    </div>
                    <input onChange={onChange} type="text" name='subject' value={data.subject} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='SUGGESTIONS' required/>
                    <textarea onChange={onChange} name="body" value={data.body} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" cols="30" rows="6" placeholder='YOUR REVIEW'></textarea>
                    <button className='w-full bg-blue-900 hover:bg-sky-500 rounded-full py-4 font-medium text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' type='submit'>SEND MESSAGE</button>
                </form>
            </div>
        </>
    )
}

export default ContactFormRdWr