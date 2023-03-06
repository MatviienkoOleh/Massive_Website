import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import Slider from "./slider/Slider";
import { ref, onValue } from "firebase/database";
import { db } from "../../../firebase";
import { useAppDispatch } from "../../../app/hooks";
import { setArrayOfShoesFormDb, setOrdersFromDb } from "../../categories/categoriesSlice";
import { OrderFromDBI, ShoeI } from "../../../interface/global";

export default function Main() {
  const dispatch = useAppDispatch();

  const getOrdersFromDb = () => {
    const reference = ref(db, "orders");
    onValue(reference, (snapshot) => {
      const data: OrderFromDBI = snapshot.val();
      dispatch(setOrdersFromDb(data))
    });
  };
  const getAllListOfShoesFromDb = () => {
    const reference = ref(db, 'arrayOfShoes');
    onValue(reference, (snapshot) => {
      const arrayOfShoesFormDb: ShoeI[] = snapshot.val();
      dispatch(setArrayOfShoesFormDb(arrayOfShoesFormDb));
    });
  };

  useEffect(() => {
    getOrdersFromDb();
    getAllListOfShoesFromDb();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <img
          className={styles.introduction_Image}
          src={"../assets/introduction_Image2.jpeg"}
          alt="shoe"
        />
        <div className={styles.introduction_Info}>
          <h1 className={styles.introduction_Header}>MASSIVE</h1>
          <p className={styles.introduction_Text}>
            This is awesome landing page about Massive shoes.Massive - is a
            shoes company what had started in 2008 y.
          </p>
          <Link className={styles.button} to="/Categories">
            Categories
          </Link>
        </div>
      </div>
      <Slider />
      <div className={styles.new_Collection}>
        <div className={styles.new_Collection_Info}>
          <h1 className={styles.introduction_Header}>Old Collection</h1>
          <p className={styles.introduction_Text}>
            This is link to old collection with sales depends on type of the shoe and material.
          </p>
          <Link className={styles.button} to="/Sales">
            Sales
          </Link>
        </div>
        <img
          className={styles.introduction_Image}
          src={"../../assets/introduction_Image1.jpg"}
          alt="shoe"
        />
      </div>
    </main>
  );
}
