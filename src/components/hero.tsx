export default function Hero() {
  const one = (
    <h1
      className="big-heading"
    >
      Hi, {`I'm`} <strong>Kunal Kashyap, </strong>
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
      Building and developing full stack web solutions.
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
      As a full stack web developer, my expertise lies in developing dynamic and
      interactive web applications. I possess a solid understanding of both
      front-end and back-end technologies, and I am dedicated to constructing
      effective and intuitive solutions.
    </p>
  );
    const five = (
      <a
        className="linked_button"
        target="_blank"
        href="https://www.linkedin.com/in/kunal-kashyap-a0798222b/"
      >
        {`Let's`} talk
      </a>
    );

  const items = [one, two, three, four, five];
  return <div className="hero">{items.map((item, i) => item)}</div>;
}
