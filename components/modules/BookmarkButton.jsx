"use client";
import bookmarkProperty from "@/actions/bookmarkProperty";
import { useSession } from "next-auth/react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleClick = async () => {
    if (!userId) {
      toast.error("you need to be signed in");
      return;
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) {
        return toast.error(res.error);
      }
      toast.success(res.message);
    });
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
