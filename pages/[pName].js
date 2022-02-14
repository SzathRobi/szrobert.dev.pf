import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "../projectsData";
import styles from "../styles/project.module.css";

function Project() {
  const router = useRouter();
  const { pName } = router.query;
  const project = projectsData.filter((pData) => pData.name === pName)[0];

  const [actualImg, setActualImg] = useState(project.images[0]);
  //  animation: fadeIn 1s ease-in forwards;
  const [imgAnimation, setImgAnimation] = useState(styles.fadeIn);
  const changeActualImg = (img) => {
    setImgAnimation(styles.fadeOut);
    setTimeout(() => {
      setActualImg(img);
      setImgAnimation(styles.fadeIn);
    }, 200);
  };

  const [pageAnimation, setPageAnimation] = useState(styles.fadeIn);
  const changePage = (href) => {
    setPageAnimation(styles.fadeOut);
    setTimeout(() => {
      //router here
      router.push(href);
    }, 500);
  };

  return (
    <section className={`${styles.Project} ${pageAnimation}`}>
      <header>
        <button onClick={() => changePage("/")}>
          <p>BACK</p>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </header>
      <div className={styles.sectionsContainer}>
        <div className={styles.imgSection}>
          <div className={styles.allImgsContainer}>
            <div
              className={`${styles.showCaseImgContainer} ${imgAnimation}`}
              onAnimationEnd={() => {
                console.log("done");
              }}
            >
              <Image
                src={actualImg}
                alt="project"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.choosableImgsContainer}>
              <div className={styles.choosableImg}>
                <Image
                  src={project.images[0]}
                  onClick={() => changeActualImg(project.images[0])}
                  alt="project"
                  layout="responsive"
                  width={300}
                  height={250}
                  objectFit="cover"
                />
              </div>
              <div className={styles.choosableImg}>
                <Image
                  src={project.images[1]}
                  onClick={() => changeActualImg(project.images[1])}
                  alt="project"
                  layout="responsive"
                  width={300}
                  height={250}
                  objectFit="cover"
                />
              </div>
              <div className={styles.choosableImg}>
                <Image
                  src={project.images[2]}
                  onClick={() => changeActualImg(project.images[2])}
                  alt="project"
                  layout="responsive"
                  width={300}
                  height={250}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <h1>{project.name}</h1>
          <p>{project.desc}</p>
          <div className={styles.projectStackContainer}>
            {project.stack.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <Link href={project.codeLink}>
            <a target="_blank">CODE</a>
          </Link>
          <Link href={project.link}>
            <a target="_blank">DEMO</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
