import { ArrowLeftIcon, TruckElectric } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";


const CreateNote = () => {
  const [title , setTitle] = useState("");
  const [content , setContent] = useState("");
  const [loading , setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please provide all fields");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 3000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          to={"/"}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
        >
          <ArrowLeftIcon className="size-5" />
          Head Back to Notes
        </Link>

        {/* Glassy Form Card */}
        <div
          className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl 
                     shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-6"
        >
          {/* Title */}
          <h2
            className="text-2xl font-extrabold font-mono tracking-tight mb-6
                       bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                       bg-clip-text text-transparent 
                       drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          >
            Write New Note
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-white/70 mb-2">Title</label>
              <input
                type="text"
                placeholder="Note Title"
                className="w-full px-4 py-2 rounded-lg border border-white/20 
                           bg-white/5 backdrop-blur-md text-white 
                           placeholder-white/40 
                           focus:outline-none focus:ring-2 focus:ring-pink-500/50
                           transition-all"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content Input */}
            <div>
              <label className="block text-white/70 mb-2">Content</label>
              <textarea
                placeholder="Write your note here..."
                className="w-full px-4 py-3 h-32 rounded-lg border border-white/20 
                           bg-white/5 backdrop-blur-md text-white 
                           placeholder-white/40 
                           focus:outline-none focus:ring-2 focus:ring-pink-500/50
                           transition-all"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-lg
                           bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                           px-6 py-2 text-white font-medium
                           shadow-md hover:shadow-xl hover:scale-105
                           transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

}

export default CreateNote