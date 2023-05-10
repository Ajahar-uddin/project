import Image from "next/image";
import React from "react";
import profilePic from "../../public/profile.png";
import cameraIcon from "../../public/camera.png";

function account() {
  return (
    <div className=" flex flex-col h-full pb-9 md:max-w-[375px] md:mx-auto">
      <div className="  bg-white pt-[27px] px-[15px] pb-[19px] leading-[22px] shadow-[#00000007] shadow-md">
        <p className="text-[#1D2226] text-[18px] ">Account Settings</p>
      </div>
      <div className="flex px-5 pt-[30px]">
        <div className="relative w-[76px] h-[76px] rounded-full">
          <Image
            src={profilePic}
            alt="profile-picture"
            className="absolute object-cover inset-0 w-full h-full"
            quality={100}
            sizes="(max-width: 768px) 100vw"
            fill
          />
          <Image
            src={cameraIcon}
            alt="profile-picture"
            width={21}
            height={23}
            className="absolute right-0 bottom-0"
          />
        </div>
        <div className="flex flex-col pl-5 flex-1">
          <h1 className="font-medium text-[#1D2226] text-[15px] capitalize leading-[18px] ">Marry Doe</h1>
          <p className="text-[14px] text-[#1D2226] capitalize leading-[17px] mt-[6px] ">Marry@Gmail.Com</p>
        </div>
      </div>
      <div className="pl-[20px] pr-[18px] mt-[30px] mb-[20px] text-[14px] capitalize">
        <p className="text-[#1d2226]" >
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <div className="flex-1 border-y border-dashed border-[#cbcbcb]"></div>
    </div>
  );
}

export default account;
