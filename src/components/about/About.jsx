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
      img: "./assets/logos/javascript.png",
      name: "JavaScript",
    },

    {
      id: 3,
      img: "./assets/logos/react.png",
      name: "React",
    },
    {
      id: 4,
      img: "./assets/logos/nodeJS.png",
      name: "Node.js",
    },
    {
      id: 5,
      img: "./assets/logos/expressjs.png",
      name: "Express.js",
    },
    {
      id: 6,
      img: "./assets/logos/html.png",
      name: "Html",
    },
    {
      id: 7,
      img: "./assets/logos/css.png",
      name: "Css",
    },
    {
      id: 8,
      img: "./assets/logos/sass.png",
      name: "Sass",
    },
    {
      id: 9,
      img: "./assets/logos/kotlin.png",
      name: "Kotlin",
    },
    {
      id: 10,
      img: "./assets/logos/c.png",
      name: "C",
    },
    {
      id: 11,
      img: "./assets/logos/mongo.png",
      name: "MongoDB",
    },
    {
      id: 12,
      img: "./assets/logos/mssql.png",
      name: "MS SQL Server",
    },
    {
      id: 13,
      img: "./assets/logos/androidstudio.png",
      name: "Android Studio",
    },
    {
      id: 14,
      img: "./assets/logos/git.png",
      name: "Git",
    },
    {
      id: 15,
      img: "./assets/logos/linux.png",
      name: "Linux",
    },
  ];

  return (
    <div className="a" id="about">
      <div className="aboutContainer">
        <h1>About Me</h1>
        <p className="a-sub">
          Highly driven to apply programming experience and learn new skills.
        </p>
        <p className="a-desc">
          Recently graduated from the University of Washington with a BS in
          Computer Science, a 3.59 GPA, and a Dean's list award for High
          Scholarship.
        </p>
        <p className="a-desc">
          Excelled in courses such as Algorithms/Data Structures,
          Object-Oriented Programming, Database Systems Design, Operating
          Systems, Software Development/QA, Advanced Software Engineering, and
          Mobile Programming.
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
