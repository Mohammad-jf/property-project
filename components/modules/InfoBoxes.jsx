import Link from "next/link";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            title="For Renters"
            desc=" Find your dream rental property. Bookmark properties and contact owners."
            bgColor="bg-gray-100"
            linkText="  Browse Properties"
            buttonColor="bg-black"
          />

          <InfoBox
            title="For Property Owners"
            desc="List your properties and reach potential tenants. Rent as an airbnb or long term."
            bgColor="bg-blue-100"
            linkText="Add Property"
            buttonColor="bg-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
