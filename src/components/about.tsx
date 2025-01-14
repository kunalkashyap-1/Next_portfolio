import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import config from "@/config";
import TechStack from "./skillCard";

const About = () => {
  return (
    <div className="about relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      <Parallax speed={-10}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="about"
          className="title-heading text-center py-16"
        >
          About Me
        </motion.h1>
      </Parallax>

      <div className="container mx-auto p-4">
        <div className="md:flex md:flex-row-reverse md:items-center md:gap-12">
          <Parallax speed={15} className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center p-8"
            >
              <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center">
                Image here
              </div>
            </motion.div>
          </Parallax>

          <Parallax speed={5} className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 text-lg">
                {`Hello, I'm Kunal Kashyap, a highly skilled Full Stack Developer proficient in 
                the MERN stack. My focus is on building resilient and scalable web applications, 
                harnessing the potential of MongoDB, Express.js, React, and Node.js to achieve 
                seamless user interactions.`}
              </p>
              <p className="text-lg">
                {`With a strong foundation in front-end and back-end 
                development, I aim to develop intuitive and efficient solutions that breathe life 
                into ideas. Committed to continuous growth and keeping up with emerging 
                technologies.`}
              </p>
            </motion.div>
          </Parallax>
        </div>
        <Parallax speed={5} className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
          >
            <TechStack />
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
};

export default About;