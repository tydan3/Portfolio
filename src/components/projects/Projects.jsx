import "./projects.scss";

export default function Projects() {
  const data = [
    {
      id: 1,
      name: "Dad Jokes Finder",
      img: "./assets/dad.png",
      desc:
        "Small side project I created to learn React functional components and hooks. This web app uses " +
        "the icanhazdadjoke.com web API to provide dad-joke-related search results.",
      link: "https://tydan3.github.io/Dad-Jokes-Finder/",
    },
    {
      id: 2,
      name: "Realm Defense Force",
      img: "./assets/rdf.png",
      desc: "This is a Tower Defense web game, called Realm Defense Force. This was a group project for a web game programming course.",
      link: "https://tydan3.github.io/Realm-Defense-Force/",
    },
    {
      id: 3,
      name: "T4G2",
      img: "./assets/t4g2.png",
      desc: "This is an Android app, called T4G2. It is primarily a messaging app. It was a Android Studio group project for the Mobile Programming course.",
      link: "https://github.com/tydan3/Android-App-T4G2",
    },
    {
      id: 4,
      name: "PC Builder",
      img: "./assets/pcbuilder.png",
      desc: "This is my database project, PC Builder, for the Database Systems Design course.",
      link: "https://github.com/tydan3/Database-Project-PC-Builder",
    },
  ];
  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div
            className="card"
            onClick={() => {
              window.location.href = d.link;
              return null;
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
