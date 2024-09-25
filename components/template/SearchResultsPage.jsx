import PropertySearchForm from "../modules/PropertySearchForm";
import PropertiesPage from "./PropertiesPage";

const SearchResultsPage = ({ properties }) => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <PropertiesPage properties={properties} />
    </>
  );
};

export default SearchResultsPage;
