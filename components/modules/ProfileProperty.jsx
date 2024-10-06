"use client";
import Link from "next/link";
import Image from "next/image";
import deleteProperty from "@/actions/deleteProperty";
import { toast } from "react-toastify";

const ProfileProperty = ({ property }) => {
  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      "are you sure you want to delete this property ?"
    );

    if (!confirmed) {
      return;
    }

    await deleteProperty(propertyId);
    toast.success("Successfuly Deleted");
  };

  return (
    <div className="mb-10">
      <Link href={`/properties/${property._id}`}>
        <Image
          className="h-60 w-full rounded-md object-cover"
          src={property.images[0]}
          alt={property.name}
          width={1000}
          height={300}
        />
      </Link>
      <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">
          Address: {property.location.street} {property.location.city}{" "}
          {property.location.state}
        </p>
      </div>
      <div className="mt-2">
        <Link
          href={`/properties/${property._id}/edit`}
          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDeleteProperty(property._id)}
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileProperty;
