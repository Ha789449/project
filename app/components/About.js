import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center mb-4 px-4">
        {/* Main Container */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: About Text */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-6">_ About Me</h2>
            <p className="bg-white text-black text-lg leading-relaxed mb-6 p-4 rounded-lg shadow-md">
              As a passionate interior designer, I am a devotee of minimalism
              and spatial harmony. I believe that sleek design not only provides
              an aesthetic experience but also makes everyday life more
              harmonious. With my unique style and personalized approach, I
              strive to create a real home for my clients in every project.
            </p>
            <a
              href="#"
              className="text-white font-semibold inline-flex items-center justify-center hover:underline mt-4"
            >
              Learn more about me <span className="ml-2">↩️</span>
            </a>

            {/* Second Section: Additional Content */}
            <div className="mt-12">
              <div className="bg-black text-gray-300 text-lg leading-relaxed p-6 rounded-lg shadow-md">
                <p>
                  My inner passion led me to interior design, where I celebrate
                  the harmony of minimalism and space. My unique style reflects
                  the perfect harmony of sleekness and functionality. Each project
                  is an opportunity for me to blend my clients' personalities and
                  styles with my own creative vision, creating truly unique and
                  inspiring spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Main Image */}
          <div className="relative flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Viktória Rétfalvi</h3>
            <Image
              src="/project1.jpeg"
              alt="About Main"
              width={600}
              height={400}
              className="w-full h-auto rounded-sm shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              priority
            />
            {/* Small Images Section */}
            <div className="grid grid-cols-3  justify-center lg:justify-start">
              <Image
                src="/small1.jpeg"
                alt="Small Image 1"
                width={170}
                height={150}
                className="w-[200px] h-[150px] rounded-sm shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <Image
                src="/small2.jpeg"
                alt="Small Image 2"
                width={170}
                height={150}
                className="w-[195px] h-[150px] rounded-sm shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <Image
                src="/small4.jpeg"
                alt="Small Image 3"
                width={170}
                height={150}
                className="w-[205px] h-[150px] rounded-sm shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
