import React from "react";
import { useAppSelector } from "../../../app/hooks";
import Footer from "../../footer/Footer";
import Navigation from "../Navigation";
import styles from "./About.module.css";

export default function About() {
  const isVisiblePopUp = useAppSelector(state=> state.categories.isVisiblePopUp);

  return (
    <>
      <Navigation />
      <main className={styles.about_Wrapper} style={isVisiblePopUp ? {display: 'none'} : {display: 'flex'}}>
        <section className={styles.about_Sections}>
          <h2 className={styles.about_Headers}>- About -</h2>
          <p className={styles.about_Paragraphs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            alias labore porro, sapiente illo ea, vitae corporis molestias
            distinctio vel amet asperiores sed unde magni ab tempore repellendus
            ipsa totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia alias labore porro, sapiente illo ea, vitae corporis
            molestias distinctio vel amet asperiores sed unde magni ab tempore
            repellendus ipsa totam!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia alias labore porro, sapiente illo ea,
            vitae corporis molestias distinctio vel amet asperiores sed unde
            magni ab tempore repellendus ipsa totam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia alias labore porro, sapiente
            illo ea, vitae corporis molestias distinctio vel amet asperiores sed
            unde magni ab tempore repellendus ipsa totam!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia alias labore porro,
            sapiente illo ea, vitae corporis molestias distinctio vel amet
            asperiores sed unde magni ab tempore repellendus ipsa totam! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
            labore porro, sapiente illo ea, vitae corporis molestias distinctio
            vel amet asperiores sed unde magni ab tempore repellendus ipsa
            totam!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            alias labore porro, sapiente illo ea, vitae corporis molestias
            distinctio vel amet asperiores sed unde magni ab tempore repellendus
            ipsa totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia alias labore porro, sapiente illo ea, vitae corporis
            molestias distinctio vel amet asperiores sed unde magni ab tempore
            repellendus ipsa totam!
          </p>
        </section>
        <section className={styles.about_Sections}>
          <h2 className={styles.about_Headers}>- Materials -</h2>
          <div className={styles.about_Leaders_Block}>
            <div className={styles.about_Leaders}>
              <h5 className={styles.about_Leaders_Name}>- Leather -</h5>
              <p className={styles.about_Leaders_Info}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                minima! Eos animi voluptate natus eaque adipisci alias
                excepturi, assumenda delectus atque minus deleniti ullam fugit
                minima itaque omnis cum fugiat!
              </p>
            </div>
            <div className={styles.about_Leaders}>
              <h5 className={styles.about_Leaders_Name}>- Threads -</h5>
              <p className={styles.about_Leaders_Info}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                minima! Eos animi voluptate natus eaque adipisci alias
                excepturi, assumenda delectus atque minus deleniti ullam fugit
                minima itaque omnis cum fugiat!
              </p>
            </div>

            <div className={styles.about_Leaders}>
              <h5 className={styles.about_Leaders_Name}>- Sole -</h5>
              <p className={styles.about_Leaders_Info}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                minima! Eos animi voluptate natus eaque adipisci alias
                excepturi, assumenda delectus atque minus deleniti ullam fugit
                minima itaque omnis cum fugiat!
              </p>
            </div>
            <div className={styles.about_Leaders}>
              <h5 className={styles.about_Leaders_Name}>- Glue -</h5>
              <p className={styles.about_Leaders_Info}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                minima! Eos animi voluptate natus eaque adipisci alias
                excepturi, assumenda delectus atque minus deleniti ullam fugit
                minima itaque omnis cum fugiat!
              </p>
            </div>
          </div>
        </section>
        <section className={styles.about_Sections}>
          <h2 className={styles.about_Headers}>- Leadership -</h2>
          <div className={styles.about_Leaders_Block}>
            <div className={styles.about_Leaders}>
              <img
                alt="photo of the Leaders"
                className={styles.about_Leaders_Image}
                src="../assets/phonk.jpg"
              />
              <h6 className={styles.about_Leaders_Name}>Name</h6>
              <p className={styles.about_Leaders_Info}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                sunt quo odio quidem neque voluptatem ducimus architecto illum.
                Magni voluptatibus officiis neque officia eius laudantium atque
                temporibus, quia vero et.
              </p>
            </div>
            <div className={styles.about_Leaders}>
              <img
                alt="photo of the Leaders"
                className={styles.about_Leaders_Image}
                src="../assets/phonk.jpg"
              />
              <h6 className={styles.about_Leaders_Name}>Name</h6>
              <p className={styles.about_Leaders_Info}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                sunt quo odio quidem neque voluptatem ducimus architecto illum.
                Magni voluptatibus officiis neque officia eius laudantium atque
                temporibus, quia vero et.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.about_Sections}>
          <h2 className={styles.about_Headers}>- Our Location -</h2>
          <div className={styles.about_Location_Block}>
            <div className={styles.about_Location}>
              <img
                className={styles.about_Location_Image}
                alt="world Location"
                src="../assets/World_Location.png"
              />
              <div className={styles.about_Location_Info}>
                <span>HQ Boston</span>
                <span>33 Arch Street, Floor 17, Boston</span>
                <span>MA 02110</span>
                <span>855.277.8674</span>
                <span>855-APPTOPIA</span>
              </div>
            </div>
            <div className={styles.about_Location}>
              <img
                className={styles.about_Location_Image}
                alt="world Location"
                src="../assets/local_Location.png"
              />
              <div className={styles.about_Location_Info}>
                <span>Ukraine</span>
                <span>Chevchenko 86 str</span>
                <span>18000</span>
                <span>235.277.8674</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
