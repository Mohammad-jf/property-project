import Pagination from "../modules/Pagination";
import PropertyCard from "../modules/PropertyCard";

const PropertiesPage = ({ properties, page, propertyPerPage, total }) => {
  const showPagination = total > propertyPerPage;
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard property={property} key={property._id} />
            ))}
          </div>
        )}
        {showPagination ? (
          <Pagination
            page={page}
            propertyPerPage={propertyPerPage}
            total={total}
          />
        ) : null}
      </div>
    </section>
  );
};

export default PropertiesPage;
