import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Popup = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // useEffect(() => {
    //     handleOpen()
    // }, [])


    return (
        <>
            {/* <button onClick={handleOpen}>OPEN</button> */}
            <Modal
                open={open}
                onClose={handleClose}
                className="flex justify-center items-center"
                sx={{ border: 0, outline: 0 }}
            >

                <div className='bg-white p-10'>
                    <button></button>
                </div>

            </Modal>
        </>
    )
}

export default Popup