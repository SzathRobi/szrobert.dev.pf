import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import styles from "./projectCard.module.css";

function ProjectCard({ img, name, link, changePage }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const cardStyle = {
    transition: "400ms",
    transform: inView ? "scale(1)" : "scale(0)",
  };

  return (
    <div ref={ref} className={styles.ProjectCard} style={cardStyle}>
      <Image
        src={img}
        layout="responsive"
        width={300}
        height={200}
        objectFit="cover"
        alt="coding project"
      />
      <h3>{name}</h3>
      <div className={styles.btnGroup}>
        <button onClick={() => changePage(`/${name}`)}>DETAILS</button>
        {name !== "Tickety" && (
          <Link href={link}>
            <a target="_blank">VISIT</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
