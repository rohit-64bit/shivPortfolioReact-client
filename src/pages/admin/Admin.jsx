import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../services/helper';
import mainContext from './../../context/mainContext';

function Admin() {

    const context = useContext(mainContext);
    const { setNotification } = context;

    const [loadingButton, setLoadingButton] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("adminToken")) {
            navigate("/admin/home")
        }
    }, [])


    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleAdminLogin = async (e) => {

        e.preventDefault();
        setLoadingButton(true)


        const response = await fetch(`${SERVER_URL}/api/auth/admin/authadmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json()

        if (json.authtoken != undefined) {

            setNotification({ message: "Login Successfull", type: 'success', status: 'true' })
            localStorage.setItem("adminToken", json.authtoken)
            navigate("/admin/home")

        } else {
            setNotification({ status: "true", message: "Invalid Credentials", type: "error" })
            setLoadingButton(false)
        }
    }

    let onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='py-24 bg-slate-200'>
                <div className='text-center text-lg md:text-2xl font-semibold p-5'>ADMIN LOGIN</div>
                <form method='POST' className='w-full md:w-[30%] flex flex-col mx-auto justify-items-center gap-5 p-5'>

                    <input name='email' type="email" onChange={onChange} value={credentials.email} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='ADMIN USERNAME' required />

                    <input name='password' type="password" onChange={onChange} value={credentials.password} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono"
                        placeholder='PASSWORD' required />

                    <button type='submit' onClick={handleAdminLogin} className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400'>{loadingButton ? "loading..." : "LOGIN"}</button>
                    <p>For password recovery contact developer.</p>
                </form>
            </div>
        </>
    )
}

export default Admin