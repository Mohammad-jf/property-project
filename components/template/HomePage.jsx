import Property from "@/models/Property";
import Hero from "../modules/Hero";
import HomeProperties from "../modules/HomeProperties";
import InfoBoxes from "../modules/InfoBoxes";
import connectDB from "@/utils/connectDB";

const HomePage = async () => {
  await connectDB();
  const properties = await Property.find({})
    .sort({ createdAt: -1 }) //newer first
    .limit(3)
    .lean();

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties properties={properties} />
    </>
  );
};

export default HomePage;
