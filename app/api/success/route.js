import connectDB from "../../../config/database.js";
import Client from "../models/ClientsModel.js";
import { NextResponse } from "next/server.js";
import { Contact } from "../../components/Contact.jsx";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

connectDB();

export async function POST() {
  // instantiate a new form sent
  const formSubmit = new Client({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  const output = `
    <p> You have a new contact message </p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  try {
    const savedFormSubmissions = await formSubmit.save();
      
    const data = await resend.emails.send({
      from: "Form Submission <onboarding@resend.dev>",
      to: "cordiscobrian@gmail.com",
      subject: "New Client Form Submission",
      html: output,
    });
    route("/success");
    console.log(reqBody);

    console.log(savedFormSubmissions);

    if (req.body.simulateError) throw new Error("error saving contact!");

    console.log(`contact from ${req.body.name} <${req.body.email}>`);

    return NextResponse.json({
      message: "Form Submitted Successfully",
      success: true,
      savedFormSubmissions,
    });
  } catch (error) {
    return (
      NextResponse.json({ error: error.message }, { status: 500 }),
      console.log(`Error: ${error.message}`)
    );
  }
}
