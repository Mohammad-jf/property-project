"use server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
  await connectDB();
  const session = await getSession();

  if (!session || !session.user) {
    throw new Error("unAuthorize");
  }

  const userId = session.user.id;

  const user = await User.findById({ _id: userId });

  let message;

  let isBookMarked = user.bookmarks.includes(propertyId);
  if (isBookMarked) {
    // if already bookmarked then remove
    user.bookmarks.pull(propertyId);
    message = "BookMark Removed";
    isBookMarked = false;
  } else {
    user.bookmarks.push(propertyId);
    message = "BookMark Added";
    isBookMarked = true;
  }

  await user.save();
  revalidatePath("/properties/save", "page");
  return { message, isBookMarked };
}

export default bookmarkProperty;
