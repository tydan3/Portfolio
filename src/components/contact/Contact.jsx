import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

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
        <h2>Contact</h2>
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
      </div>
    </div>
  );
}
