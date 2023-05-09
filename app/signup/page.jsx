"use client"
import React, { useState } from 'react'

function signup() {
    const [name, setName] = useState('Marry Doe');
    const [phone, setPhone] = useState('Marry Doe');
    const [email, setEmail] = useState('Marry Doe');
    const [password, setPassword] = useState('Marry Doe');
    const [companyname, setCompanyname] = useState('Marry Doe');

    return (
        <div>
            <h1 className='text-[28px] font-medium text-[#1D2226]  w-[188px]  mt-[20px] mb-[31px] leading-[34.5px] ' >
                Create your PopX account
            </h1>

            <form action="">
                {/* Full Name */}
                <div className='flex flex-col justify-center border-[1px] border-[#CBCBCB] rounded-[6px] relative h-[40px] px-[14px] ' >
                    <label htmlFor="emailAddress" className='bg-[#F7F8F9] text-[#6C25FF] text-[13px] w-[103px] pl-[5px] h-[17px] absolute top-[-12px] left-[9px]  ' >
                        Full Name<span className='text-[#DD4A3D]' >*</span>
                    </label>
                    <input className='outline-0 bg-[#F7F8F9] rounded-[6px] text-[14px] text-[#1D2226] ' value={name} onChange={event => setName(event.target.value)} placeholder='Full Name' type="text" name="" id="emailAddress" />
                </div>
                {/* Phone Number */}
                <div className='flex flex-col justify-center border-[1px] border-[#CBCBCB] rounded-[6px] relative h-[40px] px-[14px] mt-[29px] ' >
                    <label htmlFor="emailAddress" className='bg-[#F7F8F9] text-[#6C25FF] text-[13px] w-[103px] pl-[5px] h-[17px] absolute top-[-12px] left-[9px]  ' >Phone number<span className='text-[#DD4A3D]' >*</span> </label>
                    <input className='outline-0 bg-[#F7F8F9] rounded-[6px] text-[14px] text-[#1D2226] ' value={phone} onChange={event => setPhone(event.target.value)} placeholder='Phone number' type="tel" name="" id="emailAddress" />
                </div>
                {/* Email */}
                <div className='flex flex-col justify-center border-[1px] border-[#CBCBCB] rounded-[6px] relative h-[40px] px-[14px]  mt-[29px] ' >
                    <label htmlFor="emailAddress" className='bg-[#F7F8F9] text-[#6C25FF] text-[13px] w-[103px] pl-[5px] h-[17px] absolute top-[-12px] left-[9px]  ' >Email address<span className='text-[#DD4A3D]' >*</span> </label>
                    <input className='outline-0 bg-[#F7F8F9] rounded-[6px] text-[14px] text-[#1D2226] ' value={email} onChange={event => setEmail(event.target.value)} placeholder='Enter email address' type="email" name="" id="emailAddress" />
                </div>
                {/* Password */}
                <div className='flex flex-col justify-center border-[1px] border-[#CBCBCB] rounded-[6px] relative h-[40px] px-[14px] mt-[29px] ' >
                    <label htmlFor="emailAddress" className='bg-[#F7F8F9] text-[#6C25FF] text-[13px] w-[103px] pl-[5px] h-[17px] absolute top-[-12px] left-[9px]  ' >Password <span className='text-[#DD4A3D]' >*</span> </label>
                    <input className='outline-0 bg-[#F7F8F9] rounded-[6px] text-[14px] text-[#1D2226] ' value={password} onChange={event => setPassword(event.target.value)} placeholder='Enter password' type="password" name="" id="emailAddress" />
                </div>
                {/* CompanyName */}
                <div className='flex flex-col justify-center border-[1px] border-[#CBCBCB] rounded-[6px] relative h-[40px] px-[14px] mt-[29px] ' >
                    <label htmlFor="emailAddress" className='bg-[#F7F8F9] text-[#6C25FF] text-[13px] w-[103px] pl-[5px] h-[17px] absolute top-[-12px] left-[9px]  ' >Company name</label>
                    <input className='outline-0 bg-[#F7F8F9] rounded-[6px] text-[14px] text-[#1D2226] ' value={companyname} onChange={event => setCompanyname(event.target.value)} placeholder='Enter password' type="text" name="" id="emailAddress" />
                </div>
                {/* radio */}
                <div >
                    <p className=' text-[13px] text-[#1D2226] mt-[18px] ' >Are you an Agency?<span className='text-[#DD4A3D]' >*</span></p>
                    <div className='flex mt-[10px] ' >
                        <div className='flex justify-center mr-[23px] ' >
                            <input className=' accent-[#6C25FF] h-[22px] w-[22px] ' type="radio" name="Agency" id="yes" />
                            <label className=' text-[14px] text-[#1D2226] ml-[12px] h-[17px] ' htmlFor="yes">Yes</label>
                        </div>
                        <div className='flex justify-center ' >
                            <input className=' accent-[#6C25FF] h-[22px] w-[22px] ' type="radio" name="Agency" id="No" />
                            <label className=' text-[14px] text-[#1D2226] ml-[12px]  ' htmlFor="No">No</label>
                        </div>
                    </div>
                </div>



                {/* Btn */}
                <button className='bg-[#6C25FF] text-[16px] text-white h-[46px] w-[335px] rounded-[6px] font mb-[10px ] absolute bottom-0 mb-[30px] ' >Create Account</button>
            </form>
        </div>
    )
}

export default signup