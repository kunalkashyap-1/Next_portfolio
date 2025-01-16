"use client";
import { GoArrowUpRight } from "react-icons/go";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./toast";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY!;

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey).then(
      () => {
        setShowToast(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current?.reset();
  };

  return (
    <div className="contact min-h-screen px-72 py-16">
      <Parallax speed={-5}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-32 my-24"
        >
          <h1 className="contact-title" id="contact">
            Love to hear from you,
          </h1>
          <h1 className="contact-title">Get in touch 👋</h1>
        </motion.div>
      </Parallax>
      <Parallax speed={5}>
        <form ref={form} onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact_inputs"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-3 my-8"
          >
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
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
            <GoArrowUpRight size={25} />
          </motion.button>
        </form>
      </Parallax>
      <Toast
        message="Message sent successfully! I'll get back to you soon."
        showToast={showToast}
      />
    </div>
  );
}
