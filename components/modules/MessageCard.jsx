"use client";

import markMessageAsRead from "@/actions/markMessageAsRead";
import { toast } from "react-toastify";
import { useState } from "react";
import deleteMessage from "@/actions/deleteMessage";
import { useGlobalContext } from "@/context/GlobalContext";

const MessageCard = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const { setUnreadCount } = useGlobalContext();

  const handleReadClick = async () => {
    const read = await markMessageAsRead(message._id);
    setIsRead(read);
    setUnreadCount((prev) => (read ? prev - 1 : prev + 1));
    toast.success(`Marked as ${read ? "Read" : "New"}`);
  };

  const handleDeleteClick = async () => {
    const confirmed = window.confirm(
      "Are You Sure You Want To Delete This Message ?"
    );

    if (!confirmed) {
      return;
    }

    const res = await deleteMessage(message._id);
    if (res?.error) {
      toast.error(res?.error);
    } else {
      setUnreadCount((prev) => (isRead ? prev : prev - 1));
      toast.success("Message Deleted");
    }
  };
  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border *:border-gray-200">
      {!isRead && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md">
          New{" "}
        </div>
      )}
      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquery:</span>{" "}
        {message.property.name}
      </h2>
      <p className="text-gray-700">{message.body}</p>

      <ul className="mt-4">
        <li className="mt-2">
          <strong>Reply Email: </strong>{" "}
          <a className="text-blue-500" href={`mailto:${message.email}`}>
            {message.email}
          </a>
        </li>
        <li className="mt-2">
          <strong>Reply Phone: </strong>{" "}
          <a className="text-blue-500" href={`tel:${message.phone}`}>
            {message.phone}
          </a>
        </li>
        <li className="mt-2">
          <strong>Recived: </strong>{" "}
          {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>

      <button
        onClick={handleReadClick}
        className="mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md"
      >
        {isRead ? "Mark As New" : "Mark As Read"}
      </button>
      <button
        onClick={handleDeleteClick}
        className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default MessageCard;
