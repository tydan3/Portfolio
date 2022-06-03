import "./projects.scss";

export default function Projects() {
  const data = [
    {
      id: 1,
      name: "Realm Defense Force",
      img: "./assets/rdf.png",
      desc: "A tower defense web game. Has four levels, multiple enemy types, and a variety of upgradeable towers. Built with JavaScript (vanilla), HTML, and CSS.",
      link: "https://tydan3.github.io/Realm-Defense-Force/",
    },
    {
      id: 2,
      name: "Puns 'N' Jokes",
      img: "./assets/punsnjokes.png",
      desc: "A web app that searches for puns & jokes. Fetches from an open source RESTful API service for pun/joke data. Built using React components and hooks, using component lifecycle and state.",
      link: "https://tydan3.github.io/Puns-N-Jokes/",
    },
    {
      id: 3,
      name: "Ourmaps",
      img: "./assets/ourmaps.png",
      desc:
        "A shared map web app where users can create/place 'pins' on a map and view 'pins' placed by other users. This is a full-stack app built using the MERN stack. Utilizes MongoDB Atlas for" +
        " cloud database; Express/Node for REST API service; React for UI. Deployed using AWS (EB and CodePipeline) and GitHub Pages.",
      link: "https://ourmaps.us",
      featured: true,
    },
    {
      id: 4,
      name: "T4G2",
      img: "./assets/t4g2.png",
      desc: "An Android messaging app. Features user registration & authentication, chat rooms, contacts page, weather page, and home page. Built with Java and Express.js.",
      link: "https://youtu.be/HdQHP8s3pQ0",
    },
    {
      id: 5,
      name: "PC Builder",
      img: "./assets/pcbuilder.png",
      desc: "A relational database project where users can pick PC parts, view compatibility, and create/save PC builds. Built using Microsoft SQL Server for the relational database and Java (Swing) for the GUI.",
      link: "https://github.com/tydan3/Database-Project-PC-Builder",
    },
  ];
  return (
    <div className="projects" id="projects">
      <h1>Featured Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div
            className={d.featured ? "card featured" : "card"}
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
