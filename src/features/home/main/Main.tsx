import React from "react";
import styles from "./Main.module.css";
import Slider from "./slider/Slider";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <img
          className={styles.introduction_Image}
          src={"../../../assets/main_Background.jpg"}
          alt="shoe"
        />
        <div className={styles.introduction_Info}>
          <h1 className={styles.introduction_Header}>MASSIVE</h1>
          <p className={styles.introduction_Text}>
            This is awesome landing page about Massive shoes.Massive - is a
            shoes company what had started in 2008 y.
          </p>
          <button className={styles.button}>Collection</button>
        </div>
      </div>
      <Slider />
      <div className={styles.new_Collection}>
        <div className={styles.new_Collection_Info}>
          <h1 className={styles.introduction_Header}>MASSIVE</h1>
          <p className={styles.introduction_Text}>
            This is awesome landing page about Massive shoes.Massive - is a
            shoes company what had started in 2008 y.
          </p>
          <button className={styles.button}>Collection</button>
        </div>
        <img className={styles.introduction_Image} src={"../../../assets/main_Background.jpg"} alt="shoe" />
      </div>
    </main>
  );
}
