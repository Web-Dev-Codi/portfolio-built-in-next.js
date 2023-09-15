import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB Connected Broski");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default connectDB;
