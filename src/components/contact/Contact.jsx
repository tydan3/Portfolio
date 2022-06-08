import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import { Mail } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_natj6vo",
        "template_zlo09df",
        formRef.current,
        "user_b6rhMytDWfjGBhWWtSzdp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Send an Email</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="user_email" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <textarea placeholder="Message" name="user_message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>
              Thanks for the message! I will reply as soon as possible.
            </span>
          )}
        </form>
        <div className="contactContainer">
          <div className="linkContainer">
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
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>tydan.wk@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
