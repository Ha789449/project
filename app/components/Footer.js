"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Centered Dots Section */}
      <div className="bg-gray-200 h-[20vh] flex justify-center items-center">
        <div className="flex gap-4">
          <span className="w-2 h-2 bg-gray-950 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-950 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-950 rounded-full"></span>
        </div>
      </div>

      {/* Footer Text Section */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            VIKTÓRIA HETTVAI © 2025. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Top Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-between">
        {/* Logo Section */}
        <div className="mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-2">v_hd</h1>
          <p className="mb-4">
            Take the <span className="font-bold text-black bg-white">space</span> seriously
          </p>
          
          
        </div>

        {/* About Links */}
        <div className="space-y-2">
          <p className="hover:text-gray-400">_ About me</p>
          <p className="hover:text-gray-400">_ Styles</p>
          <p className="hover:text-gray-400">_ Portfolio</p>
          <p className="hover:text-gray-400">_ Blog</p>
        </div>

        {/* Services Links */}
        <div className="space-y-2">
          <p className="hover:text-gray-400">_ Services</p>
          <p className="hover:text-gray-400">_ Home interior</p>
          <p className="hover:text-gray-400">_ Office design</p>
          <p className="hover:text-gray-400">_ Cafe interior</p>
        </div>

        {/* Products Links */}
        <div className="space-y-2">
          <p className="hover:text-gray-400">_ Products</p>
          <p className="hover:text-gray-400">_ Lights</p>
          <p className="hover:text-gray-400">_ Decoration</p>
          <p className="hover:text-gray-400">_ Textiles</p>
        </div>
      </div>

      {/* Terms Links */}
      <div className="flex justify-between items-start w-full">
  <p className="text-gray-300">
    Viktória Hettvai<br />
    v_hd@hu<br />
    +36 999 999 999
  </p>

  <div className="flex space-x-8 my-10">
    <a href="#" className="hover:text-gray-400">_ Terms and Conditions</a>
    <a href="#" className="hover:text-gray-400">_ Privacy Policy</a>
    <a href="#" className="hover:text-gray-400">_ Security</a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
