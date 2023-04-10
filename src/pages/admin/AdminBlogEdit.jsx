import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { SERVER_URL } from '../../services/helper';
import mainContext from '../../context/mainContext';



function AdminBlogEdit() {

  const context = useContext(mainContext);
  const { setNotification } = context;


  const location = useLocation();
  const { data } = location.state;

  const id = data._id;

  const [admin, setAdmin] = useState({})

  const [title, setTitle] = useState(data.title)
  const [imageUrl, setImageUrl] = useState(data.imageUrl)
  const [description, setDescription] = useState(data.description)
  const [tag, setTag] = useState(["blog"])

  const [tagInput, setTagInput] = useState("")

  const [selectedImage, setSelectedImage] = useState();
  const [image, setImage] = useState(null);

  let navigate = useNavigate();

  function imageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  }

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setImage(null);
    setSelectedImage();
  };

  const addTag = () => {
    setTag(tag.concat(tagInput))
    console.log(tag);
    setTagInput("");
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
  }


  const updateBlog = async (e) => {
    e.preventDefault();
    const response = await fetch(`${SERVER_URL}/api/blog/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('adminToken')
      },
      body: JSON.stringify({ title: title, description: description, imageUrl: imageUrl, author: admin.adminName })
    });



    if (response) {
      setNotification({ status: "true", message: "Blog Updated !", type: "success" })
    }

    navigate('/admin/blogs')

  };

  useEffect(() => {
    fetchAdmin()
  }, [])


  return (
    <>

      <div>
        <form onSubmit={updateBlog} method='POST' className='p-5 md:p-20 flex flex-col gap-5'>
          <div className='flex flex-col font-semibold'>
            <div>
              Blog ID : <span>{data._id}</span>
            </div>
            <div>
              Author Name : <span>{admin.adminName}</span>
            </div>
          </div>
          <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='BLOG TITLE' required />


          <input type="url" name='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" placeholder='IMAGE URL' required />

          {data.imageUrl ? <img src={data.imageUrl} className="md:w-[30%] mx-auto" alt="" /> : <div></div>}

          <textarea type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" cols="30" rows="6" placeholder='BLOG CONTENT' required />

          <button className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' type='submit'>SAVE BLOG</button>
        </form>
      </div>
    </>
  )
}

export default AdminBlogEdit