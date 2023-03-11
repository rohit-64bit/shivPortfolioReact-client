import React from 'react'
import notfound from '../assets/images/404.svg'
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <>
            <div className='h-[92vh] w-full flex flex-col'>
                <img src={notfound} alt="" className='m-auto w-[50%] md:w-[20%]' />
                <Link to="/" className='hover:bg-blue-900 hover:text-white text-blue-900 border-[3px] border-blue-900 px-10 py-3 m-auto text-center rounded-full h-max duration-300 ease-in-out font-bold'>RETURN TO HOME</Link>
            </div>
        </>
    )
}

export default NotFound