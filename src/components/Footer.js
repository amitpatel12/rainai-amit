import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assests/arrow-white.svg'

const Footer = () => {
  return (
    <div className='min-h-[30vh] roadmap w-full pt-[45px] pb-[35px] px-[20px] lg:px-[200px] xl:px-[300px] text-white text-[13px] flex flex-col-reverse md:flex-row justify-between gap-20 md:gap-0 z-10 !border-none'>
      <div className='grid gap-5'>
            <p>Sitemap</p>
            <div className='flex flex-col '>
                <Link className='border-b-2 border-white w-fit'>About us</Link>
                <Link className='border-b-2 border-white w-fit'>Careers</Link>
                <Link className='border-b-2 border-white w-fit'>Learn more</Link>
                <Link className='border-b-2 border-white w-fit'>Terms and Privacy</Link>
            </div>

            <p>© 2023 Rain Neuromorphics. All rights reserved.</p>
      </div>

      <div className='w-[100%] md:w-fit flex flex-col gap-[70px]'>
        <div className='flex flex-col md:flex-row gap-3 md:border-b-[1px] border-white md:w-fit'>
            <label>Subscribe to our newsletter</label>
            <div className='relative '>
            <input type='text' className=' bg-transparent outline-none md:px-4 pr-4 border-b-[1px] border-white md:border-none w-full' placeholder='email@example.com'/>
            <img src={arrow} className='absolute top-[50%] translate-y-[-50%] right-0'/>
            </div>
        </div>

        <div className='flex gap-3'>
        <i class="fa fa-twitter"></i>
        
        <i class="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
