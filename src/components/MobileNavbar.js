import React, { useState } from 'react'
import logo from '../assests/logo-2.svg'
import { Link, useSearchParams } from 'react-router-dom'
import {IoReorderThreeOutline, IoCloseOutline} from 'react-icons/io5'
 

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)

  return (<>
    <div className='flex text-[#858585] bg-[#ffffff] h-[81px] px-[4.5rem] md:hidden justify-center items-center border-b-[1px] relative'>

        <div className='absolute top-[50%] translate-y-[-50%] left-4'>
            {
                open ? <IoCloseOutline size={30} color='#92E9FF' onClick={()=> setOpen(prev => !prev)} className='cursor-pointer btn'/> : <IoReorderThreeOutline size={30} color='#92E9FF' onClick={()=> setOpen(prev => !prev)} className='cursor-pointer btn'/>
            }

        </div>

        <img src={logo}/>
      
    </div>

{
    open &&  <div className='md:hidden flex absolute top-[81px] w-full bg-white py-5 px-[16px]'>
    <div className='flex flex-col gap-5 text-[#858585] text-[23px] dropdown'>
    <Link to={'/'}>About us</Link>
        <Link to={'/'}>Career</Link>
        <Link to={'/'}>Blog</Link>
        <Link to={'/'}>Learns</Link>
    </div>
</div>
}
   
    </>
  )
}

export default MobileNavbar
