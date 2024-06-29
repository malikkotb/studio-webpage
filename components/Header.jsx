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

import React from "react";
import Link from "next/link";

export default function Header() {
  const text = "THE";
  const text2 = "AGENTS";

  return (
    <div className="fixed mix-blend-difference text-white text-sm justify-between top-0 p-5 pr-8 flex w-screen z-50 ">
      <a href="/" className="flex">
        {text.split("").map((char, index) => (
          <span key={index} className="cursor-pointer transition-transform duration-200 hover:scale-110">
            {char}
          </span>
        ))}
        
        {text2.split("").map((char, index) => (
          <span key={index} className="cursor-pointer transition-transform duration-200 hover:scale-110">
            {char}
          </span>
        ))}
      </a>
      <div className="mt-5 absolute navbar-nav left-1/2 transform -translate-x-1/2 top-0 gap-4 flex justify-between font-light tracking-wide">
        {/* <Link href="/about">ABOUT</Link>
        <Link href="/women">WOMEN</Link>
        <Link href="/men">MEN</Link>
        <Link href="/become">BECOME</Link>
        <Link href="/contact">CONTACT</Link> */}
        <div className="nav-item">
          <Link href="/about" className="nav-link">
            ABOUT
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/women" className="nav-link">
            WOMEN
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/men" className="nav-link">
            MEN
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/become" className="nav-link">
            BECOME
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/contact" className="nav-link">
            CONTACT
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

  );
}
