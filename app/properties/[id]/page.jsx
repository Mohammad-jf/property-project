import PropertyPage from "@/components/template/PropertyPage";
import connectDB from "@/utils/connectDB";
import Property from "./../../../models/Property";

const SingleProperty = async ({ params }) => {
  await connectDB();
  const property = await Property.findById({ _id: params.id }).lean();
  return (
    <>
      <PropertyPage property={property} />
    </>
  );
};

export default SingleProperty;
