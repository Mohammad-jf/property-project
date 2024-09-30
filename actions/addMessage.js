"use server";
import Message from "@/models/Message";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";

async function addMessage(previousState, formData) {
  await connectDB();
  const session = await getSession();

  if (!session.user.id) {
    throw new Error("user id is required");
  }

  if (session?.user?.id === formData.get("recipient")) {
    return { error: "you can not send a message to your self" };
  }

  const newMessage = await Message.create({
    sender: session.user.id,
    recipient: formData.get("recipient"),
    property: formData.get("property"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    body: formData.get("body"),
  });

  return { submitted: true };
}

export default addMessage;
