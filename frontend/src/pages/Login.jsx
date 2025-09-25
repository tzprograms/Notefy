import { GoogleLogin } from "@react-oauth/google";
import { NotebookIcon } from "lucide-react";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const nav = useNavigate();

  const handleSuccess = async (resp) => {
    try {
      const { data } = await api.post("/auth/google", {
        credential: resp.credential,
      });
      localStorage.setItem("token", data.token);
      toast.success("Login successful");
      nav("/", { replace: true });
    } catch (err) {
      console.error(err);
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <div
        className="flex flex-col items-center justify-center space-y-8 max-w-md w-full mx-4
                   p-10 rounded-2xl
                   border border-white/20 bg-white/10 backdrop-blur-2xl
                   shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
      >
        {/* Icon */}
        <div
          className="rounded-full p-6
                     border border-white/20 bg-white/10 backdrop-blur-2xl
                     shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
        >
          <NotebookIcon className="size-12 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
        </div>

        {/* Heading */}
        <h1
          className="text-3xl font-extrabold font-mono tracking-tight
                     bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                     bg-clip-text text-transparent
                     drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        >
          Welcome to Notefy
        </h1>

        <p className="text-white/70 text-center">
          Sign in with Google to start capturing your thoughts.
        </p>

        {/* Google Login Button */}
        <div className="scale-110 hover:scale-125 transition-all duration-300">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => toast.error("Google login failed")}
            theme="filled_black"
            shape="pill"
            size="large"
          />
        </div>
      </div>
    </div>
  );
}
