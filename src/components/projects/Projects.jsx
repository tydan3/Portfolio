import "./projects.scss";

export default function Projects() {
  const data = [
    {
      id: 1,
      name: "Dad Jokes Finder",
      img: "./assets/dad.png",
      desc: "Dad joke search page. Made with React functional components and hooks as well as some CSS. Connects to a web api for the dad joke data.",
      link: "https://tydan3.github.io/Dad-Jokes-Finder/",
    },
    {
      id: 2,
      name: "Realm Defense Force",
      img: "./assets/rdf.png",
      desc: "This is a tower defense web game. This was a quarter-long project for a web game programming course. Made mainly with JavaScript.",
      link: "https://tydan3.github.io/Realm-Defense-Force/",
    },
    {
      id: 3,
      name: "T4G2",
      img: "./assets/t4g2.png",
      desc: "This is an Android message app. It was developed for a mobile programming course. Made with Java in Android Studio for front-end and Node.js for back-end.",
      link: "https://youtu.be/HdQHP8s3pQ0",
    },
    {
      id: 4,
      name: "PC Builder",
      img: "./assets/pcbuilder.png",
      desc: "This is a relational database project for a database systems design course. Used mssql server for the database and Java Swing for the GUI. Allows users to create/save pc builds from a selection of parts on the database.",
      link: "https://github.com/tydan3/Database-Project-PC-Builder",
    },
  ];
  return (
    <div className="projects" id="projects">
      <h1>Featured Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div
            className="card"
            onClick={() => {
              window.open(d.link);
            }}
          >
            <div className="top">
              <img src={d.img} alt="" />
            </div>
            <div className="title">
              <h3>{d.name}</h3>
            </div>
            <div className="desc">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
