import connectDB from "@/app/lib/mongodb";
import Client from "@/app/models/client.js";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    await connectDB();
    await Client.create({ name, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
