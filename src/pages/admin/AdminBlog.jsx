import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import SidebarAdmin from '../../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { SERVER_URL } from '../../services/helper';
import mainContext from '../../context/mainContext';


function ManageBlog(props) {

  const context = useContext(mainContext)
  const { setNotification, fetchBlog } = context;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let date = props.date;
  let timeStamp = new Date(date).getTime();
  let day = new Date(timeStamp).getDate();
  let month = new Date(timeStamp).toLocaleString('default', { month: 'short' });
  let year = new Date(timeStamp).getFullYear();

  const { id } = props;

  const handleDelete = async () => {
    const response = await fetch(`${SERVER_URL}/api/blog/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("adminToken")
      }
    })
    fetchBlog();
    setNotification({ status: "true", message: "Blog Deleted", type: "info" });
  }

  return (
    <>

      <div className='w-full border bg-slate-100 h-max hover:bg-slate-200 hover:shadow-lg p-2 md:p-5 transition-all ease-in-out duration-300 rounded-lg'>
        <div className='flex justify-between flex-col
        sm:flex-row gap-5 w-full'>
          <div className='font-bold text-base md:text-lg my-auto'>
            {props.title?.length < 25 ? props.title : props.title?.slice(0, 25) + ".."}
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
            <Link to="/admin/editblog" state={{ data: props.data }} className='font-bold py-[0.70rem] px-3 md:px-8 rounded-md bg-slate-600 hover:bg-slate-900 text-white text-justify transition-all ease-in-out duration-300'>EDIT BLOG</Link>
            <Modal
              open={open}
              onClose={handleClose}
              className="flex items-center justify-center"
            >
              <div className='p-10 w-max h-max bg-white rounded-lg flex flex-col gap-1'>
                <div>Confirm Delete !</div>
                <strong>{props.title} - Blog</strong>
                <div className='flex justify-between gap-5'>
                  <button onClick={handleDelete} className='bg-slate-200 px-5 py-1 rounded-sm hover:bg-red-600 hover:text-white font-medium transition-all ease-in-out duration-300'>Delete</button>
                  <button onClick={handleClose} className='bg-slate-200 px-5 py-1 rounded-sm'>CANCEL</button>
                </div>
              </div>
            </Modal>
            <button onClick={handleOpen} className='p-2 bg-red-600 text-white hover:bg-red-700 rounded-md transition-all ease-in-out duration-300'><DeleteIcon /></button>
          </div>
        </div>
      </div>

    </>
  )
}


function AdminBlog() {

  const context = useContext(mainContext)
  const { fetchBlog, blogs } = context;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchBlog();
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    const response = await fetch(`${SERVER_URL}/api/blog/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("adminToken")
      },
      body: JSON.stringify({ title: title })
    })

    const json = await response.json();

    if (json.success) {
      setTitle("")
      fetchBlog();
      handleClose();
    }
  }

  let onChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>

      <div className='flex h-full '>
        <SidebarAdmin />
        <div className='h-[91vh] w-full space-y-7 p-5'>
          <button onClick={handleOpen} className='p-2 bg-blue-700 hover:bg-blue-900 transition-all ease-in-out duration-300 text-white font-semibold w-full'>ADD BLOG TOPIC</button>
          <Modal
            open={open}
            onClose={handleClose}
            className="flex items-center justify-center"
          >
            <div className='p-10 bg-white rounded-lg'>
              <form action="" className='space-y-7'>
                <input onChange={onChange} name="title" value={title} type="text" className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='BLOG TITLE' />
                <button className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' onClick={handleCreate} type="submit">CREATE BLOG</button>
              </form>
            </div>
          </Modal>
          <div className='h-[76vh] overflow-y-auto space-y-5'>

            {blogs?.map((data) => {
              return (
                <ManageBlog key={data._id} id={data._id} title={data.title} author={data.author} date={data.date} data={data} />
              )
            })
            }

          </div>
        </div>
      </div>

    </>
  )
}

export default AdminBlog