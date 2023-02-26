import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import SidebarAdmin from '../../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { SERVER_URL } from '../../services/helper';
import mainContext from '../../context/mainContext';
import CloseIcon from '@mui/icons-material/Close';
import { alignProperty } from '@mui/material/styles/cssUtils';


function ManagePortfolio(props) {

  const context = useContext(mainContext);
  const { setNotification, fetchPortfolio } = context;

  const [data, setData] = useState({
    title: props.title,
    type: props.type,
    github: props.github,
    hostedLink: props.hostedLink,
    imageURL: props.imageURL
  });

  const [eOpen, setEOpen] = useState(false);
  const handleEOpen = () => setEOpen(true);
  const handleEClose = () => setEOpen(false);


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let date = props.date;
  let timeStamp = new Date(date).getTime();
  let day = new Date(timeStamp).getDate();
  let month = new Date(timeStamp).toLocaleString('default', { month: 'short' });
  let year = new Date(timeStamp).getFullYear();

  const { id } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${SERVER_URL}/api/portfolio/update/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("adminToken")
      },
      body: JSON.stringify(data)
    })
    setNotification({ status: "true", message: "Portfolio updated", type: "info" })
    handleEClose();
    fetchPortfolio();
  }

  const handleDelete = async () => {
    const response = await fetch(`${SERVER_URL}/api/portfolio/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("adminToken")
      }
    })
    fetchPortfolio();
    setNotification({ status: "true", message: "Portfolio Deleted", type: "info" });
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <>

      <div className='w-full border bg-slate-100 h-max hover:bg-slate-200 hover:shadow-lg p-2 md:p-5 transition-all ease-in-out duration-300 rounded-lg'>
        <div className='flex justify-between flex-col
        sm:flex-row gap-5 w-full'>
          <div className='font-bold text-base md:text-lg my-auto'>
            {props.title?.length < 25 ? props.title.toUpperCase() : props.title?.slice(0, 25).toUpperCase() + "..."}
            <div>
              <div className='font-normal text-xs md:text-sm text-slate-500'>
                Author : <span>{props.author}</span>
              </div>
              <div className='font-normal text-xs md:text-sm text-slate-500'>
                Date : <span>{day} {month} {year}</span>
              </div>
            </div>
          </div>
          <div className='my-auto space-x-5'>
            <button onClick={handleEOpen} className='font-bold py-[0.70rem] px-3 md:px-8 rounded-md bg-slate-600 hover:bg-slate-900 text-white text-justify transition-all ease-in-out duration-300'>EDIT PORTFOLIO</button>
            <Modal
              open={open}
              onClose={handleClose}
              className="flex items-center justify-center"
            >
              <div className='p-10 w-max h-max bg-white rounded-lg flex flex-col gap-1'>
                <div>Confirm Delete !</div>
                <strong>{props.title} - Portfolio</strong>
                <div className='flex justify-between gap-5'>
                  <button onClick={handleDelete} className='bg-slate-200 px-5 py-1 rounded-sm hover:bg-red-600 hover:text-white font-medium transition-all ease-in-out duration-300'>DELETE</button>
                  <button onClick={handleClose} className='bg-slate-200 px-5 py-1 rounded-sm'>CANCEL</button>
                </div>
              </div>
            </Modal>


            <Modal
              open={eOpen}
              onClose={handleEClose}
              className="flex items-center justify-center"
            >
              <div className='p-10 w-[90%] h-[90%] overflow-y-auto md:w-[50%] md:h-max bg-white md:rounded-lg flex flex-col gap-1'>
                <div className='flex justify-between'>

                  <div className='text-lg font-medium'>Edit - {data.title}</div>
                  <button onClick={handleEClose} className='text-slate-500 hover:text-slate-800 transition-all ease-in-out duration-300'>
                    <CloseIcon />
                  </button>
                </div>
                <form method="POST" className='py-5 flex flex-col gap-5'>

                  <input required type="text" name='title' value={data.title} onChange={handleChange} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='PORJECT TITLE' />
                  <input required type="text" name='type' value={data.type} onChange={handleChange} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='PORJECT TYPE' />
                  <input required type="text" name='github' value={data.github} onChange={handleChange} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='GITHUB LINK' />
                  <input required type="text" name='hostedLink' value={data.hostedLink} onChange={handleChange} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='HOSTED LINK' />
                  <input required type="text" name='imageURL' value={data.imageURL} onChange={handleChange} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='IMAGE LINK' />

                  <button onClick={handleSubmit} type='submit' className='w-full bg-blue-900 hover:bg-sky-500 py-4 font-medium text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400'>SAVE</button>

                </form>
              </div>
            </Modal>


            <button onClick={handleOpen} className='p-2 bg-red-600 text-white hover:bg-red-700 rounded-md transition-all ease-in-out duration-300'><DeleteIcon /></button>
          </div>
        </div>
      </div >

    </>
  )
}


function AdminPortfolio() {

  const context = useContext(mainContext)
  const { fetchPortfolio, portfolio } = context;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchPortfolio();
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    const response = await fetch(`${SERVER_URL}/api/portfolio/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("adminToken")
      },
      body: JSON.stringify({ title: title })
    })
    fetchPortfolio();
    setTitle("");
    handleClose();
  }

  let onChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>

      <div className='flex h-full '>
        <SidebarAdmin />
        <div className='h-[91vh] w-full space-y-7 p-5'>
          <button onClick={handleOpen} className='p-2 bg-blue-700 hover:bg-blue-900 transition-all ease-in-out duration-300 text-white font-semibold w-full'>ADD PROJECT TITLE</button>
          <Modal
            open={open}
            onClose={handleClose}
            className="flex items-center justify-center"
          >
            <div className='p-10 bg-white rounded-lg'>
              <form action="" className='space-y-7'>
                <input onChange={onChange} name="title" value={title} type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='PROJECT TITLE' />
                <button className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' onClick={handleCreate} type="submit">ADD PROJECT</button>
              </form>
            </div>
          </Modal>
          <div className='h-[76vh] overflow-y-auto space-y-5'>

            {portfolio?.map((data) => {
              return (
                <ManagePortfolio key={data._id} id={data._id} title={data.title} author="Rohit" date={data.hosted} data={data} />
              )
            })
            }

          </div>
        </div>
      </div>

    </>
  )
}

export default AdminPortfolio