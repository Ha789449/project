import React from "react";

export default function About() {
  return (
    <>
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12 px-4">
      {/* Main Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: About Text */}
        <div>
          <h2 className="text-5xl font-bold mb-6 text-center lg:text-left">_About me</h2>
          <p className="bg-white text-black text-lg leading-relaxed mb-6 p-4">
            As a passionate interior designer, I am a devotee of minimalism and
            spatial harmony. I believe that sleek design not only provides an
            aesthetic experience but also makes everyday life more harmonious.
            With my unique style and personalized approach, I strive to create
            a real home for my clients in every project.
          </p>
          <a
            href="#"
            className="text-white font-semibold inline-flex items-center hover:underline mt-4"
          >
            Learn more about me <span className="ml-2">↩️</span>
          </a>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl w-[200] grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
        {/* Left: Passion Paragraph */}
        <div className="bg-black rounded-lg shadow-lg flex items-start justify-start">
          <p className="text-gray-300 text-lg leading-relaxed text-center lg:text-left">
            My inner passion led me to interior design, where I celebrate the
            harmony of minimalism and space. My unique style reflects the
            perfect harmony of sleekness and functionality. Each project is an
            opportunity for me to blend my clients' personalities and styles
            with my own creative vision, creating truly unique and inspiring
            spaces.
          </p>
        </div>

        {/* Right: Images Section */}
        <div className="relative">
          <img
            src="/project1.jpeg"
            alt="Interior Design Project 1"
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <img
            src="/card3.jpeg"
            alt="Interior Design Project 2"
            className="w-[100] h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      
    </div>
    <div className="w-full h-[300px] border bg-gray-300">
  {/* Your content here */}
</div>

    </>
  );
}
