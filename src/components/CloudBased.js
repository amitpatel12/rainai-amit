import React, { useEffect, useState } from 'react'
import electric from '../assests/electrical-2476782.jpg'
import rainChip from '../assests/Rainchip.png'

const CloudBased = ({lineHeight}) => {
 

  // console.log('New Line Height:', lineHeight);

  return (
    <div className='bg-[#f8f9fb] w-[100%] flex items-center justify-center px-[15px] md:px-[30px]  py-[105px] lg:px-[150px] xl:px-[190px]'>
        <div className=' flex gap-5 lg:gap-16'>
      <div className='hidden md:flex flex-col items-center '>
<div className='dot bg-[#0D0D0D]'></div>
<div className={`w-[1px] bg-black !max-h-[70vh]`} style={{ height: `${lineHeight}vh` }}></div>
{
  lineHeight > 30 && <div className='dot bg-[#0D0D0D]'></div>
}

      </div>
      <div className='flex flex-col gap-16 md:gap-10 text-[#0d0d0d] font-[300]'>
        <p className=' text-[40px] max-w-[600px] leading-[40px] '>Cloud-based AI falls short when deploying AI en masse.</p>
        <div className='grid md:grid-cols-2 gap-8 text-[15px]'>
            <div className='flex flex-col gap-3 w-fit'>
                <img src={electric} className='w-[100%] h-[250px] xl:h-[331px]'/>
                <p className='w-[90%] md:w-[80%]'>However, there are serious barriers when deploying cloud-based AI to billions of devices, including high network latency and bandwidth requirements, high operational expenses, and more.</p>
            </div>
            <div className='flex flex-col gap-1'>
            <img src={rainChip} className='w-[100%] h-[250px] xl:h-[331px] object-center '/>
                <p className='w-[90%] md:w-[80%]'>At Rain, we're building AI processors - artificial brains - that will enable ubiquitous advanced artificial intelligence, be the platform upon which the trillion-dollar industries of the AI era will be built, and ultimately power fully autonomous AGI.</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CloudBased
