"use server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import getSession from "@/utils/getSession";

async function checkBookmarkStatus(propertyId) {
  await connectDB();
  const session = await getSession();

  if (!session || !session.user) {
    throw new Error("unAuthorize");
  }

  const user = await User.findById({ _id: session.user.id });

  let isBookMarked = user.bookmarks.includes(propertyId);

  if (isBookMarked) {
    return true;
  } else {
    return false;
  }
}

export default checkBookmarkStatus;
