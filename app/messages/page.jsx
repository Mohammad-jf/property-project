import MessagesPage from "@/components/template/MessagesPage";
import Message from "@/models/Message";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

const Messages = async () => {
  await connectDB();
  const session = await getSession();
  if (!session || !session.user) redirect("/signin");

  const readMessages = await Message.find({
    recipient: session.user.id,
    read: true,
  })
    .sort({ createdAt: -1 })
    // get sender username
    .populate("sender", "name")
    //get the property name
    .populate("property", "name")
    .lean();

  const unreadMessages = await Message.find({
    recipient: session.user.id,
    read: false,
  })
    .sort({ createdAt: -1 })
    .populate("sender", "name")
    .populate("property", "name")
    .lean();

  const messages = [...readMessages, ...unreadMessages].map((messageDoc) => {
    const message = JSON.parse(JSON.stringify(messageDoc));
    message.sender = JSON.parse(JSON.stringify(messageDoc.sender));
    message.property = JSON.parse(JSON.stringify(messageDoc.property));
    return message;
  });

  return <MessagesPage messages={messages} />;
};

export default Messages;
