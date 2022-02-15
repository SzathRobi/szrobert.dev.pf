import Image from "next/image";
import { useState } from "react";
import {
  faEnvelope,
  faMobileAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../sectionTitle/SectionTitle";
import styles from "./contact.module.css";
import ContactCard from "./ContactCard";
import SuccessMsg from "./SuccessMsg";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [msgErrorMsg, setMsgErrorMsg] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [msgFocused, setMsgFocused] = useState(false);
  const [showSucceed, setShowSucceed] = useState(false);
  const [loading, setLoading] = useState(false);

  const onEmailFocus = () => {
    setEmailError(false);
    setEmailErrorMsg("");
    setEmailFocused(true);
  };

  const onEmailBlur = () => {
    if (email.length === 0) {
      setEmailError(true);
      setEmailErrorMsg("Email is required");
    }
    setEmailFocused(false);
  };

  const onMsgFocus = () => {
    setMsgError(false);
    setMsgErrorMsg("");
    setMsgFocused(true);
  };

  const onMsgBlur = () => {
    if (message.length === 0) {
      setMsgError(true);
      setMsgErrorMsg("Message is required");
    }
    setMsgFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailError(false);
    setEmailErrorMsg("");
    setMsgError(false);
    setMsgErrorMsg("");
    console.log("Sending");

    let data = {
      email,
      message,
    };

    if (email.length === 0) {
      setEmailError(true);
      setEmailErrorMsg("Email is required");
    }

    if (message.length === 0) {
      setMsgError(true);
      setMsgErrorMsg("Message is required");
    }

    if (!emailError && !msgError) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setLoading(false);
          setEmail("");
          setMessage("");
          setShowSucceed(true);
          setTimeout(() => {
            setShowSucceed(false);
          }, 3000);
        }
      });
    }
  };

  const emailFocusMarker = {
    marginTop: "3px",
    width: emailError || emailFocused ? "100%" : 0,
    height: "2px",
    backgroundColor: emailError ? "#ff1f1f" : "#2EFFFF",
    transition: "250ms",
  };
  const msgFocusMarker = {
    width: msgError || msgFocused ? "100%" : 0,
    height: "2px",
    backgroundColor: msgError ? "#ff1f1f" : "#2EFFFF",
    transition: "250ms",
  };

  const successPopupStyle = {
    transition: "400ms",
    transform: showSucceed ? "scale(1)" : "scale(0)",
  };

  return (
    <section className={styles.Contact} id="Contact">
      <SectionTitle text="Contact" />
      <div className={styles.cardContainer}>
        <ContactCard text="szathrobi98@gmail.com" icon={faEnvelope} />
        <ContactCard text="+36305379625" icon={faMobileAlt} />
        <ContactCard text="Budapest XIII" icon={faLocationDot} />
      </div>
      <div className={styles.container}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h4>Write me a message!</h4>
          <label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={onEmailFocus}
              onBlur={onEmailBlur}
              placeholder="Your message here"
            />
            <div style={emailFocusMarker} />
            {emailError && (
              <p>
                {emailErrorMsg.split("").map((letter, index) => (
                  <span
                    style={{ animationDelay: `${(5 + index) * 25}ms` }}
                    key={index}
                  >
                    {letter}
                  </span>
                ))}
              </p>
            )}
          </label>
          <label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={onMsgFocus}
              onBlur={onMsgBlur}
              rows={3}
              placeholder="Your message here"
            />
            <div style={msgFocusMarker} />
            {msgError && (
              <p>
                {msgErrorMsg.split("").map((letter, index) => (
                  <span
                    style={{ animationDelay: `${(5 + index) * 25}ms` }}
                    key={index}
                  >
                    {letter}
                  </span>
                ))}
              </p>
            )}
          </label>
          <button>{loading ? "LOADING..." : "SEND MESSAGE"}</button>
        </form>
        <div className={styles.imgContainer}>
          <Image
            src="/imgs/contactMe.svg"
            layout="responsive"
            width={300}
            height={300}
            alt="Me next to a giant envelope"
          />
        </div>
      </div>
      <SuccessMsg style={successPopupStyle} />
    </section>
  );
}

export default Contact;
