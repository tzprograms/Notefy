import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      
      <div
        className="rounded-full p-8
                   border border-white/20 bg-white/10 backdrop-blur-2xl
                   shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
      >
        <NotebookIcon className="size-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
      </div>

      
      <h3
        className="text-2xl font-extrabold font-mono tracking-tight
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                   bg-clip-text text-transparent
                   drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      >
        Welcome to Notefy , Your minimalistic note taking app
        
      </h3>

      
      <p className="text-white/70">
        No Notes Yet , Feel Free To Add :D
      </p>

      <Link
        to="/create"
        className="flex items-center gap-2 rounded-lg
                   bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                   px-4 py-2 text-white font-medium
                   shadow-md hover:shadow-xl hover:scale-105
                   transition-all duration-300"
      >
        Write Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
