import React from 'react'

const Nav = () => {
  return (
    <div className='  w-[1000] h-40 flex items-center place-content-between p-[60px] '>
    <h1 className='cursor-pointer
 text-5xl font-semibold text-amber-50'>Zoro</h1>
    <div className='flex gap-10 text-[20px] text-amber-50 '>
        <p className='cursor-pointer font-thin pb-[20px] border-b-1 text-amber-200'>Home</p>
        <p className='cursor-pointer font-thin'>Products</p>
        <p className='cursor-pointer  font-thin'>About</p>
        <p className='cursor-pointer  font-thin'>Locations</p>
        <p className='cursor-pointer  font-thin'>Cast</p>
        <i   class="cursor-pointer ri-search-line"></i>
    </div>
    </div>
  )
}

export default Nav
