import React from "react";
import { ShoeI } from "../../../interface/global";
import styles from "./PositionView.module.css";

interface PositionViewProps {
  shoe: ShoeI;
}

export default function PositionView({ shoe }: PositionViewProps) {
  return (
    <div className={styles.position_View} key={shoe.id}>
      <img className={styles.position_Image} src={shoe.url} />
      <ul className={styles.position_Info}>
        <li className={styles.position_Info_Item}>
          <b className={styles.position_Info_Item_Bold}>Model: </b>№{shoe.model}
        </li>
        <li className={styles.position_Info_Item}>
          <b className={styles.position_Info_Item_Bold}>Status: </b>
          {shoe.status}
        </li>
        <li className={styles.position_Info_Item}>
          <b className={styles.position_Info_Item_Bold}>Type: </b>
          {shoe.type}
        </li>
        <li className={styles.position_Info_Item}>
          <b className={styles.position_Info_Item_Bold}>Description: </b>
          {shoe.description}
        </li>
        <li className={styles.position_Info_Item}>
          <b className={styles.position_Info_Item_Bold}>Price: </b>
          {shoe.price} $
        </li>
      </ul>
    </div>
  );
}
