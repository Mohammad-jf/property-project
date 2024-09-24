import PropertyCard from "../modules/PropertyCard";

const SavePropertiesPage = ({ properties }) => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Prooperties</h1>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard property={property} key={property._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavePropertiesPage;
