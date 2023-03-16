import React from "react";
import { OrderFromDBI } from "../../../../interface/global";
import styles from "./OrderData.module.css";

interface OrderDataProps {
  order: OrderFromDBI;
}

export default function OrderData({
  order: { order, personalData },
}: OrderDataProps) {
  return (
    <div className={styles.order_Data_Wrapper}>
      <section className={styles.PersonalData}>
        <h6 className={styles.personalData_Order_Info}>- Info -</h6>
        <span>{personalData.name + " " + personalData.secondName}</span>
        <span>{personalData.email}</span>
        <span>{personalData.address}</span>
        <span>{personalData.phone}</span>
      </section>
      <section>
        <h6 className={styles.personalData_Order_Info}>- Order -</h6>
        {order?.map((pos, index) => {
          return (
            <div key={index} className={styles.pos_Wrapper}>
              <div className={styles.pos_Model_Info}>
                <span className={styles.order_Pos_Info}>
                  <b>№ </b>
                  {pos.shoe.model}
                </span>
                <span className={styles.order_Pos_Info}>
                  <b>Size: </b>
                  {pos.size}
                </span>
                <span className={styles.order_Pos_Info}>
                  <b>price: </b>
                  {pos.shoe.price}$
                </span>
              </div>
              <span className={styles.order_Pos_Info}>
                <b>message: </b>
                {pos.commentary}
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
}
