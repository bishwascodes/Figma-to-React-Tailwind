import React from 'react'

const ProfileCard = () => {
  return (
    <div className='card-outer bg-[#F1F5F9] flex justify-center p-5'>
        <div className="card-inner p-10 bg-white rounded-xl border-black border w-[400px]">
            <div className="card-header flex-wrap flex gap-3 justify-start ">
                <div className="name-logo w-[72px] h-[72px] text-2xl flex justify-center items-center rounded-full bg-[#DBEAFE]">
                    <b>AJ</b>
                </div>
                <div className="name">
                    <h2 className='color-[#0F172A] text-2xl'>Alex Johnson</h2>
                    <p className='color-[#64748B]'>Frontend Developer</p>
                </div>
            </div>
            <div className="available-btn py-8 border-b-1 border-[#E2E8F0]">
                <div className="badge bg-[#DCFCE7] inline-block px-6 py-3 text-[14px] rounded-3xl text-[#166534] font-bold">
                    Available
                </div>
            </div>
            <div className="footer-btns pt-7">
                <div className="wrapper flex-wrap flex justify-between">
                     <a href="#" className="btn text-white bg-[#234E70] px-10 py-4 rounded-xl ">View Profile</a>                                                       
                     <a href="#" className="btn px-10 py-4 rounded-xl border-1 border-[#CBD5E1]">Message</a>                                                       
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard