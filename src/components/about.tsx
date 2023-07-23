"use client";
import Float from "./float";
import config from "../config";

export default function about() {
  return (
    <div data-aos="fade-up" className="about">
      <h1 id="about" className="title-heading">
        About Me
      </h1>
      <div>
        <div
          className={`md:flex md:flex-row-reverse`}
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration={800}
        >
          <div className="flex justify-center">
            <Float />
          </div>
          <div>
            <p>
              {`Hello, I'm Kunal Kashyap, a highly skilled Full Stack Developer proficient in 
            the MERN stack. My focus is on building resilient and scalable web applications, 
            harnessing the potential of MongoDB, Express.js, React, and Node.js to achieve 
            seamless user interactions.`}
            </p>
            <p>
              {` With a strong foundation in front-end and back-end 
            development, I aim to develop intuitive and efficient solutions that breathe life 
            into ideas. Committed to continuous growth and keeping up with emerging 
            technologies.`}
            </p>
          </div>
        </div>
        <div>
          <p data-aos="fade-right" data-aos-delay="100" data-aos-duration={800}>
            <span>Here are a few skills I’ve have acquired: </span>
          </p>
          <div className="flex flex-wrap gap-8">
            <div data-aos="fade-right" data-aos-delay="150" className="card">
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  margin: "0",
                  paddingBottom: "10px",
                }}
              >
                Dev
              </p>
              <ul>
                {config.skills.dev.map((skill, i: number) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration={800}
              className="card"
            >
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  margin: "0",
                  paddingBottom: "10px",
                }}
              >
                Tools
              </p>
              <ul>
                {config.skills.tools.map((skill, i: number) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
