import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.error_Wrapper}>
      <div className={styles.error}>
        <div className={styles.headline_Block}>
          <h1 className={styles.headline}>
            <span className={styles.error_Headline}>Error</span> 404{" "}
          </h1>
          <img className={styles.error_Image} src={"../assets/error_404.png"} />
        </div>
        <p className={styles.error_Info}>Page Not Found</p>
        <Link className={styles.error_Link} to = '/'>Home</Link>
      </div>
    </div>
  );
}
