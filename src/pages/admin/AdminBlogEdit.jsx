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
    console.log(admin);
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


          {/* <div className="flex items-center justify-center w-full">


            {image ?
              selectedImage && (
                <div>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="thumbnail"
                    className='w-full md:w-[30%] mx-auto'
                  />
                  <button onClick={removeSelectedImage}
                    className="p-5 mt-5 font-medium w-full  bg-red-600 hover:bg-red-700 transition-all ease-in-out text-white rounded-md"
                  >
                    REMOVE IMAGE
                  </button>
                </div>
              )
              :
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-max border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 transition-all ease-in-out duration-300">
                  <svg aria-hidden="true" className="w-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg , image/jpg" onChange={imageChange} />
              </label>}

          </div> */}

          <textarea type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} className="px-4 py-3 w-full outline outline-1 outline-slate-400 focus:outline-blue-700 transition-all ease-in-out duration-200 font-mono" cols="30" rows="6" placeholder='BLOG CONTENT' required />

          <button className='w-full bg-blue-900 hover:bg-sky-500 py-3 font-bold text-white text-lg transition-all ease-in-out duration-300 hover:shadow-lg shadow-slate-400' type='submit'>SAVE BLOG</button>
        </form>
      </div>
    </>
  )
}

export default AdminBlogEdit