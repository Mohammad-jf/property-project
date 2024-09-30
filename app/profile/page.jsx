import ProfilePage from "@/components/template/ProfilePage";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import Property from "@/models/Property";
import User from "@/models/User";
const Profile = async () => {
  await connectDB();
  const session = await getSession();
  if (!session || !session.user) {
    redirect("/");
  }
  const properties = await Property.find({ owner: session?.user?.id }).lean();
  const user = await User.findById({ _id: session?.user?.id });

  return <ProfilePage user={user} properties={properties} />;
};

export default Profile;
