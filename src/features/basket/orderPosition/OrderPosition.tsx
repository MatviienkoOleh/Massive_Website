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

  const deleteFromBucket = (id: string) => {
    console.log(id);
    dispatch(deletePositionFromOrder(id));
  };

  return (
    <div className={styles.orderPosition_Wrapper}>
      <img className={styles.orderPosition_Image} src={shoe.url} />
      <div className={styles.orderPosition_Info}>
        <ul className={styles.orderPosition_List}>
          <li className={styles.orderPosition_Item}>
            <b>Model:</b>
            <span>№ {shoe.model}</span>
          </li>
          <li className={styles.orderPosition_Item}>
            <b>Status:</b>
            <span>{shoe.status}</span>
          </li>
          <li className={styles.orderPosition_Item}>
            <b>Type:</b>
            <span>{shoe.type}</span>
          </li>
          <li className={styles.orderPosition_Item}>
            <b>Price:</b>
            <span>{shoe.price} $</span>
          </li>
          <li
            className={styles.orderPosition_Delete}
            onClick={() => deleteFromBucket(shoe.id)}
          >
            ✖
          </li>
        </ul>
        <div className={styles.orderPosition_Commentary}>
          <b>Message:</b> {commentary}
        </div>
      </div>
    </div>
  );
}
