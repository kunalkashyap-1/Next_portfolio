"use client";
import Image from "next/image";
import upRightArrow from "../icons/up-right-arrow.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./toast";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY!;
    // console.log(publicKey);


    emailjs.sendForm(serviceId, templateId, form.current!, publicKey).then(
      (result) => {
        // console.log(result.text);
        setShowToast(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current?.reset();
  };

  return (
    <div className="contact">
      <h1 className="contact-title" id="contact">
        Love to hear from you,
      </h1>
      <h1 className="contact-title">Get in touch 👋</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="contact_inputs">
          <div
            style={{
              minWidth: "200px",
              flex: "1",
              marginRight: "10px",
            }}
            className="flex flex-col gap-3"
          >
            <label htmlFor="name" style={{ color: "#f8f8f2" }}>
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="full-width pretty-input"
              placeholder="Please enter your name"
              required
            />
          </div>
          <div
            style={{
              minWidth: "200px",
              flex: "1",
              marginRight: "10px",
            }}
            className="flex flex-col gap-3"
          >
            <label htmlFor="email" style={{ color: "#f8f8f2" }}>
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="full-width pretty-input"
              placeholder="Enter your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 my-8">
          <label htmlFor="message" style={{ color: "#f8f8f2" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="full-width pretty-input"
            placeholder="Let me know your thoughts"
            required
          ></textarea>
        </div>
        <button
          style={{
            width: "45%",
            backgroundColor: "#64ffda",
            color: "#333",
            fontWeight: "600",
          }}
          className="p-3 my-4 flex align-center justify-center gap-2"
          type="submit"
        >
          Just Send
          <Image src={upRightArrow} alt="up icon" width={17} height={10} />
        </button>
      </form>
      <Toast
        message="Message sent successfully! We'll get back to you soon."
        showToast={showToast}
      />
    </div>
  );
}
