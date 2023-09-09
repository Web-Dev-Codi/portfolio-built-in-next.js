import { NextResponse } from "next/server.js";
import { Contact } from "../../components/Contact.jsx";
import connectDB from "../../../config/database.js";
import Client from "../models/ClientsModel.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST() {
  // instantiate a new form sent
  const formSubmit = new Client({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    checkbox: req.body.checkbox,
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
    console.log(savedFormSubmissions);
    if (req.body.simulateError) throw new Error("error saving contact!");
    console.log(`contact from ${req.body.name} <${req.body.email}>`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
