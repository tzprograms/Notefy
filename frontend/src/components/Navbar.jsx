import { PlusIcon, LogOut } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("token"); // check login state

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out");
    nav("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-2">
        <div className="flex flex-wrap items-center justify-between max-w-full overflow-hidden">

          <div className="flex items-center gap-3 px-4">
          <img
                src="/logo.png"
                alt="Notefy Logo"
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg shadow-lg 
                            hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]
                            transition-all duration-300"
          />
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight
                      bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                      bg-clip-text text-transparent 
                      drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
                      animate-gradient 
                      hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]
                      transition-all duration-500 pb-1"
          >
            Notefy
          </h1>


          </div>

          {/* Right-side buttons */}
          <div className="flex flex-wrap items-center gap-2 px-2 max-w-full">

            {token && (
              <Link
                to="/create"
                className="flex items-center gap-2 rounded-lg
                           bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                           px-4 py-2 text-white font-medium
                           shadow-md hover:shadow-xl hover:scale-105
                           transition-all duration-300 w-full sm:w-auto truncate"
              >
                <PlusIcon className="size-5" />
                <span>Create Note</span>
              </Link>
            )}

            {token && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg
                           border border-white/20 bg-white/10 backdrop-blur-2xl
                           px-4 py-2 text-white font-medium
                           shadow-md hover:shadow-xl hover:scale-105
                           transition-all duration-300 w-full sm:w-auto truncate"
              >
                <LogOut className="size-5" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
