import React from "react";
import styles from "./AdminCreateFormInput.module.css";

interface AdminCreateFormProps {
  label: string;
  handler: React.ChangeEventHandler<HTMLInputElement>;
  blurHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function AdminCreateFormInput({ label, handler, blurHandler }: AdminCreateFormProps) {
  const headline = label[0].toUpperCase() + label.slice(1);
  return (
    <>
      {label === "url" ? (
        <label className={styles.create_Position_Button_Label}>
          <img
            src="../../assets/upload_Image.png"
            className={styles.Upload_Image}
            alt="cloud"
          />
          Custom Upload
          <input
            className={styles.create_Position_Button}
            name={label}
            type="file"
            onChange={handler}
          />
        </label>
      ) : (
        <>
          <label className={styles.create_Position_HeadLine}>{headline}</label>
          <input
            className={styles.create_Position_Input}
            name={label}
            type={label === "price" || label === 'model' ? "number" : "text"}
            onChange={handler}
            onBlur={blurHandler}
          />
        </>
      )}
    </>
  );
}
