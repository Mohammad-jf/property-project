"use server";
import Message from "@/models/Message";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";

async function getUnreadMessageCount() {
  await connectDB();
  const session = await getSession();

  if (!session || !session.user) {
    throw new Error("unAuthorize");
  }

  const userId = session.user.id;

  const count = await Message.countDocuments({
    recipient: userId,
    read: false,
  });

  return { count };
}

export default getUnreadMessageCount;
