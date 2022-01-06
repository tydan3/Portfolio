import "./projects.scss";

export default function Projects() {
  const data = [
    {
      id: 1,
      name: "Dad Jokes Finder",
      img: "./assets/dad.png",
      desc: "Dad joke search page. Made with React functional components and hooks, using component lifecycle and state. Connects to a RESTful API for the dad joke data.",
      link: "https://tydan3.github.io/Dad-Jokes-Finder/",
    },
    {
      id: 2,
      name: "Realm Defense Force",
      img: "./assets/rdf.png",
      desc: "A tower defense web game. Has four levels, multiple enemies, and several upgradeable towers. Used JavaScript, HTML, and CSS.",
      link: "https://tydan3.github.io/Realm-Defense-Force/",
    },
    {
      id: 3,
      name: "T4G2",
      img: "./assets/t4g2.png",
      desc: "An Android messaging app with sign-in/registration, chat, contacts, weather, and home page. Used Java in Android Studio for front-end and Node.js for back-end.",
      link: "https://youtu.be/HdQHP8s3pQ0",
    },
    {
      id: 4,
      name: "PC Builder",
      img: "./assets/pcbuilder.png",
      desc: "A relational database project where users can create/save pc builds. Used mssql server for database and Java Swing for GUI.",
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
