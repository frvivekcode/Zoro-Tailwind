import React from 'react'

const LeftSection = () => {
  return (
    <div className="w-40 h-[100] border-r-[1px] border-r-[#56c586]">
      <div className="box h-40 w-40 bg-[#04ab2b] flex items-center justify-center cursor-pointer
">
        <h1 className="text-5xl"><i className="ri-menu-4-fill"></i></h1>
      </div>
      <div className='cursor-pointer
 absolute bottom-0   h-50 w-40 bg-[#04ab2b] flex justify-center items-center flex-col gap-5 text-zinc-50'>
        <h3 className='rotate-270 rounded-[50%] border-[1px] border-[#3a3a3a] text-center w-fit pl-3 pr-3 pt-2 pb-2'>Tw</h3>
        <h3 className='rotate-270 rounded-[50%] border-[1px] border-[#3a3a3a] text-center w-fit pl-3 pr-3 pt-2 pb-2'>In</h3>
        <h3 className='rotate-270 rounded-[50%] border-[1px] border-[#3a3a3a] text-center w-fit pl-3 pr-3 pt-2 pb-2'>Fb</h3>
      </div>
    </div>
  )
}

export default LeftSection
