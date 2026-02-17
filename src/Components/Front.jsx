import React from 'react'

const Front = () => {
  return (
    <div className='w-[100%] h-50 flex pl-[60px] pr-[60px]'>
       <div className='w-[50%] h-[100%]  '>
        <h1 className='text-white text-2xl pb-1 border-b-[1px] border-r-[#218b45] w-3xs   '>/01</h1>
        <h3 className='text-white font-[600] pb-[5px] mt-2'>Work Collection</h3>
        <p className='text-[#b3b3b3] pb[5px]'>Activ Collection</p>
        <p className='text-[#b3b3b3]'>Travel Collection</p>
       </div>
       <div className='w-[50%] h-[100]  '>
        <h1 className='text-5xl font-bold text-[#ffffff]'>Work <br />Anywhere</h1>
        <p className='w-120 text-xl mt-5 text-[#d2d2d2]'>Introducing the Work Collection, a line of minimalist bags designed <span className='border-b-[1px] border-b-[#d2d2d2]'> for a new generation, specifically for the modern professional.</span></p>
       </div>
      
    </div>
  )
}

export default Front
