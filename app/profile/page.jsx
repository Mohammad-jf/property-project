import ProfilePage from "@/components/template/ProfilePage";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import Property from "@/models/Property";
const Profile = async () => {
  await connectDB();
  const session = await getSession();
  if (!session || !session.user) {
    redirect("/");
  }
  const properties = await Property.find({ owner: session?.user?.id }).lean();

  return <ProfilePage session={session} properties={properties} />;
};

export default Profile;
