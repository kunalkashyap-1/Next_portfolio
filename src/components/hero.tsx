import { GoDownload, GoMail } from "react-icons/go";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import HeroCard from "./hero_card";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  const one = (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="big-heading"
    >
      Hi, {`I'm`} <strong>Kunal Kashyap</strong>
    </motion.h1>
  );
  const two = <h2></h2>;
  const three = (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="medium-heading"
      style={{ color: "#3BCAC9" }}
    >
      Full Stack Developer
    </motion.h3>
  );
  const four = (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-xl text-lg text-gray-400"
    >
      I specialize in developing interactive online apps using both front-end
      and back-end technologies. I prioritize providing user-friendly solutions.
    </motion.p>
  );
  const five = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex gap-7 mt-4 justify-center items-center"
    >
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
        href="/resume.pdf"
        download
        className="flex items-center justify-center gap-2 px-6 py-3
                   text-gray-100 font-semibold bg-green-400 rounded-full shadow-lg 
                   hover:bg-green-500 hover:gap-3 hover:scale-105 
                   transition-all duration-300 ease-in-out"
      >
        Resume
        <GoDownload className="text-2xl" />
      </a>
    </motion.div>
  );

  const items = [one, two, three, four, five];
  return (
    <section className="flex items-start justify-center h-[100dvh]">
      <Parallax speed={-5} className="absolute w-full" translateY={[0, 15]}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </Parallax>
      <div className="hero sm:py-6 px-12 py-2">
        {items.map((item, i) => (
          <Parallax key={i} translateY={[0, 5 + i * 2]} speed={0}>
            <span>{item}</span>
          </Parallax>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden lg:block"
      >
        <HeroCard />
      </motion.div>
    </section>
  );
}
