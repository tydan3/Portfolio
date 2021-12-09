import "./about.scss";

export default function About() {
  const data = [
    {
      id: 1,
      img: "./assets/logos/java.png",
      name: "Java",
    },
    {
      id: 2,
      img: "./assets/logos/c.png",
      name: "C",
    },
    {
      id: 3,
      img: "./assets/logos/javascript.png",
      name: "JavaScript",
    },
    {
      id: 4,
      img: "./assets/logos/html.png",
      name: "Html",
    },
    {
      id: 5,
      img: "./assets/logos/css.png",
      name: "Css",
    },
    {
      id: 6,
      img: "./assets/logos/react.png",
      name: "React",
    },
    {
      id: 7,
      img: "./assets/logos/nodeJS.png",
      name: "Node.js",
    },
    {
      id: 8,
      img: "./assets/logos/sass.png",
      name: "Sass",
    },
    {
      id: 9,
      img: "./assets/logos/mssql.png",
      name: "MS SQL Server",
    },
    {
      id: 10,
      img: "./assets/logos/androidstudio.png",
      name: "Android Studio",
    },
    {
      id: 11,
      img: "./assets/logos/git.png",
      name: "Git",
    },

    {
      id: 12,
      img: "./assets/logos/linux.png",
      name: "Linux",
    },
  ];

  return (
    <div className="a" id="about">
      <div className="aboutContainer">
        <h1>About Me</h1>
        <p className="a-sub">
          Highly motivated to apply academic experience and learn new concepts.
        </p>
        <p className="a-desc">
          Recently graduated from the University of Washington with a BA in
          Computer Science.
          <p className="a-desc-more">
            {" "}
            Have experience with algorithims/data structures, OOP, relational
            databases, full-stack development, android development, and web
            development.
          </p>
        </p>
      </div>
      <div className="techContainer">
        <h2>Technologies I Have Used</h2>
        <div className="badgeContainer">
          {data.map((d) => (
            <div className="badge">
              <div className="logo">
                <img src={d.img} alt="logo" />
              </div>
              <div className="name">
                <h3>{d.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
