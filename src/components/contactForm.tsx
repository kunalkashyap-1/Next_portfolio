"use client";
import Image from "next/image";
import upRightArrow from "../up-right-arrow.png";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
      <h1 className="contact-title">Love to hear from you,</h1>
      <h1 className="contact-title">Get in touch 👋</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between my-7 flex-wrap">
          <div style={{ width: "45%" }} className="flex flex-col gap-3">
            <label htmlFor="name" style={{ color: "#f8f8f2" }}>
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="full-width pretty-input"
              placeholder="Please enter your name"
              required
            />
          </div>
          <div style={{ width: "45%" }} className="flex flex-col gap-3">
            <label htmlFor="email" style={{ color: "#f8f8f2" }}>
              Your email
            </label>
            <input
              type="email"
              id="email"
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
          <Image
            src={upRightArrow}
            alt="up icon"
            width={17}
            height={10}
          />
        </button>
      </form>
    </div>
  );
}
