"use server";
import Property from "@/models/Property";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/utils/cloudinary";

const addProperty = async (formData) => {
  await connectDB();
  const { userId } = await getSession();

  if (!userId) {
    throw new Error("user id is required");
  }

  // access all values from amenities and images
  const amenities = formData.getAll("amenities");
  const images = formData.getAll("images").filter((image) => image.name !== "");

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

  const imageUrls = [];

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // convert to base64
    const imageBase64 = imageData.toString("base64");

    // make req to cloudinary
    const res = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "propertyProject",
      }
    );
    imageUrls.push(res.secure_url);
  }

  propertyData.images = imageUrls;

  const newProperty = new Property(propertyData);
  await newProperty.save();
  revalidatePath("/", "layout");
  redirect(`/properties/${newProperty._id}`);
};

export default addProperty;
