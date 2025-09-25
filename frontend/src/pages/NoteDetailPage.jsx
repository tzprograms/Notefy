import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  console.log(note)

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to erase this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note Erased");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
  <div className="min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Notes
          </Link>

          <button
            onClick={handleDelete}
            className="flex items-center gap-2 rounded-lg
                       border border-red-500/40 text-red-400
                       px-4 py-2 font-medium
                       hover:bg-red-500 hover:text-white
                       transition-all duration-300"
          >
            <Trash2Icon className="h-5 w-5" />
            Delete Note
          </button>
        </div>

        {/* Glassy Edit Form */}
        <div
          className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl 
                     shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-6"
        >
          {/* Title Input */}
          <div className="mb-6">
            <label className="block text-white/70 mb-2">Title</label>
            <input
              type="text"
              placeholder="Note title"
              className="w-full px-4 py-2 rounded-lg border border-white/20 
                         bg-white/5 backdrop-blur-md text-white 
                         placeholder-white/40 
                         focus:outline-none focus:ring-2 focus:ring-pink-500/50
                         transition-all"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>

          {/* Content Input */}
          <div className="mb-6">
            <label className="block text-white/70 mb-2">Content</label>
            <textarea
              placeholder="Write your note here..."
              className="w-full px-4 py-3 h-32 rounded-lg border border-white/20 
                         bg-white/5 backdrop-blur-md text-white 
                         placeholder-white/40 
                         focus:outline-none focus:ring-2 focus:ring-pink-500/50
                         transition-all"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              disabled={saving}
              onClick={handleSave}
              className="flex items-center justify-center gap-2 rounded-lg
                         bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                         px-6 py-2 text-white font-medium
                         shadow-md hover:shadow-xl hover:scale-105
                         transition-all duration-300 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};
export default NoteDetailPage;