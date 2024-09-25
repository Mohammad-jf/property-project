import connectDB from "@/utils/connectDB";
import SearchResultsPage from "./../../../components/template/SearchResultsPage";
import Property from "@/models/Property";
import { redirect } from "next/navigation";

const SearchResults = async ({ searchParams: { location, propertyType } }) => {
  await connectDB();
  const locationPattern = new RegExp(location, "i");
  let query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { "location.street": locationPattern },
      { "location.city": locationPattern },
      { "location.state": locationPattern },
      { "location.zipcode": locationPattern },
    ],
  };

  if (propertyType && propertyType !== "All") {
    const typePattern = new RegExp(propertyType, "i");
    query.type = typePattern;
  }

  const propertyQuerySearshResults = await Property.find(query).lean();

  return (
    <SearchResultsPage
      properties={JSON.parse(JSON.stringify(propertyQuerySearshResults))}
    />
  );
};

export default SearchResults;
