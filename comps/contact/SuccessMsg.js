import { useState } from "react";
import styles from "./contact.module.css";

function SuccessMsg({ style }) {
  return (
    <div className={styles.SuccessMsg} style={style}>
      <p>Message was sent successfully!</p>
    </div>
  );
}

export default SuccessMsg;
