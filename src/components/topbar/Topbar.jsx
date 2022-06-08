import "./topbar.scss";
import { Mail, Phone, GetApp } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            tydan.
          </a>

          <div
            className="link"
            onClick={() =>
              window.open("https://www.linkedin.com/in/daniel-ty-6422111a6/")
            }
          >
            <img src="./assets/logos/linkedin.png" alt="linkedin" />
          </div>
          <div
            className="link"
            onClick={() => window.open("https://github.com/tydan3")}
          >
            <img src="./assets/logos/github.png" alt="github" />
          </div>
          <div className="itemContainer">
            <GetApp className="icon" />
            <a href="./assets/Resume_Daniel_Ty.pdf" download>
              Resume
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>tydan.wk@gmail.com</span>
          </div>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+1 (253) 391-0447</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
