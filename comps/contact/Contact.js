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

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      email,
      message,
    };

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
        setEmail("");
        setMessage("");
      }
    });
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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>SEND MESSAGE</button>
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
    </section>
  );
}

export default Contact;
