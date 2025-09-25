import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      
      
            <img
        src="/logo.png"
        alt="Notefy Logo"
        className="w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_0_30px_rgba(139,92,246,0.8)]"
      />

      <h3
        className="text-2xl font-extrabold font-mono tracking-tight
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                   bg-clip-text text-transparent
                   drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      >
        Welcome to Notefy, your minimalistic note-taking app
      </h3>

      <p className="text-white/70">
        No notes yet, feel free to add :D
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
