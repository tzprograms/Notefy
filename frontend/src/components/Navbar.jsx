import { PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom"; // ✅ use react-router-dom, not react-router

const Navbar = () => {
  return (
<header className="sticky top-0 z-50">
  <div className="mx-auto max-w-6xl px-6 py-2">
    <div
      className="flex items-center justify-between
                 rounded-2xl border border-white/20
                 bg-white/10 backdrop-blur-2xl
                 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
    >
      {/* Logo */}
      <h1
  className="px-4 py-2 text-3xl md:text-4xl font-extrabold 
             bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
             bg-clip-text text-transparent 
             drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
             animate-gradient 
             hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]
             transition-all duration-500"
>
  Notefy
</h1>

      {/* Button */}
      <div className="px-4">
        <Link
          to="/create"
          className="flex items-center gap-2 rounded-lg
                     bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                     px-4 py-2 text-white font-medium
                     shadow-md hover:shadow-xl hover:scale-105
                     transition-all duration-300"
        >
          <PlusIcon className="size-5" />
          <span>Create Note</span>
        </Link>
      </div>
    </div>
  </div>
</header>
  );
};

export default Navbar;
