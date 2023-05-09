import Image from 'next/image'
import React from 'react'

function account() {
    return (
        <div>
            <div className='  bg-white pt-[27px] px-[15px] pb-[19px] leading-[22px] shadow-[#00000007] shadow-sm ' >
                <p className='text-[#1D2226] text-[18px] ' >Account Settings</p>
            </div>
            <div className='flex items-center ' >
                <img
                    src=".../profile.png"
                    width={50}
                    height={50}
                    alt="" />
            </div>
        </div>
    )
}

export default account