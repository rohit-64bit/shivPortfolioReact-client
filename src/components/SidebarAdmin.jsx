import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { Modal } from '@mui/material';

function SidebarAdmin() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("adminToken");
        navigate("/admin")
    }
    return (
        <>
            <div className='md:w-[18rem] h-[91vh] flex flex-col gap-4 bg-slate-100 p-2'>
                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-900 shadow-lg text-white font-medium md:px-5 md:py-2 p-2 rounded-md w-full' : 'bg-white md:px-5 md:py-2 p-2 rounded-md hover:bg-blue-200 hover:shadow-lg transition-all ease-in-out duration-300 text-slate-500 hover:text-slate-700 w-full')} to="/admin/home"><AdminPanelSettingsIcon /><span className='hidden md:inline my-auto'> Admin Home</span></NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-900 shadow-lg text-white font-medium md:px-5 md:py-2 p-2 rounded-md' : 'bg-white md:px-5 md:py-2 p-2 rounded-md hover:bg-blue-200 hover:shadow-lg transition-all ease-in-out duration-300 text-slate-500 hover:text-slate-700')} to="/admin/blogs"><FileCopyIcon /><span className='hidden md:inline my-auto'> Manage Blogs</span></NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-900 shadow-lg text-white font-medium md:px-5 md:py-2 p-2 rounded-md' : 'bg-white md:px-5 md:py-2 p-2 rounded-md hover:bg-blue-200 hover:shadow-lg transition-all ease-in-out duration-300 text-slate-500 hover:text-slate-700')} to="/admin/videos" ><VideoSettingsIcon /><span className='hidden md:inline my-auto'> Manage Videos</span></NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-900 shadow-lg text-white font-medium md:px-5 md:py-2 p-2 rounded-md' : 'bg-white md:px-5 md:py-2 p-2 rounded-md hover:bg-blue-200 hover:shadow-lg transition-all ease-in-out duration-300 text-slate-500 hover:text-slate-700')} to="/admin/portfolio" ><WorkIcon /><span className='hidden md:inline my-auto'> Manage Portfolio</span></NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-900 shadow-lg text-white font-medium md:px-5 md:py-2 p-2 rounded-md' : 'bg-white md:px-5 md:py-2 p-2 rounded-md hover:bg-blue-200 hover:shadow-lg transition-all ease-in-out duration-300 text-slate-500 hover:text-slate-700')} to="/admin/contact" ><ContactMailIcon /><span className='hidden md:inline my-auto'> Contact Request</span></NavLink>


                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-900 shadow-lg text-white font-medium md:px-5 md:py-2 p-2 rounded-md' : 'bg-white md:px-5 md:py-2 p-2 rounded-md hover:bg-blue-200 hover:shadow-lg transition-all ease-in-out duration-300 text-slate-500 hover:text-slate-700')} to="/admin/settings" ><ManageAccountsIcon /><span className='hidden md:inline my-auto'> Account Settings</span></NavLink>


                <button className='hover:bg-blue-900 hover:shadow-lg text-start bg-white text-slate-500 hover:text-white font-medium md:px-5 md:py-2 p-2 rounded-md transition-all ease-in-out duration-300'
                    onClick={handleOpen}
                >
                    <LogoutIcon /><span className='hidden md:inline my-auto'> Logout</span>
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="flex justify-center items-center"
                >
                    <div className='bg-white p-10 w-auto h-max space-y-5 rounded-md shadow-lg'>
                        <div className='font-bold'>Confirm Logout</div>
                        <div className='flex gap-2'>
                            <button onClick={handleLogout} className='bg-red-600 px-4 w-full py-2 hover:bg-red-800 text-white font-semibold transition-all ease-in-out duration-300 rounded hover:shadow-md'>Logout</button>
                            <button onClick={handleClose} className='bg-blue-600 px-4 w-full py-2 hover:bg-blue-900 text-white font-semibold transition-all ease-in-out duration-300 rounded hover:shadow-md'>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default SidebarAdmin