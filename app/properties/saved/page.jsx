import SavePropertiesPage from "@/components/template/SavePropertiesPage";
import User from "@/models/User";
import getSession from "@/utils/getSession";
import connectDB from "@/utils/connectDB";

const Saved = async () => {
  await connectDB();
  const session = await getSession();
  if (!session || !session.user) {
    throw new Error("UnAuthorize");
  }

  const { bookmarks } = await User.findById({ _id: session.user.id }).populate(
    "bookmarks"
  );

  return <SavePropertiesPage properties={bookmarks} />;
};

export default Saved;
