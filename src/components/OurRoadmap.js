import React from 'react'

const OurRoadmap = ({lineHeight}) => {


  return (
    <div className='roadmap w-full py-[105px] px-[15px] md:px-[30px] lg:px-[150px] xl:px-[190px]'>
      <div className='flex gap-5 lg:gap-16'>
      <div className='hidden md:flex flex-col items-center '>
<div className='dot bg-white'></div>
<div className={`w-[1px] bg-white lg:!max-h-[60vh] md:!max-h-[43vh]`} style={{ height: `${lineHeight}vh` }}></div>
{
  lineHeight > 30 && <div className='dot bg-white'></div>
}

      </div>


    <div className='text-white w-full lg:w-[45%]  xl:w-[37%] flex flex-col gap-4'>
        <p className='text-[30px] md:text-[40px] leading-[45px]'>Our roadmap will ultimately enable 100 billion-parameter models in a chip the size of a thumbnail.</p>
        <div className='flex flex-col gap-6 text-[15px]'>
            <p>We are the world leaders in algorithm/hardware co-design for artificial intelligence. Every product on our roadmap utilizes this innovative approach.</p>

            <p>Our engineering roadmap enables multi-generation progress, and we will enter the market at volume with a Gen 1 product 100x better than the status quo.</p>

            <p>See the About Us section for more information on our technology and team.</p>
        </div>
    </div>
      </div>
    </div>
  )
}

export default OurRoadmap
