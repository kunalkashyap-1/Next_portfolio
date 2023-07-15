export default function Hero() {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Kunal Kashyap</h2>;
  const three = (
    <h3 className="medium-heading">
     { "I'm a Full stack developer crafting immersive digital experiences."}
    </h3>
  );
  const four = (
    <>
      <p>
        As a full stack web developer, my expertise lies in developing dynamic
        and interactive web applications. I possess a solid understanding of
        both front-end and back-end technologies, and I am dedicated to
        constructing effective and intuitive solutions.
      </p>
    </>
  );
  //   const five = (
  //     <a
  //       className="email-link"
  //       target="_blank"
  //       href="mailto:kunal.kashyap.8775@gmail.com"
  //     >
  //       Click to email
  //     </a>
  //   );

  const items = [one, two, three, four];
  return <div className="hero">{items.map((item, i) => item)}</div>;
}
