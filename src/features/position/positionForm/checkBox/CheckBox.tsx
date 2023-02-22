import React from "react";
import styles from "./CheckBox.module.css";

interface CheckBoxProps {
  onChangeCheckBox: React.ChangeEventHandler<HTMLInputElement>;
  size: string;
  initialSize: string;
}

export default function CheckBox({
  onChangeCheckBox,
  size,
  initialSize,
}: CheckBoxProps) {
  return (
    <label className={styles.wrapper_CheckBox}>
      {initialSize}
      <input
        className={styles.checkBox}
        value={initialSize}
        type="checkbox"
        onChange={(event) => onChangeCheckBox(event)}
        checked={size === initialSize ? true : false}
      />
    </label>
  );
}
