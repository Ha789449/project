"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link"; // Import Link
import Service from "./components/Service";
import About from "./components/About";
import Footer from "./components/footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen">
      {/* Navbar */}
      <header
        className={`${
          isMenuOpen ? "fixed top-0 left-0 w-full z-50" : "relative"
        } bg-white shadow`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">v_hd</h1>
          <button
            onClick={toggleMenu}
            className="text-xl border px-4 py-2 rounded"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute h-screen left-0 w-full bg-black text-white">
            <ul className="flex flex-col items-start p-6 space-y-4">
              <li>
                <a href="#" className="text-xl underline">
                  Kezdőlap
                </a>
              </li>
              <li>
                <a href="#" className="text-xl">
                  Rólam
                </a>
              </li>
              <li>
                <a href="#" className="text-xl underline">
                  Munkáim
                </a>
              </li>
              <li>
                <a href="#" className="text-xl">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main
        className={`container mx-auto px-6 py-12 ${isMenuOpen ? "mt-40" : "mt-12"}`}
      >
        <div className="grid md:grid-cols-3 gap-8"> {/* Updated gap to 8 */}
          {/* Left Section */}
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-4xl font-bold leading-tight">
              Take the <span className="text-gray-600">_</span> space seriously.
            </h2>
            <p className="mt-2 text-sm uppercase font-bold">Viktoria Home Design</p>
            <div className="mt-8 space-y-4">
              {/* Grid for Quotes */}
              <div className="grid md:grid-cols-2 gap-6">
                <blockquote className="text-sm italic border-l-4 border-gray-300 pl-4">
                  “Every time I smile when I enter the room designed by her. It’s
                  like she always knows what is it that truly makes me happy.”
                  <br />
                  <span className="block mt-2 text-gray-500">- Fanni Kriss</span>
                </blockquote>
                <blockquote className="text-sm italic border-l-4 border-gray-300 pl-4">
                  “She understood my style and added a little magic that makes my
                  home completely unique.”
                  <br />
                  <span className="block mt-2 text-gray-500">- Zsolt Munyhárt</span>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Middle Section - Image */}
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src="/project3.png" // Image source from the public folder
              alt="Living Room"
              width={1000} // Adjusted width
              height={350} // Adjusted height
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Buttons - Positioned directly below the image */}
        <div className="text-center mt-8"> {/* Adjusted margin */}
          <div className="grid grid-cols-2 gap-6"> {/* Updated gap to 6 */}
            {/* Button 1 */}
            <Link href="/contact">
              <button className="w-[200px] h-24 ml-auto bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-900">Contact Me</span>
                <IoArrowForward className="ml-2 text-gray-900" />
              </button>
            </Link>
            {/* Button 2 */}
            <Link href="/shop">
              <button className="w-full md:w-[200px] h-24 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-black hover:text-white flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-900">Shop</span>
                <IoArrowForward className="ml-2 text-gray-900" />
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Service />
      <About />
      <Footer />
    </div>
  );
}
