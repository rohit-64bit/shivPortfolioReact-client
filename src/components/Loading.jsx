import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function Loading() {
    return (
        <>
            <div className='h-[92vh] w-full flex items-center justify-center'>
                <CircularProgress color="inherit" />
            </div>
        </>
    )
}

export default Loading