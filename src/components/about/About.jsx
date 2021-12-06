import "./about.scss";

export default function About() {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="assets/hotdogcat.jpg" alt="cat" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Highly motivated to apply academic experience and learn new
          technologies.
        </p>
        <p className="a-desc">
          I recently graduated from the University of Washington with a BA in
          Computer Science. I have experience with algorithims/data structures,
          object-oriented programming, database systems design,
          front-end/back-end development, mobile programming, and web game
          development.
        </p>
      </div>
    </div>
  );
}
