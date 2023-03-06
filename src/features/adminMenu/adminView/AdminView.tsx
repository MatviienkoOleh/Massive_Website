import React from "react";
import { useAppSelector } from "../../../app/hooks";
import AdminShoePosition from "./adminShoePosition/AdminShoePosition";
import styles from "./AdminView.module.css";

export default function AdminView() {
  const listOfShoes = useAppSelector((state) => state.categories.arrayOfShoes);

  return (
    <ul className={styles.admin_View_Wrapper}>
      {listOfShoes.map((shoe, index) => {
        return (
          <li key={shoe.model}>
            <AdminShoePosition shoe={shoe} index={index} />
          </li>
        );
      })}
    </ul>
  );
}
