"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen">
      {/* Services Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Szolgáltatások</h2>
        <p className="text-sm mb-8">
          Minimalism and the harmony of space are my specialties. I create sleek, functional spaces with fewer but more valuable elements, where every detail matters.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Image */}
          <div className="w-full lg:w-2/3">
            <Image
              src="/project2.jpeg" // Image source
              alt="Living Room Design"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3 mt-8 lg:mt-0">
            <button className="w-full py-4 mt-20 bg-gray-200 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 flex items-center justify-between px-4">
              <span className="text-lg font-semibold">Home</span>
              <span>&rarr;</span>
            </button>
            <button className="w-full py-4  bg-gray-200 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 flex items-center justify-between px-4">
              <span className="text-lg font-semibold">Office</span>
              <span>&rarr;</span>
            </button>
            <button className="w-full py-4  bg-gray-200 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 flex items-center justify-between px-4">
              <span className="text-lg font-semibold">Cafe</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
