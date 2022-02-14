import React from "react";
import Image from "next/image";
import SectionTitle from "../sectionTitle/SectionTitle";
import styles from "./works.module.css";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../projectsData";

function Works({ changePage }) {
  return (
    <section className={styles.Works}>
      <div className={styles.imgContainer}>
        <Image
          src="/imgs/worksMe.svg"
          layout="responsive"
          width={300}
          height={300}
          alt="Me standing in front of a white board"
        />
      </div>
      <SectionTitle text="Projects" />
      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.images[0]}
            name={project.name}
            link={project.link}
            changePage={changePage}
          />
        ))}
      </div>
    </section>
  );
}

export default Works;
