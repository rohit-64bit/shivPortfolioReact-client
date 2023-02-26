import React, { useContext, useEffect, useState } from 'react'
import SidebarAdmin from '../../components/SidebarAdmin'
import { CopyAll } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import mainContext from '../../context/mainContext'
import { DB_URL, SERVER_URL } from '../../services/helper'
import copy from 'copy-to-clipboard'
import { useNavigate } from 'react-router-dom'

function AdminManageAccount() {

    let navigate = useNavigate();

    const context = useContext(mainContext)
    const { setNotification } = context;

    const [admin, setAdmin] = useState({})
    const [adminName, setAdminName] = useState("")

    // update password variables
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [updatedPassword, setUpdatedPassword] = useState("")
    const [passMatch, setPassMatch] = useState(false)


    const { _id, email } = admin;

    const handleUpdatePassword = async (e) => {

        e.preventDefault()
        
        if (newPassword != updatedPassword != "") {
            setPassMatch(true)
        } else {

            const response = await fetch(`${SERVER_URL}/api/auth/admin/update/password/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem("adminToken")
                },
                body: JSON.stringify({ "email": email, "password": password, "newPassword": updatedPassword })
            })

            const json = await response.json()

            if (json.success) {
                setNotification({ status: "true", message: "Password Updated Successfully Login again", type: "success" })
                localStorage.removeItem("adminToken")
                navigate("/admin")
            } else {
                setNotification({ status: "true", message: "Something went wrong", type: "error" })
            }


        }
    }

    const fetchAdmin = async () => {
        const response = await fetch(`${SERVER_URL}/api/auth/admin/getadmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("adminToken")
            }
        })

        const json = await response.json()

        setAdmin(json)
        console.log("fetch admin called")
    }

    const updateAdminName = async (e) => {
        e.preventDefault()
        const response = await fetch(`${SERVER_URL}/api/auth/admin/update/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("adminToken")
            },
            body: JSON.stringify({ adminName: adminName })
        })

        const json = await response.json()

        if (json.success) {
            fetchAdmin()
            setNotification({ status: "true", message: "Admin Name Updated", type: "success" })
            setAdminName("")
        } else {
            setNotification({ status: "true", message: "Some error occured", type: "error" })
        }

    }

    const copyID = () => {
        copy(admin._id)
        setNotification({ status: "true", message: "ID Copied to clipboard", type: "success" })

    }
    const copyServer = () => {
        copy(SERVER_URL)
        setNotification({ status: "true", message: "Server URL Copied to clipboard", type: "success" })

    }
    const copyDB = () => {
        copy(DB_URL)
        setNotification({ status: "true", message: "DB URL Copied to clipboard", type: "success" })
    }

    useEffect(() => {
        fetchAdmin();
    }, [])


    return (
        <>
            <div className='flex h-full w-full'>
                <SidebarAdmin />
                <div className='h-[91vh] overflow-y-auto w-full space-y-7 p-5 md:p-10'>
                    <div className='flex flex-col items-center w-full gap-10'>

                        <div className='flex flex-col lg:flex-row gap-10 w-full h-full'>



                            <div className='flex flex-col xl:items-center xl:flex-row gap-10 p-5 md:p-10 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-lg shadow-lg border w-full'>
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='rounded-full w-32 h-32' />
                                <div className='flex flex-col justify-center' >
                                    <div className='text-3xl font-bold text-blue-900'>{admin.adminName?.toUpperCase()}</div>
                                    <div className='text-xl text-black font-semibold'>{admin.email}</div>
                                    <div className='text-xs mt-3 opacity-60'>You have the full access to modify the site data</div>
                                </div>

                            </div>
                            <div className='flex flex-col p-5 md:p-10 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-lg shadow-lg border w-full'>
                                <div className='text-xl font-semibold mb-2'>BASIC INFO</div>
                                <div className='flex items-center gap-1 md:gap-2 text-xs md:text-lg '>
                                    <div className='font-medium'>Admin ID :</div>
                                    <div className='font-bold select-none flex '><div className='blur-sm'>{admin._id}</div><Tooltip title="Copy Admin ID">
                                        <IconButton className='blur-0' onClick={copyID}>
                                            <CopyAll />
                                        </IconButton>
                                    </Tooltip></div>
                                </div>

                                <div className='flex items-center gap-1 md:gap-2 text-xs md:text-lg'>
                                    <div className='font-medium'>Server URL :</div>
                                    <div className='font-bold select-none flex '><div className='blur-sm'>{SERVER_URL}</div><Tooltip title="Copy Server URL">
                                        <IconButton className='blur-0' onClick={copyServer}>
                                            <CopyAll />
                                        </IconButton>
                                    </Tooltip></div>
                                </div>

                                <div className='flex items-center gap-1 md:gap-2 text-xs md:text-lg'>
                                    <div className='font-medium'>DB URL :</div>
                                    <div className='font-bold select-none flex '><div className='blur-sm'>{DB_URL}</div><Tooltip title="Copy DB URL">
                                        <IconButton className='blur-0' onClick={copyDB} >
                                            <CopyAll />
                                        </IconButton>
                                    </Tooltip></div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-10 w-full h-full'>


                            <div className='p-5 bg-slate-100 rounded-lg shadow-lg border w-full '>
                                <form method='POST' onSubmit={updateAdminName} className='flex flex-col gap-5'>
                                    <div className='font-semibold text-center opacity-70'>UPDATE PROFILE</div>
                                    <input name='adminName' value={adminName} type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono"
                                        placeholder='ADMIN NAME' onChange={e => setAdminName(e.target.value)} required />

                                    <button className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' type='submit'>UPDATE</button>
                                </form>
                            </div>
                            <div className='p-5 bg-slate-100 rounded-lg shadow-lg border w-full '>

                                <form method='POST' onSubmit={handleUpdatePassword} className='flex flex-col gap-5'>

                                    <div className='font-semibold text-center opacity-70'>UPDATE PASSWORD</div>

                                    <input name='password' type="password" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono"
                                        placeholder='ENTER CURRENT PASSWORD' onChange={e => setPassword(e.target.value)} required />

                                    <input name='newPassword' onChange={e => setNewPassword(e.target.value)} type="password" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono"
                                        placeholder='NEW PASSWORD' required />

                                    <input name='confirmPassword' onChange={e => setUpdatedPassword(e.target.value)} type="password" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono"
                                        placeholder='REPEAT NEW PASSWORD' required />

                                    {passMatch ? <p className='text-red-500 font-medium animate-pulse duration-300'>Password match failed !</p> : ""}

                                    <button className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' >UPDATE PASSWORD</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminManageAccount