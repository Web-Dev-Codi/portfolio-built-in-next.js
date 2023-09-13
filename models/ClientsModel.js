import mongoose from "mongoose";

// Client DB Schema
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Client = mongoose.model.client || mongoose.model("Client", clientSchema);

export default Client;
