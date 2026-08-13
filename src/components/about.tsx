import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import TechStack from "./skillCard";
import Image from "next/image";

const About = () => {
  return (
    <div className="about min-h-screen">
      <div className="bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      <Parallax speed={-8}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="about"
          className="title-heading text-center py-12 sm:py-16 sm:px-8 md:px-32 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          About Me
        </motion.h1>
      </Parallax>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse md:gap-12">
          <Parallax speed={5} className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8 md:mb-0 h-full"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                animate={{ x: [0, 10, -10, 0], y: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center"
              >
                <Image
                  src="/profile.png"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  width={500}
                  height={500}
                  alt="profile"
                />
              </motion.div>
            </motion.div>
          </Parallax>

          <Parallax speed={5} className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ willChange: "transform" }}
            >
              <p className="text-justify">
                An <span className="text-emerald-300">AI Systems Engineer</span> with 2+ years of experience building backend systems and LLM-powered applications. I specialize in{" "}
                <span className="text-emerald-300">Python, FastAPI, RAG</span>, and{" "}
                <span className="text-emerald-300">local LLM inference</span>, with additional full-stack expertise across the MERN ecosystem.
              </p>
              <p className="text-justify">
                Experienced in developing real-time AI pipelines, production API development, and scalable solutions. My mission is to transform ideas into innovative,
                AI-powered products. Committed to continuous growth and staying ahead in emerging technologies, I work with{" "}
                <span className="text-emerald-300">LLMs, semantic search, prompt engineering</span>, and{" "}
                <span className="text-emerald-300">model serving</span> to create impactful solutions that drive success.
              </p>
            </motion.div>
          </Parallax>
        </div>

        <Parallax speed={5} className="flex-1 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TechStack />
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
};

export default About;
