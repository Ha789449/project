"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import Service from "./components/Service";
import About from "./components/About";
// import Footer from "./components/footer";
import Footer from './components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className={`bg-gray-100 shadow ${isMenuOpen ? "fixed w-full z-50" : "relative"}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">v_hd</h1>
          <button onClick={toggleMenu} className="text-xl border px-4 py-2 rounded">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute h-screen left-0 w-full bg-black text-white">
            <ul className="flex flex-col items-start p-6 space-y-4">
              <li>
                <a href="#" className="text-xl underline">Kezdőlap</a>
              </li>
              <li>
                <a href="#" className="text-xl">Rólam</a>
              </li>
              <li>
                <a href="#" className="text-xl underline">Munkáim</a>
              </li>
              <li>
                <a href="#" className="text-xl">Kapcsolat</a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-200 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Content */}
          <div className="col-span-12 md:col-span-6 flex flex-col p-6 md:p-12 gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Take the <span className="underline bg-white">space</span> seriously.
              </h1>
              <p className="mt-2 text-lg font-medium">VIKTORIA HOME DESIGN</p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <blockquote className="border-l-4 border-gray-400 pl-4">
                <p className="italic text-sm">
                  “Every time I smile when I enter the room designed by her. It’s like she always knows what it is that truly makes me happy.”
                </p>
                <cite className="block mt-2 text-sm font-bold">– Fiona Hilton</cite>
              </blockquote>

              <blockquote className="border-l-4 border-gray-400 pl-4">
                <p className="italic text-sm">
                  “She understood my style and added a little magic that makes my home completely unique.”
                </p>
                <cite className="block mt-2 text-sm font-bold">– Josh Markraft</cite>
              </blockquote>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-span-12 md:col-span-6 relative w-full h-full">
            <Image
              src="/project3.png" // Image source from the public folder
              alt="Hero Section"
              layout="responsive"
              width={1200} // Set appropriate width
              height={800} // Set appropriate height
              priority
              className="object-cover"
            />
            {/* Buttons below the image */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex w-full">
              <button className="w-full h-[100px] bg-gray-200 border-5 p-5 m-0 border-black rounded text-sm uppercase tracking-wider flex items-center">
                Contact me
                <IoArrowForward className="ml-2" />
              </button>
              <button className="w-full h-[100px] m-0 bg-gray-200 text-center border-5 p-5 border-black rounded text-sm uppercase tracking-wider hover:bg-black transition flex items-center">
                Shop
                <IoArrowForward className="ml-2" />
              </button>

            </div>
          </div>
        </div>
      </div>



      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <Service />
        <About />
        <Footer/>
      </main>

      {/* Footer */}
     
    </div>
  );
}
