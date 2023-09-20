/** @format */

import mongoose from "mongoose";
import { auth } from "../utils/Interface";

interface iAuth extends auth, mongoose.Document {}

const authSchema = new mongoose.Schema<auth>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email address.",
    ],
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  avarta: {
    type: String,
  },
  avartaID: {
    type: String,
  },
});

export default mongoose.model<iAuth>("auth", authSchema);
