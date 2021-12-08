import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      typeSpeed: 40,
      backSpeed: 40,
      strings: ["Developer", "Engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="circle">
          <div className="imgContainer">
            <img src="assets/me.png" alt="me" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Daniel Ty.</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
          <p> Welcome to my portfolio.</p>
        </div>
      </div>
      <a href="#about">
        <img src="assets/down.png" alt="down" />
      </a>
    </div>
  );
}
