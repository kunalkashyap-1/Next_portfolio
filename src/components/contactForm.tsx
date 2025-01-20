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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY!;

    await emailjs.sendForm(serviceId, templateId, form.current!, publicKey).then(
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
    <div className="contact min-h-screen px-4 sm:px-8 lg:px-16 py-16">
      <Parallax speed={-2}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" id="contact">
            Let&apos;s connect
          </h1> */}
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
            id="contact"
          >
            Let&apos;s connect👋
          </h1>
        </motion.div>
      </Parallax>
      <Parallax speed={5}>
        <form ref={form} onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:gap-8 gap-4"
          >
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full mt-1 p-3 rounded border bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Please enter your name"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full mt-1 p-3 rounded border bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6"
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full mt-1 p-3 rounded border bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Let me know your thoughts"
              required
            ></textarea>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full sm:w-auto mt-6 px-6 py-3 bg-green-400 text-black font-semibold rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center gap-2"
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
