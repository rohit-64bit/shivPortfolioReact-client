import { Alert, Snackbar } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import mainContext from '../context/mainContext';

function Notification() {

    const context = useContext(mainContext)
    const { notification, setNotification } = context;

    const [nOpen, setNOpen] = useState(false);

    useEffect(() => {
        if (notification?.status === "true") {
            setNOpen(true)
        }
    }, [notification])


    const handleNClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNOpen(false);
    };

    return (
        <>
            <Snackbar open={nOpen} autoHideDuration={4000} onClose={handleNClose}>
                <Alert onClose={handleNClose} severity={notification?.type} variant="filled" sx={{ width: '100%' }}>
                    {notification?.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Notification