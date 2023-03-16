import { ref, remove } from "firebase/database";
import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { db } from "../../../firebase";
import styles from "./AdminMessages.module.css";
import OrderData from "./orderData/OrderData";
import UserMessage from "./userMessage/UserMessage";

export default function AdminMessages() {
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);
  const [isOrderVisible, setIsOrderVisible] = useState<boolean>(false);
  const messagesFromDb = useAppSelector(
    (state) => state.categories.messagesFromDB
  );
  const orderFromDB = useAppSelector((state) => state.categories.ordersFromDB);

  const deleteMessage = (Id: string) => {
    const refToMessages = ref(db, `userMessages/${Id}`);
    remove(refToMessages);
  };
  const deleteOrderFromDb = (index: number) => {
    const refToOrders = ref(db, `orders/${index}`);
    remove(refToOrders);
  }

  return (
    <div className={styles.admin_Messages_Wrapper}>
      <h1 className={styles.headLine}>- Info Section -</h1>
      <button
        className={styles.messages_button}
        onClick={() => setIsMessageVisible(!isMessageVisible)}
      >
        Contact Messages
      </button>
      <section
        style={isMessageVisible ? { display: "block" } : { display: "none" }}
      >
        {messagesFromDb?.map((message) => {
          return (
            <div key={message.uid} onClick={() => deleteMessage(message.uid)}>
              <UserMessage user={message} />
            </div>
          );
        })}
      </section>
      <button
        onClick={() => setIsOrderVisible(!isOrderVisible)}
        className={styles.messages_button}
      >
        Orders
      </button>
      <section
        style={isOrderVisible ? { display: "block" } : { display: "none" }}
      >
        {orderFromDB
          ?.filter((order, index) => {
            if (index !== 0) return order;
          })
          .map((order, index) => {
            return (
              <div key={index + 1} onClick={() => deleteOrderFromDb(index + 1)}>
                <OrderData order={order} />
              </div>
            );
          })}
      </section>
    </div>
  );
}
