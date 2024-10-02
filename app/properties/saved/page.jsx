import SavePropertiesPage from "@/components/template/SavePropertiesPage";
import User from "@/models/User";
import getSession from "@/utils/getSession";
import connectDB from "@/utils/connectDB";
import { redirect } from "next/navigation";

const Saved = async () => {
  await connectDB();
  const session = await getSession();
  if (!session || !session.user) {
    redirect("/signin");
  }

  const { bookmarks } = await User.findById({ _id: session.user.id }).populate(
    "bookmarks"
  );

  return <SavePropertiesPage properties={bookmarks} />;
};

export default Saved;
