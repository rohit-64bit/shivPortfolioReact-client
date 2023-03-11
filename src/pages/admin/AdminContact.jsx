import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SidebarAdmin from '../../components/SidebarAdmin'
import { SERVER_URL } from './../../services/helper';
import contact from '../../assets/bg/contact.svg'


function Suggestions(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen} className='w-full h-max p-5 bg-slate-100 hover:bg-slate-200 rounded-lg hover:shadow-lg hover:shadow-slate-300 transition-all ease-in-out duration-300 text-left'>
        <div>From : <strong>{props.email}</strong></div>
        <div>Subject : <strong>{props.subject.slice(0, 50)}</strong></div>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        className="flex items-center justify-center"
      >
        <div className='p-10 bg-white rounded-lg flex flex-col w-max md:w-[60%] gap-2'>
          <div>From : <strong>{props.email}</strong></div>
          <div>Name : <strong>{props.name}</strong></div>
          <div>Date : <strong>{props.date}</strong></div>
          <div>Subject : <strong>{props.subject}</strong></div>
          <div className=''>Body : <div className='whitespace-pre-wrap font-bold'>{props.body}</div></div>
        </div>
      </Modal>
    </>
  )
}

function AdminContact() {

  const [contactFormData, setContactFormData] = useState([])

  const fetchContactFormData = async () => {
    const response = await fetch(`${SERVER_URL}/api/contact/fetch`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const json = await response.json()
    setContactFormData(json)

  }

  useEffect(() => {
    fetchContactFormData()
  }, [])


  return (
    <>
      <div className='flex h-full '>
        <SidebarAdmin />
        <div className='h-[91vh] w-full space-y-7 p-5'>
          <div className='w-full h-[85vh] overflow-y-auto flex flex-col gap-5'>

            {!contactFormData.length ?
                <img src={contact} className="w-1/2 h-1/2 container m-auto" alt="BG IMAGE" />
              :
              contactFormData.map((data) => {
                return (
                  <Suggestions key={data._id} email={data.email} subject={data.subject} name={data.name} body={data.body} date={data.date} />
                )
              })

            }

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminContact