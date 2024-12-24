"use client"
export default function Footer() {
  return (
    <footer className=" text-white py-4 ">
      <div className="bg-gray-200 h-auto flex justify-center items-center py-4 mt-10 mb-10">
 <div className="flex gap-4">
   <span className="w-2 h-2 bg-gray-950 rounded-full"></span>
   <span className="w-2 h-2 bg-gray-950 rounded-full"></span>
   <span className="w-2 h-2 bg-gray-950 rounded-full"></span>
 </div>
</div>
       <div className="text-center bg-white  py-5 text-black text-sm uppercase tracking-wider">
        VIKTÓRIA RÉTFALVI © 2025 ALL RIGHTS RESERVED.
        </div>
      <div  className="bg-black text-white py-8">
      
      <div className="max-w w-full h-full-screen-xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-12 bg-black">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <h1 className="text-xl tracking-wide">v_hd</h1>
            <div className="flex flex-wrap gap-2">
              <h1 className="text-lg md:text-xl leading-tight">Take the</h1>
              <span className="bg-black text-black text-lg md:text-xl leading-tight px-2">
                _space
              </span>
              <div className="flex flex-wrap gap-4 items-start">
                <h1 className="text-sx md:text-sm leading-tight">seriously.</h1>
                <div className="flex flex-col  text-xs ">
                  <p>HOME</p>
                  <p>VIKTORIA</p>
                  <p>DESIGN</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-white">
              <p>Viktória Rétfalvi</p>
              <p>hi@vhd.hu</p>
              <div className="flex justify-between items-center gap-40 w-full text-white whitespace-nowrap">
  {/* Phone Number */}
  <div className="w-fit">
    <p className="text-sm">+36 999 999 999</p>
  </div>

  {/* Links */}
  <div className="flex items-center space-x-20">
    <a
      href="#"
      className="hover:text-gray-400 text-sm md:text-base pl-10"
    >
      _ Terms and Conditions
    </a>
    <a
      href="#"
      className="hover:text-gray-400 text-sm md:text-base"
    >
      _ Privacy Policy
    </a>
    <a
      href="#"
      className="hover:text-gray-400 text-sm md:text-base"
    >
      _ Security
    </a>
  </div>
</div>

            </div>
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

        {/* Bottom Section */}
      </div>
      </div>
    </footer>
  );
}