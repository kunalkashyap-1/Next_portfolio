import Image from "next/image";

export default function about() {
  return (
    <div >
      <h1 id="about" className="title-heading">About Me</h1>
      <hr />
      <div className="flex justify-between">
        <div>
          <p>
            {`Hello, I'm Kunal Kashyap, a highly skilled Full Stack Developer proficient in 
            the MERN stack. My focus is on building resilient and scalable web applications, 
            harnessing the potential of MongoDB, Express.js, React, and Node.js to achieve 
            seamless user interactions.`}
          </p>
          <br />
          <p>
            {` With a strong foundation in front-end and back-end 
            development, I aim to develop intuitive and efficient solutions that breathe life 
            into ideas. Committed to continuous growth and keeping up with emerging 
            technologies, my aim is to deliver cutting-edge, top-notch solutions that propel 
            success in the digital realm.`}
          </p>
        </div>
        <Image src="" alt="profile picture" width={500} height={300} />
      </div>
    </div>
  );
}
