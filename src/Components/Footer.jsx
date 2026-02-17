import React from 'react'

const Footer = () => {
  return (
    <div  className='h-40 w-[1200px] bg-[#159934] mt-40 flex overflow-hidden z-999 absolute '>
      <div className='h-40 w-80   pl-[60px]'>
        <p className='font-medium text-white mb-[10px] mt-[20px]'>EVENTS</p>
        <p className='font-medium text-[#939393f8]'>Pop-up @ Stoven Atan Fillmore</p>
        <p className='font-medium text-white'>$F-Sat,August 12/5-8PM</p>
        <p className='font-medium text-white text-4xl'>.<span>. .</span></p>
      </div>
      <div className='h-40 w-80   flex justify-center pl-[50px] flex-col '>
        <p className='text-[#939393f8]'>Pop-up @ Steven Atan Brooklyn  </p>
        <p className='text-[#fffffff8]'>NYc -Sat, August 12 / 5-8PM</p>
      </div>
      <div className='h-40 w-64  '>
        <img className=' w-96 object-cover ' src="https://i.pinimg.com/736x/53/a6/45/53a6459b2d8313ec794034636c59da2b.jpg" alt="" />
      </div>
      <div className='h-40 w-[319px] text-white   pl-[40px] pt-[10px]'>
        <p className='mb-[10px] font-medium'>NEWS</p>
        <p className='leading-[1.3] mb-[10px] font-medium text-[14px]'>A fresh take on our Active Collection, <br />just in time for spring. Available in black </p>
        <p className='font-medium'>Read More</p>
      </div>
       
    </div>
  )
}
 
export default Footer
