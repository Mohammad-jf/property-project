import EditPage from "@/components/template/EditPage";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";
import Property from "@/models/Property";
const Edit = async ({ params }) => {
  await connectDB();
  const session = await getSession();
  if (!session || !session.user) redirect("/signin");
  const propertyInfo = await Property.findById({ _id: params.id }).lean();

  return <EditPage propertyInfo={propertyInfo} />;
};

export default Edit;
