import { Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SidebarAdmin from '../../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import { SERVER_URL } from '../../services/helper';
import mainContext from '../../context/mainContext';


function ManageVideo(props) {

    const context = useContext(mainContext);
    const { fetchVideo } = context;

    const { id, title } = props;
    const deleteVideo = async () => {
        
        const response = fetch(`${SERVER_URL}/api/video/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("adminToken")
            }
        });
        const json = await response.json()
        fetchVideo()

        // window.location.reload()
        // console.log(json);

    }

    return (
        <>
            <div className='bg-slate-100 hover:bg-slate-200 transition-all ease-in-out duration-300 hover:shadow-lg border-2 p-2 lg:p-5 xl:w-96 md:w-52 h-max mx-auto space-y-2 rounded-lg'>
                <img src={props.imageLink} alt="" className='w-full md:w-full rounded' />
                <div>
                    <div className='font-bold text-lg'>{title.length > 30 ? title.slice(0, 30) + "..." : title}</div>
                    <div className='text-slate-500 font-medium'>{props.authorName}</div>
                </div>
                <button onClick={deleteVideo} className='py-2 px-3  bg-red-500 text-white hover:bg-red-700 transition-all ease-in-out duration-300 rounded-md text-center flex mx-auto'><DeleteIcon /> Delete</button>
            </div>
        </>
    )
}


function AdminVideo() {

    const [url, setUrl] = useState("")

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const context = useContext(mainContext);
    const { fetchVideo, videos } = context;


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${SERVER_URL}/api/video/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("adminToken")
            },
            body: JSON.stringify({ url })
        });
        const json = await response.json()
        fetchVideo();
        setOpen(false)
        setUrl("");
    }


    useEffect(() => {

        fetchVideo();
        console.log(videos);

    }, [])


    function onChange(e) {
        setUrl(e.target.value)
    }

    return (
        <>
            <div className='flex h-full'>
                <SidebarAdmin />
                <div className='h-[91vh] w-full space-y-7 p-5'>
                    <button onClick={handleOpen} className='p-2 bg-blue-700 hover:bg-blue-900 transition-all ease-in-out duration-300 text-white font-semibold w-full'>ADD VIDEO LINK</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        className="flex items-center justify-center"
                    >
                        <div className='p-10 bg-white rounded-lg'>
                            <form method='POST' onSubmit={handleSubmit} className='space-y-7'>
                                <input type="url" name='ytlink' onChange={onChange} value={url} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='BLOG TITLE' required />
                                <button className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' type="submit">CREATE BLOG</button>
                            </form>
                        </div>
                    </Modal>
                    <div className='h-[76vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>

                        {videos.map((data) => {
                            return (
                                <ManageVideo key={data._id} id={data._id} imageLink={data.imageLink} title={data.title} authorName={data.authorName} />
                            )
                        })}



                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminVideo