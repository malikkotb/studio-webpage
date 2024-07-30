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

// HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css'; // You can style your component using this CSS file

const HeroSection = () => {
    return (
        <div className="hero-container">
            <motion.div
                className="hero-content"
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                transition={{ type: 'tween', duration: 1 }}
            >
                <h1>Welcome to My Website</h1>
                <p>This is the hero section with horizontal scroll effect.</p>
            </motion.div>
        </div>
    );
};

export default HeroSection;

