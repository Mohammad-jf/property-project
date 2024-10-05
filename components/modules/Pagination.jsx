import Link from "next/link";

const pagination = ({ page, propertyPerPage, total }) => {
  const totalPages = Math.ceil(total / propertyPerPage);
  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      {page > 1 ? (
        <Link
          href={`/properties?page=${page - 1}`}
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
        >
          Previous
        </Link>
      ) : null}

      <span clasName="mx-2">
        Page {page} of {totalPages}
      </span>

      {page < totalPages ? (
        <Link
          href={`/properties?page=${page + 1}`}
          className="ml-2 px-2 py-1 border border-gray-300 rounded"
        >
          Next
        </Link>
      ) : null}
    </section>
  );
};

export default pagination;
