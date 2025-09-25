import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: { type: String, index: true },
    email: { type: String, unique: true, required: true },
    name: String,
    picture: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
