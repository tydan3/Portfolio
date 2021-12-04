import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      typeSpeed: 50,
      backSpeed: 60,
      strings: ["Developer", "Engineer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="circle">
          <div className="imgContainer">
            <img src="assets/hotdogcat.jpg" alt="cat" />
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
          <h4> Welcome to my portfolio.</h4>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
