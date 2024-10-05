import PropertiesPage from "@/components/template/PropertiesPage";
import Property from "@/models/Property";
import connectDB from "@/utils/connectDB";

const Properties = async ({ searchParams }) => {
  await connectDB();
  const { page = 1 } = searchParams;
  const propertyPerPage = 9;
  const skip = (page - 1) * propertyPerPage;
  const total = await Property.countDocuments({}).lean();
  // .lean optimses query performance by returning plain js objects as long as its readonly
  const properties = await Property.find({}).skip(skip).limit(propertyPerPage);

  return (
    <PropertiesPage
      properties={properties}
      page={parseInt(page)}
      propertyPerPage={parseInt(propertyPerPage)}
      total={total}
    />
  );
};

export default Properties;
