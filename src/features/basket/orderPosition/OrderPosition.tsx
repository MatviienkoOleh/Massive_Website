import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { OrderPositionI } from "../../../interface/global";
import { deletePositionFromOrder } from "../../categories/categoriesSlice";
import styles from "./OrderPosition.module.css";

interface OrderPositionProps {
  order: OrderPositionI;
}

export default function OrderPosition({ order }: OrderPositionProps) {
  const { shoe, commentary, size } = order;
  const orderList = useAppSelector((state) => state.categories.order);
  const dispatch = useAppDispatch();

  const deleteFromBucket = (model: number) => {
    dispatch(deletePositionFromOrder(model));
  };

  return (
    <div className={styles.orderPosition_Wrapper}>
      <img className={styles.orderPosition_Image} src={shoe.url} />
      <div className={styles.orderPosition_Info}>
        <ul className={styles.orderPosition_List}>
          <li className={styles.orderPosition_Item}>
            <b className={styles.orderPosition_Bold}>Model:</b>
            <span>№ {shoe.model}</span>
          </li>
          <li className={styles.orderPosition_Item}>
            <b className={styles.orderPosition_Bold}>Status:</b>
            <span>{shoe.status}</span>
          </li>
          <li className={styles.orderPosition_Item}>
            <b className={styles.orderPosition_Bold}>Type:</b>
            <span>{shoe.type}</span>
          </li>
          <li className={styles.orderPosition_Item}>
            <b className={styles.orderPosition_Bold}>Price:</b>
            <span>{shoe.price} $</span>
          </li>
          <li
            className={styles.orderPosition_Delete}
            onClick={() => deleteFromBucket(shoe.model)}
          >
            ✖
          </li>
        </ul>
        <div className={styles.orderPosition_Commentary}>
          <b className={styles.orderPosition_Bold}>Message:</b> {commentary}
        </div>
      </div>
    </div>
  );
}
