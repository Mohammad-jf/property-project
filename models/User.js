import mongoose, { models, Schema } from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "Email already exist"],
    },

    password: {
      type: String,
      required: true,
    },

    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
