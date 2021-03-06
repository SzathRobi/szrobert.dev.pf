import React from "react";
import Image from "next/image";
import styles from "./landing.module.css";

function LandingImgContainer() {
  return (
    <div className={`${styles.LandingImgContainer}`}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(46, 255, 255)" }}></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgb(0, 210, 210)" }}
            ></stop>
          </linearGradient>
        </defs>
        <path
          id="blob"
          d="M401.5,294Q371,338,332,361Q293,384,243.5,402.5Q194,421,160.5,380Q127,339,112.5,294.5Q98,250,117.5,209Q137,168,165.5,122.5Q194,77,255,61.5Q316,46,349.5,99.5Q383,153,407.5,201.5Q432,250,401.5,294Z"
          fill="url(#blueGradient)"
        >
          <animate
            attributeName="d"
            dur="15000ms"
            repeatCount="indefinite"
            values="M401.5,294Q371,338,332,361Q293,384,243.5,402.5Q194,421,160.5,380Q127,339,112.5,294.5Q98,250,117.5,209Q137,168,165.5,122.5Q194,77,255,61.5Q316,46,349.5,99.5Q383,153,407.5,201.5Q432,250,401.5,294Z;
            M422.5,307.5Q408,365,367,424Q326,483,264.5,438.5Q203,394,173.5,360.5Q144,327,120.5,288.5Q97,250,78,180.5Q59,111,127,95Q195,79,243,101.5Q291,124,368.5,116Q446,108,441.5,179Q437,250,422.5,307.5Z;
            M376,295.5Q375,341,334.5,363Q294,385,245.5,400Q197,415,145,389.5Q93,364,93,307Q93,250,94,193.5Q95,137,138,86.5Q181,36,235.5,82Q290,128,331.5,144.5Q373,161,375,205.5Q377,250,376,295.5Z;
            M401.5,294Q371,338,332,361Q293,384,243.5,402.5Q194,421,160.5,380Q127,339,112.5,294.5Q98,250,117.5,209Q137,168,165.5,122.5Q194,77,255,61.5Q316,46,349.5,99.5Q383,153,407.5,201.5Q432,250,401.5,294Z
            "
          ></animate>
        </path>
      </svg>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(48, 255, 156)" }}></stop>
            <stop offset="100%" style={{ stopColor: "rgb(0, 177, 92)" }}></stop>
          </linearGradient>
        </defs>
        <path
          id="blob"
          d="M402.5,292.5Q367,335,344.5,403.5Q322,472,250,472Q178,472,137,417Q96,362,52,306Q8,250,37.5,183.5Q67,117,127.5,88Q188,59,252,53.5Q316,48,337,109.5Q358,171,398,210.5Q438,250,402.5,292.5Z"
          fill="url(#greenGradient)"
        >
          <animate
            attributeName="d"
            dur="15000ms"
            repeatCount="indefinite"
            values="M402.5,292.5Q367,335,344.5,403.5Q322,472,250,472Q178,472,137,417Q96,362,52,306Q8,250,37.5,183.5Q67,117,127.5,88Q188,59,252,53.5Q316,48,337,109.5Q358,171,398,210.5Q438,250,402.5,292.5Z;
            M436,302Q393,354,354,402.5Q315,451,252,444Q189,437,155,390.5Q121,344,82.5,297Q44,250,78,199.5Q112,149,157,125Q202,101,251.5,96.5Q301,92,372,101Q443,110,461,180Q479,250,436,302Z;
            M418.5,314.5Q427,379,371.5,416Q316,453,261.5,418.5Q207,384,140,381.5Q73,379,76.5,314.5Q80,250,98.5,202Q117,154,153.5,109.5Q190,65,239.5,97.5Q289,130,362,123Q435,116,422.5,183Q410,250,418.5,314.5Z;
            M402.5,292.5Q367,335,344.5,403.5Q322,472,250,472Q178,472,137,417Q96,362,52,306Q8,250,37.5,183.5Q67,117,127.5,88Q188,59,252,53.5Q316,48,337,109.5Q358,171,398,210.5Q438,250,402.5,292.5Z
            "
          ></animate>
        </path>
      </svg>
      <Image
        src="/imgs/me.svg"
        layout="responsive"
        width={300}
        height={300}
        alt=""
      />
    </div>
  );
}

export default LandingImgContainer;
