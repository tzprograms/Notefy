import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import toast from "react-hot-toast";
import api from "../lib/axios";


const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    
    e.preventDefault(); // Avoid navigation behaviour 

    if (!window.confirm("Are you sure you want to erase this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // delete note in real time without need of refreshing 
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };
	
return (
  <Link
    to={`/note/${note._id}`}
    className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl 
               shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
               hover:shadow-xl hover:scale-[1.01] 
               transition-all duration-300 block"
  >
    <div className="p-6">
      {/* Title */}
      <h3
        className="text-xl font-extrabold font-mono tracking-tight 
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                   bg-clip-text text-transparent 
                   drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      >
        {note.title}
      </h3>

      {/* Content */}
      <p className="text-white/80 line-clamp-3 mt-2">{note.content}</p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-white/60">
          {formatDate(new Date(note.createdAt))}
        </span>

        <div className="flex items-center gap-2">
          <PenSquareIcon className="size-4 text-white/70" />
          <button
            className="btn btn-ghost btn-xs text-red-400 hover:text-red-500 transition-colors"
            onClick={(e) => handleDelete(e, note._id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  </Link>
);
}


export default NoteCard