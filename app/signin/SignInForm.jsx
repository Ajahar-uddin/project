"use client"
import Link from 'next/link'
import React from 'react'

function SignInForm() {
    return (
        <form action="">
            {/* Email Input */}
            <div className='flex flex-col justify-center border-[1px] border-[#CBCBCB] rounded-[6px] relative h-[40px] px-[14px] ' >
                <label htmlFor="emailAddress" className='bg-[#F7F8F9] text-[#6C25FF] text-[13px] w-[103px] pl-[5px] h-[17px] absolute top-[-12px] left-[9px]  ' >Email Address</label>
                <input className='outline-0 bg-[#F7F8F9] rounded-[6px] text-[14px] text-[#919191] ' placeholder='Enter email address' type="email" name="" id="emailAddress" />
            </div>
            {/* Password Input */}
            <div className='mt-[23px] flex flex-col justify-center border-[1px] border-[#CBCBCB] rounded-[6px] relative h-[40px] px-[14px] ' >
                <label htmlFor="emailAddress" className='bg-[#F7F8F9] text-[#6C25FF] text-[13px] w-[103px] pl-[5px] h-[17px] absolute top-[-12px] left-[9px]  ' >Password</label>
                <input className='outline-0 bg-[#F7F8F9] rounded-[6px] text-[14px] text-[#919191] ' placeholder='Enter password' type="email" name="" id="emailAddress" />
            </div>
            <button onClick={(e) => { e.preventDefault() }} className='bg-[#CBCBCB] text-[16px] text-white h-[46px] w-[100%] rounded-[6px] font mb-[10px] mt-[14px] ' >
                <Link href='/account' >
                    Login
                </Link>
            </button>
        </form>
    )
}

export default SignInForm