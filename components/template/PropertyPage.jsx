import PropertyHeaderImage from "@/components/modules/PropertyHeaderImage";
import PropertyDetails from "../modules/PropertyDetails";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyImages from "../modules/PropertyImages";

const PropertyPage = ({ property }) => {
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      {/* main section */}
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>

      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
