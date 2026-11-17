import React from 'react'

const Header = () => {
  return (
    <div className='top-header'>
        <div className="inner-content flex justify-between items-center">
            <div className="left">
                <h2 className='color-[#0F172A] font-bold text-4xl'>Dashboard</h2>
                <p className='color-[#64748B] text-lg'>Welcome back, Alex!</p>
            </div>
            
            <div className="right">
               <button className='bg-[#234E70] text-white px-10 rounded-md'>+ New Project</button>
            </div>
        </div>
    </div>
  )
}

export default Header