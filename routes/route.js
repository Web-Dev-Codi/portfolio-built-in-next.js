import { Resend } from "resend";
import express from "express";
import { check, validationResult } from "express-validator";
import Client from "../models/ClientsModel.js";

const router = express.Router();
const resend = new Resend(process.env.RESEND_KEY);

router.post(
  "/success.html",
  [
    check("name").isLength({ min: 3 }).trim().escape(),
    check("email").isEmail().normalizeEmail(),
  ],
  async (req, res) => {
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

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");

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
      res.format({
        "text/html": () => res.redirect(303, "/success.html"),
        "application/json": () => res.json({ success: true }, { data }),
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          success: false,
          error: "Adding Form submission went wrong Bro, Investigate",
        });
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        errors: errors.array(),
      });
    }

    res.end();
  },
);

export default router;
