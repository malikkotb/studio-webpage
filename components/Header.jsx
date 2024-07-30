import React from "react";

export default function Header() {
  return (
    <div className="sticky top-4 flex justify-center z-50 ">
      {/* TODO: make transparent background */}
      {/* TODO: make active tab highlighted wiht bg-white (save in Zustand store or sth.) */}
      <div className="flex justify-between  p-[3px] gap-1 rounded-full bg-[#f3f2f2]">
        <div className="bg-white  px-7 py-3 text-sm font-normal rounded-full">Home</div>
        <div className=" px-7 py-3 text-sm font-normal rounded-full">Profile</div>
        <div className=" px-7 py-3 text-sm font-normal rounded-full">Contact</div>
      </div>
    </div>

    
  );
}


