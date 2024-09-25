import HomePage from "@/components/template/HomePage";
import Property from "@/models/Property";
import connectDB from "@/utils/connectDB";

const Home = async () => {
  await connectDB();
  const properties = await Property.find({})
    .sort({ createdAt: -1 }) //newer first
    .limit(3)
    .lean();
    
  return <HomePage properties={properties}/>;
};

export default Home;
