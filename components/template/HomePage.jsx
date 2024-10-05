import FeaturedProperties from "../modules/FeaturedProperties";
import Hero from "../modules/Hero";
import HomeProperties from "../modules/HomeProperties";
import InfoBoxes from "../modules/InfoBoxes";

const HomePage = ({ properties }) => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties properties={properties} />
    </>
  );
};

export default HomePage;
