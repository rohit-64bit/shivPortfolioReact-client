import React, { useState } from 'react'
import { SERVER_URL } from './../services/helper';

function ContactForm() {

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        body: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${SERVER_URL}/api/contact/contact`, {
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
            <div className="h-max md:h-[90vh] flex flex-col md:items-center gap-5 md:gap-0 md:flex-row p-8 md:p-20 lg:p-28 ">
                <div className='md:mx-auto md:w-1/2'>
                    <div className='font-bold text-2xl md:text-3xl text-blue-900'>GET IN TOUCH</div>
                    <div className='font-thin md:mt-5 text-lg font-sans'>Moynadanga, Hooghly <br />
                        West Bengal, India - 712102<br />
                        +91 - 8910045833<br />
                        m.shibdas22@gmail.com</div>
                </div>

                <div className='md:m-auto md:w-1/2'>
                    <form method='POST' onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <input onChange={onChange} name='name' value={data.name} type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='YOUR NAME' required />

                            <input onChange={onChange} type="email" name='email' value={data.email} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='YOUR EMAIL' required />
                        </div>
                        <input onChange={onChange} type="text" name='subject' value={data.subject} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='SUBJECT' required />
                        <textarea onChange={onChange} type='text' name='body' value={data.body} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" id="" cols="30" rows="6" placeholder='MESSAGE' required></textarea>
                        <button className='w-full bg-blue-900 hover:bg-sky-500 rounded-full py-4 font-medium text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' type='submit'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm