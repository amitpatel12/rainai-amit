import React from 'react'
import logo from '../assests/logo-2.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='hidden text-[#858585] bg-[#ffffff] h-[101px] px-[4.5rem] md:flex justify-between items-center'>
        <div className=''>
            <img src={logo} alt='logo'/>
        </div>
        <div className='flex gap-8 font-[300] text-[15px]'>
            <Link to={'/'}>About us</Link>
            <Link to={'/'}>Career</Link>
            <Link to={'/'}>Blog</Link>
            <Link to={'/'}>Learns</Link>
        </div>
      
    </div>
  )
}

export default Navbar
