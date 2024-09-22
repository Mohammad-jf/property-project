import Property from "@/models/Property";
import PropertyEditForm from "../modules/PropertyEditForm";
import connectDB from "@/utils/connectDB";

const EditPage = async ({ id }) => {
  await connectDB();
  const propertyInfo = await Property.findById({ _id: id }).lean();

  if (!propertyInfo) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }
  return (
    <section className="bg-blue-50 ">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <PropertyEditForm
            propertyInfo={JSON.parse(JSON.stringify(propertyInfo))}
          />
        </div>
      </div>
    </section>
  );
};

export default EditPage;
