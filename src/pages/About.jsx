import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import profile from '../assets/img/profile.jpg'


function About() {
  return (
    <>

      <div className='lg:h-[92vh] py-10 lg:py-0 flex flex-col items-center bg-slate-100 select-none'>
        {/* <div className='text-center mb-4 text-4xl font-bold'>ABOUT</div> */}
        <div className='flex p-5 flex-col m-auto lg:flex-row items-center gap-5 lg:w-[80%]'>
          <div className='w-[50%] flex gap-5 flex-col text-center lg:p-5'>
            <img src={profile} className="w-24 h-24 rounded-full mx-auto" alt="" />
            <div className='text-xl font-bold'>Shibdas Bhattacharya</div>
            <div className='border-blue-500 border-t-4 w-20 mx-auto rounded-full'></div>
            <div className='text-center opacity-60'>Enthusiastic educator and Machine Learning developer</div>
          </div>
          <div className='border-blue-300 lg:border-l-[1px] lg:border-t-0 lg:w-auto border-t-[1px] w-full rounded-full lg:h-full'></div>
          <div className='opacity-70 flex flex-col gap-2 text-center lg:text-justify lg:p-5'>
            <div className=''>Mr. Shibdas Bhattacharya is a Machine Learning enthusiast and educator. He has vast experience of more than 10 years in technical education and also works as a Machine Learning consultant in many reputed fintech companies. </div>
            <div className=''>He has completed his bachelor's Degree from the West Bengal University of Technology and Received a Master's degree from, IIT (ISM) Dhanbad.</div>
            <div className=''>He is also a founding member of Topstack one of the leading Edtech companies in West Bengal. He keeps his research interests in Computer Vision and deep learning and guided more than fifty projects in this field.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About