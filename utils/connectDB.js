import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Db has been connected");
      return;
    } else {
      await mongoose.connect(uri);
      console.log("Db connected");
    }
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
