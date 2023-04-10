import React from 'react'

function Skeleton() {
    return (
        <>
            <div className='flex flex-col gap-3 h-32 w-48 md:h-36 md:w-56 lg:h-44 lg:w-72 xl:h-56 xl:w-96'>
                <div className='bg-slate-300 animate-pulse rounded-md h-full w-full'></div>
                <div className='flex flex-col gap-2'>
                    <div className='bg-slate-300 animate-pulse rounded-full py-1 w-full'></div>
                    <div className='bg-slate-300 animate-pulse rounded-full py-1 w-[50%]'></div>
                </div>
            </div>
            <div className='flex flex-col gap-3 h-32 w-48 md:h-36 md:w-56 lg:h-44 lg:w-72 xl:h-56 xl:w-96'>
                <div className='bg-slate-300 animate-pulse rounded-md h-full w-full'></div>
                <div className='flex flex-col gap-2'>
                    <div className='bg-slate-300 animate-pulse rounded-full py-1 w-full'></div>
                    <div className='bg-slate-300 animate-pulse rounded-full py-1 w-[50%]'></div>
                </div>
            </div>
            <div className='flex flex-col gap-3 h-32 w-48 md:h-36 md:w-56 lg:h-44 lg:w-72 xl:h-56 xl:w-96'>
                <div className='bg-slate-300 animate-pulse rounded-md h-full w-full'></div>
                <div className='flex flex-col gap-2'>
                    <div className='bg-slate-300 animate-pulse rounded-full py-1 w-full'></div>
                    <div className='bg-slate-300 animate-pulse rounded-full py-1 w-[50%]'></div>
                </div>
            </div>
        </>
    )
}

export default Skeleton