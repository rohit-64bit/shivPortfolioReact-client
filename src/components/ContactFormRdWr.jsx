import React from 'react'

function ContactFormRdWr() {
    return (
        <>
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
        </>
    )
}

export default ContactFormRdWr