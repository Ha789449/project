// components/Footer.js
"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-between">
        {/* Logo Section */}
        <div className="mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-2">v_hd</h1>
          <p className="mb-4">
            Take the <span className="font-bold">space</span> seriously
          </p>
          <p>
            Viktória Hettvai<br />
            v_hd@hu<br />
            +36 999 999 999
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="mb-2 font-bold cursor-pointer">_About me</p>
            <p className="mb-2 font-bold cursor-pointer">_Styles</p>
            <p className="mb-2 font-bold cursor-pointer">_Portfolio</p>
            <p className="mb-2 font-bold cursor-pointer">_Blog</p>
          </div>
          <div>
            <p className="mb-2 font-bold cursor-pointer">_Services</p>
            <p className="mb-2 cursor-pointer">_Home interior</p>
            <p className="mb-2 cursor-pointer">_Office design</p>
            <p className="mb-2 cursor-pointer">_Cafe interior</p>
          </div>
          <div>
            <p className="mb-2 font-bold cursor-pointer">_Products</p>
            <p className="mb-2 cursor-pointer">_Lights</p>
            <p className="mb-2 cursor-pointer">_Decoration</p>
            <p className="mb-2 cursor-pointer">_Textiles</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            VIKTÓRIA HETTVAI © 2025. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-sm mt-4 lg:mt-0">
            <p className="cursor-pointer">_Terms and Conditions</p>
            <p className="cursor-pointer">_Privacy Policy</p>
            <p className="cursor-pointer">_Security</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
