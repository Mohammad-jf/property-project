"use server";
import Message from "@/models/Message";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";

async function deleteMessage(messageId) {
  await connectDB();
  const session = await getSession();

  if (!session || !session.user.id) {
    throw new Error("unAuthorize");
  }

  const message = await Message.findById({ _id: messageId });
  if (!message) throw new Error("message not found");

  if (message.recipient.toString() !== session.user.id)
    throw new Error("unAuthorize");

  await Message.deleteOne();
  revalidatePath("/messages", "page");
}

export default deleteMessage;
