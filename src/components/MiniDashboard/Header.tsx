import React from 'react'

const Header = () => {
  return (
    <div className='top-header'>
        <div className="inner-content flex justify-between items-center">
            <div className="left">
                <h2 className='text-[#0F172A] font-bold text-3xl'>Dashboard</h2>
                <p className='text-[#64748B] text-base mt-1'>Welcome back, Alex!</p>
            </div>

            <div className="right">
               <button className='bg-[#234E70] hover:bg-[#1C3F5B] text-white text-sm font-semibold px-9 py-3 rounded-lg'>+ New Project</button>
            </div>
        </div>
    </div>
  )
}

export default Header