"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    console.log("Name: ", name)
    console.log("Email: ", email)
    console.log("Message: ", message)

     const res = await fetch("api/success", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setName("");
      setEmail("");
      setMessage("");
    }
    router.push("/success");
  };


  return (
        <div className="form_wrapper" id="contact">
            <h3 className="contact">Contact</h3>
            <form onSubmit={handleSubmit} id="form">
                <div>
                    <label htmlFor="name">Name</label>
             <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="true"
                required
                />
                </div>
                <div>
                    <label htmlFor="email">Email address </label>
             <input
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                autoComplete="true"
                required
                />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
               <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Leave a message for a quick response."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required >
              </textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>

  )
}
