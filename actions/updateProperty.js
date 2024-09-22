"use server";
import Property from "@/models/Property";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const updateProperty = async (propertyId, formData) => {
  await connectDB();
  const { userId } = await getSession();
  const property = await Property.findById({ _id: propertyId });

  //check user authorization
  if (!userId || userId !== property.owner.toString()) {
    throw new Error("user id is required");
  }

  // access all values from amenities and images
  const amenities = formData.getAll("amenities");

  const propertyData = {
    owner: userId,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_feet: formData.get("square_feet"),
    amenities,
    rates: {
      nightly: formData.get("rates.nightly"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
    },

    seller_info: {
      name: formData.get("seller-info.name"),
      email: formData.get("seller-info.email"),
      phone: formData.get("seller-info.phone"),
    },
  };

  const updatedProperty = await Property.findByIdAndUpdate(
    propertyId,
    propertyData
  );
  revalidatePath("/", "layout");
  redirect(`/properties/${updatedProperty._id}`);
};

export default updateProperty;
