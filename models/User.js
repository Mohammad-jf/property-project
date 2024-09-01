import mongoose, { models, Schema } from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "Email already exist"],
    },

    username: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "username already exist"],
    },

    image: {
      type: "String",
    },

    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
