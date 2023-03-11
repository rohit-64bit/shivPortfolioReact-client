import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { SERVER_URL } from '../services/helper';

function Header() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                className="flex m-auto h-max w-max border-none focus:outline-none focus:border-none focus:ring-0"
            >
                <div className='p-28 text-slate-500 bg-white rounded-lg shadow-lg shadow-slate-700 font-medium  flex flex-col gap-5 text-lg text-center'>

                    <NavLink onClick={handleClose} className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} to="/">Home</NavLink>
                    <NavLink onClick={handleClose} className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} to="/about">About</NavLink>
                    <NavLink onClick={handleClose} className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} to="/portfolio">Portfolio</NavLink>
                    <NavLink onClick={handleClose} className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} to="/blog" >Blog</NavLink>
                    <NavLink onClick={handleClose} className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} to="/video" >Videos</NavLink>
                    <NavLink onClick={handleClose} className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} to="/contact" >Contact</NavLink>
                    {/* <NavLink onClick={handleClose} className={({ isActive }) => (isActive ? 'text-white bg-blue-900  px-8 py-1 rounded-sm duration-300' : ' text-black bg-slate-200 px-8 py-1 rounded-sm hover:bg-slate-300 duration-300')} to="/learn" >Learn</NavLink> */}

                </div>
            </Modal>

            <div className='px-4 py-5 flex lg:hidden justify-between w-full sticky top-0 shadow-lg z-50 bg-white'>
                <Link to='/' className='my-auto '>
                    <img src={logo} alt="" className='w-16 ' />
                </Link>
                <div onClick={handleOpen} className='flex flex-col gap-[5px] w-6 my-auto '>
                    <div className='w-full border-t-4 border-blue-900'></div>
                    <div className='w-full border-t-4 border-blue-900'></div>
                    <div className='w-full border-t-4 border-blue-900'></div>
                </div>
            </div>
            <div className='hidden lg:flex justify-between px-24 w-full sticky top-0 shadow-lg z-50 bg-white'>
                <Link to='/' className='my-auto'>
                    <img src={logo} alt="" className='w-20' />
                </Link>

                <div className='py-5 text-slate-500 font-medium text-base flex items-center gap-5 text-center'>

                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-900 font-bold duration-300' : 'hover:text-blue-900 duration-300')} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-900 font-bold duration-300' : 'hover:text-blue-900 duration-300')} to="/about">About</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-900 font-bold duration-300' : 'hover:text-blue-900 duration-300')} to="/portfolio">Portfolio</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-900 font-bold duration-300' : 'hover:text-blue-900 duration-300')} to="/blog" >Blog</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-900 font-bold duration-300' : 'hover:text-blue-900 duration-300')} to="/video" >Videos</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-900 font-bold duration-300' : 'hover:text-blue-900 duration-300')} to="/contact" >Contact</NavLink>

                    {/* <NavLink className={({ isActive }) => (isActive ? 'text-white bg-blue-900  px-8 py-1 rounded-sm duration-300' : ' text-black bg-slate-200 px-8 py-1 rounded-sm hover:bg-slate-300 duration-300')} to="/learn" >Learn</NavLink> */}
                </div>
            </div>
        </>
    )
}

export default Header