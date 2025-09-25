import { ZapIcon } from "lucide-react";

const RateLimited = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Glassy Container */}
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <div className="flex flex-col md:flex-row items-center p-6">
          {/* Icon */}
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 rounded-full mb-4 md:mb-0 md:mr-6 shadow-md">
            <ZapIcon className="size-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-2xl font-extrabold font-mono tracking-tight 
                         bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                         bg-clip-text text-transparent 
                         drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] 
                         hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)] 
                         transition-all duration-500"
            >
              Rate Limit Reached
            </h3>
            <p className="text-base-content text-white/80 mb-1">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="text-sm text-white/60">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimited;
