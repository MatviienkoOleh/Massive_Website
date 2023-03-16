import React from "react";
import { userMessages } from "../../../../interface/global";
import styles from "./UserMessage.module.css";

interface UserMessageProps {
  user: userMessages;
}

export default function UserMessage({
  user: { uid, message, firstName, lastName, phoneNumber, email },
}: UserMessageProps) {
  return (
    <div className={styles.user_Wrapper}>
      <div className={styles.user_Info}>
        <div>
          <span style={{marginRight: '5px'}}>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <span>{email}</span>
        <span>{phoneNumber}</span>
      </div>
      <span>{message}</span>
    </div>
  );
}
