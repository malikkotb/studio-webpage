"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[65vh] border-red flex flex-col justify-between">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-full leading-tight justify-center items-center flex flex-col"
      >
        <p className="text-[4vh] tracking-tight font-medium">Let's work together.</p>
        <p className="text-[4vh] text-[#7a7a7a] cursor-pointer hover:text-opacity-50 tracking-tight font-medium">
          Get in touch.
        </p>
      </motion.div>
      <div className="flex justify-between p-8">
        <div className="flex gap-2">
          <div className="rounded-full p-3 bg-red-500"></div>
          <div>Malik Kotb 2024</div>
        </div>
        <div className="flex gap-2 text-sm font-light">
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Mail</p>
        </div>
      </div>
    </div>
  );
}
