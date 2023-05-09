
import React from 'react'

function signin() {
    return (
        <div className='bg-[#F7F8F9] ' >
            <h1 className='text-[28px] font-medium text-[#1D2226]  w-[188px]  mt-[20px] leading-[34.5px] ' >
                Signin to your PopX account
            </h1>
            <h2 className='text-[18px] text-[#1D2226]/60 w-[232px] h-[48px] font mb-[33px] mt-[14px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>


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
            </form>
            <button type='submit' className='bg-[#CBCBCB] text-[16px] text-white h-[46px] w-[100%] rounded-[6px] font mb-[10px] mt-[14px] ' >Login</button>
        </div>
    )
}

export default signin
