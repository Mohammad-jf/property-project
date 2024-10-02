"use server";
import Message from "@/models/Message";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";

async function markMessageAsRead(messageId) {
  await connectDB();
  const session = await getSession();

  if (!session || !session.user) {
    throw new Error("unAuthorize");
  }

  const userId = session.user.id;

  const message = await Message.findById({ _id: messageId });
  if (!message) throw new Error("message not found");

  if (message.recipient.toString() !== userId) throw new Error("unAuthorize");

  message.read = !message.read;
  await message.save();
  revalidatePath("/messages", "page");
  return message.read;
}

export default markMessageAsRead;
