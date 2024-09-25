import EditPage from "@/components/template/EditPage";
import connectDB from "@/utils/connectDB";
const Edit = async ({ params }) => {
  await connectDB();
  const propertyInfo = await Property.findById({ _id: params.id }).lean();

  return <EditPage propertyInfo={propertyInfo} />;
};

export default Edit;
