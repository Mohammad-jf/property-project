import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Db has been connected");
      return;
    } else {
      mongoose.set("strictQuery", true);
      await mongoose.connect(uri);
      console.log("Db connected");
    }
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
