'use client'

import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()
  const createAccount = () => {
    router.push('/signup')
  }
  const login = () => {
    router.push('/signin')
  }
  return (
    <>
      <div className=" p-[20px] md:max-w-[375px] md:mx-auto ">
        <h1 className="text-[#1D2226] text-[28px] font-medium w-[231px] h-[33px] mb-[10px] ">
          Welcome to PopX
        </h1>
        <h2 className="text-[18px] text-[#1D2226]/60 w-[232px] h-[48px] mb-[29px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </h2>
        <button onClick={createAccount} className="bg-[#6C25FF] text-[16px] text-white h-[46px] w-[100%] rounded-[6px] font mb-[10px] ">
          Create Account
        </button>
        <button onClick={login} className="bg-[#6C25FF4B] text-[16px] text-black h-[46px] w-[100%] rounded-[6px] font-medium mb-[21px] ">
          Already Registered? Login
        </button>
      </div>
    </>
  );
}
