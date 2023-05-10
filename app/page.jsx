import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" p-[20px] md:max-w-[375px] md:mx-auto ">
        <h1 className="text-[#1D2226] text-[28px] font-medium w-[231px] h-[33px] mb-[10px] ">
          Welcome to PopX
        </h1>
        <h2 className="text-[18px] text-[#1D2226]/60 w-[232px] h-[48px] mb-[29px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </h2>
        <button className="bg-[#6C25FF] text-[16px] text-white h-[46px] w-[100%] rounded-[6px] font mb-[10px] ">
          <Link href="/signup" >
          Create Account
          </Link>
        </button>
        <button  className="bg-[#6C25FF4B] text-[16px] text-black h-[46px] w-[100%] rounded-[6px] font-medium mb-[21px] ">
          <Link href="/signin" >
          Already Registered? Login
          </Link>
        </button>
      </div>
    </>
  );
}
