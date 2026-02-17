import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const HeroMain = () => {
  return (
    <div  className="  min-h-170 w-[90%] bg-[#159934] flex  bg-cover absolute top-19 left-20 shadow-xl/40    transition-all duration-500 ease-in-out
">
      <LeftSection/>
      <RightSection/>
      <img className='absolute top-50% left-[20%] size-150' src="https://imgs.search.brave.com/mmq23Ift1bYnm1UaTRIDhvB3PfIOvY-LELQbxQIbNO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvem9y/by1jaGlsZGhvb2Qt/cG5nLTA1MjEyMDI0/LXl1NGprbGY1eG9x/bGQ1NmgucG5n" alt="" />
    </div>
  )
}

export default HeroMain
