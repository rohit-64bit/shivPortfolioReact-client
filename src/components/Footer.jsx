import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <>
      <div className='bg-blue-900 p-10' >
        <div className='flex gap-5 text-white w-max mx-auto '>
          <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><FacebookIcon /></a>
          <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><TwitterIcon /></a>
          <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><InstagramIcon /></a>
          <a href="" className='hover:opacity-100 opacity-50 transition-all ease-in-out ' target="_blank"><LinkedInIcon /></a>
        </div>
        <div className='my-5'>

          <div className='text-sm md:text-base text-white text-center font-light opacity-50 tracking-widest'>©COPYRIGHTS SHIBDAS BHATTACHARYA</div>
          <div className='text-sm md:text-base text-white text-center font-light opacity-50 tracking-widest'>ALL RIGHTS RESERVED</div>
          <div className='text-sm md:text-base text-white text-center justify-center flex font-light tracking-widest'>
            <span className='opacity-50 my-auto'>Designed & Developed by</span>
            <span>
              <a href="https://topstack.co.in/" target="_blank">
                <img src="https://topstack.co.in/assets/img/logo.png" className='my-auto w-20 opacity-100 ml-2 mix-blend-luminosity brightness-200' alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer