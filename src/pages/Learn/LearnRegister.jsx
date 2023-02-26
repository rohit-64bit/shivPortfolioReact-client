import React from 'react'
import bgsignup from '../../assets/bg/bgsignup.svg'
import { Link } from 'react-router-dom';

const LearnRegister = () => {

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='flex bg-slate-100'>
                <div className='w-[60%] flex'>
                    <img src={bgsignup} alt="" className='h-96 m-auto' />
                </div>
                <div className='w-[40%]  p-20 flex flex-col '>
                    <p className='font-bold text-lg'>Signing Up</p>
                    <p className='text-sm mt-1'>
                        <Link to="/signin" className='hover:underline text-blue-700'>Sign In if you already have an account.</Link>
                    </p>
                    <form method='POST' onSubmit={handleRegister} className='my-4 flex flex-col gap-3'>
                        <p className='text-xs ml-7 mt-2 text-slate-500'>Full Name</p>

                        <input
                            type="text"
                            name="name"
                            className='text-base font-medium px-7 py-4 rounded-full shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            required
                        />


                        <p className='text-xs ml-7 mt-2 text-slate-500'>E-mail ID</p>

                        <input
                            type="email"
                            name="email"
                            className='text-base font-medium px-7 py-4 rounded-full shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            required
                        />

                        <p className='text-xs ml-7 mt-2 text-slate-500'>Contact No.</p>

                        <input
                            type="text"
                            name="contact"
                            className='text-base font-medium px-7 py-4 rounded-full shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            required
                        />

                        <p className='text-xs ml-7 mt-2 text-slate-500'>DOB</p>

                        <input
                            type="date"
                            name="dob"
                            className='text-base font-medium px-7 py-4 rounded-full shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            required
                        />

                        <p className='text-xs ml-7 mt-2 text-slate-500'>Password</p>

                        <input
                            type="password"
                            name="password"
                            className='text-base font-black px-7 py-4 rounded-full shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            required
                        />
                        <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-300 py-4 rounded-full text-center text-white font-medium hover:shadow-lg mt-5 text-lg ' type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LearnRegister