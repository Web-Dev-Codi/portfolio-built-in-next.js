import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopoplogy: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host} My Hommi`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}
