"use server";
import Property from "@/models/Property";
import cloudinary from "@/utils/cloudinary";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { revalidatePath } from "next/cache";

async function deleteProperty(id) {
  await connectDB();
  const session = await getSession();

  if (!session || !session.user.id) {
    throw new Error("userId is required");
  }

  const property = await Property.findById(id);

  if (property.owner.toString() !== session.user.id) {
    throw new Error("UnAuthorized");
  }

  //extract public id from image urls
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  //delete images from cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("propertyProject/" + publicId);
    }
  }

  await property.deleteOne();
  revalidatePath("/", "layout");
}

export default deleteProperty;
