import Message from "@/models/Message";
import connectDB from "@/utils/connectDB";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

async function addMessage(formData) {
  await connectDB();
  const { userId } = await getSession();

  if (!userId) {
    throw new Error("user id is required");
  }

  if (userId === formData.get("recipient")) {
    return { error: "you can not send a message to your self" };
  }

  const newMessage = new Message({
    sender: userId,
    recipient: formData.get("recipient"),
    property: formData.get("property"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    body: formData.get("body"),
  });

  await newMessage.save();
  return { submited: true };
}

export default addMessage;
