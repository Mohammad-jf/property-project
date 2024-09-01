import PropertiesPage from "@/components/template/PropertiesPage";
import Property from "@/models/Property";
import connectDB from "@/utils/connectDB";

const Properties = async () => {
  await connectDB();
  const properties = await Property.find({}).lean();

  return <PropertiesPage properties={properties} />;
};

export default Properties;
