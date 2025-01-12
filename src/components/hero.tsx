import { GoDownload, GoMail } from "react-icons/go";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import HeroCard from "./hero_card";

export default function Hero() {
  const one = (
    <h1 className="big-heading">
      Hi, {`I'm`} <strong>Kunal Kashyap </strong>
    </h1>
  );
  const two = <h2></h2>;
  const three = (
    <h3
      className="medium-heading"
      style={{
        color: "#3BCAC9",
      }}
    >
      Full Stack Developer
    </h3>
  );
  const four = (
    <p
      style={{
        maxWidth: "36rem",
        padding: "1rem 0",
        fontSize: "18px",
      }}
    >
      I am skilled in creating dynamic, interactive
      web applications with expertise in both front-end and back-end technologies,
      dedicated to delivering intuitive solutions.
    </p>
  );
  const five = (
    <div className="flex gap-7 mt-4 justify-center items-center">
  <a
    target="_blank"
    className="text-3xl text-gray-400 hover:text-green-300 hover:scale-110 transition-transform duration-300"
    href="https://www.linkedin.com/in/kunal-kashyap-a0798222b/"
  >
    <RiLinkedinLine />
  </a>
  <a
    target="_blank"
    className="text-3xl text-gray-400 hover:text-green-300 hover:scale-110 transition-transform duration-300"
    href="https://github.com/kunalkashyap-1"
  >
    <RiGithubLine />
  </a>
  <a
    href="mailto:kunal.kashyap.8775.com"
    className="text-3xl text-gray-400 hover:text-green-300 hover:scale-110 transition-transform duration-300"
  >
    <GoMail />
  </a>
  <a
    href="./resume.pdf"
    download
    className="flex items-center justify-center gap-2 px-6 py-3
               text-black font-semibold bg-green-400 rounded-full shadow-lg 
               hover:bg-green-500 hover:gap-3 hover:scale-105 
               transition-all duration-300 ease-in-out"
  >
    Resume
    <GoDownload className="text-2xl" />
  </a>
</div>

  );

  const items = [one, two, three, four, five];
  return (
    <section className="flex items-start justify-center h-[100dvh]">
      <div className="hero">
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
      </div>
      <HeroCard/>
    </section>
  );
}
