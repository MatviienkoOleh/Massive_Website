import React from "react";
import styles from "./OrderInput.module.css";

interface OrderInputProps {
  label: string;
  value: string | any;
  handler: Function;
  focusHandler: Function;
}

export default function OrderInput({ label, value, handler, focusHandler }: OrderInputProps) {
  const newLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <>
      <label className={styles.orderForm_Label}>{newLabel}</label>
      <input
        value={value}
        onChange={label === "email" ? () => {} : (event) => handler(event)}
        onBlur={(event) => focusHandler(event)}
        readOnly={label === "email" ? true : false}
        name={label}
        type={label === 'phone' ? 'number' : 'text'}
        className={styles.orderForm_Input}
        placeholder={label === 'phone' ? 'Format: 3 806 34 74 023' : "Type your " + label}
      />
    </>
  );
}
