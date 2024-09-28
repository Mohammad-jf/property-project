import mongoose, { models, Schema } from "mongoose";

const messageSchema = mongoose.Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
    property: { type: Schema.Types.ObjectId, ref: "Property", required: true },
    name: { type: String, required: [true, "Name Is Required"] },
    email: { type: String, required: [true, "email is required"] },
    phone: String,
    body: String,
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = models.Message || mongoose.model("Message", messageSchema);

export default Message;
