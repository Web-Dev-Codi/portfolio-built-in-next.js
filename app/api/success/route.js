import connectDB from "@/app/lib/mongodb";
import Client from "@/app/models/client.js";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();


  const output = `
    <p> You have a new contact message </p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    `;

  try {
    await connectDB();
    await Client.create({ name, email, message });

    const data = await resend.emails.send({
      from: "Form Submission <onboarding@resend.dev>",
      to: "cordiscobrian@gmail.com",
      subject: "New Client Form Submission",
      html: output,
    });

    console.log(data);
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    }, data);
    
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
