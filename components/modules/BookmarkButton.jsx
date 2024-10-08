"use client";
import bookmarkProperty from "@/actions/bookmarkProperty";
import { useSession } from "next-auth/react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import checkBookmarkStatus from "@/actions/chekBookmarkStatus";
import Spinner from "./Spinner";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  // states
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (!userId) {
      return;
    }

    setLoading(true);
    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) {
        toast.error(res.error);
        setLoading(false);
      }

      if (res) setIsBookmarked(res);
      setLoading(false);
    });
  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("you need to be signed in");
      return;
    }

    setLoading(true);
    bookmarkProperty(property._id).then((res) => {
      if (res.error) {
        toast.error(res.error);
        setLoading(false);
        return;
      }
      setIsBookmarked(res.isBookMarked);
      setLoading(false);
      toast.success(res.message);
    });
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return isBookmarked ? (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Remove Bookmark
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
