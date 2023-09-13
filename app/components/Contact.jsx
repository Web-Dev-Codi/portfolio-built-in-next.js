
"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Contact() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function onCreate(e){
    e.preventDefault();
    try {
      setData();
      console.log("Success");
      router.push("/success");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
        <div className="form_wrapper" id="contact">
            <h3 className="contact">Contact</h3>
            <form id="form">
                <div>
                    <label htmlFor="name">Name</label>
             <input
                type="text"
                name="name"
                id="name"
                minLength="3"
                maxLength="30"
                placeholder="Name"
                onChange={(e) => setData({...data, name: e.target.value})}
                autoComplete="true"
                required
                />
                </div>
                <div>
                    <label htmlFor="email">Email address </label>
             <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setData({...data, email: e.target.value})}
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
                onChange={(e) => setData({...data, message: e.target.value})}
                required >
              </textarea>
                </div>
                <button onClick={onCreate} type="submit" value="Submit">Send</button>
            </form>
        </div>
    </div>
  )
}
