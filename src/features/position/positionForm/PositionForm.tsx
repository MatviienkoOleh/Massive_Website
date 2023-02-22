import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { OrderPositionI } from "../../../interface/global";
import { addPositionToOrder } from "../../categories/categoriesSlice";
import CheckBox from "./checkBox/CheckBox";
import styles from "./PositionForm.module.css";

export default function PositionForm() {
  const [size, setSize] = useState<string>("35");
  const [commentary, setCommentary] = useState<string>("");
  const positionId = useAppSelector((state) => state.categories.positionId);
  const arrayOfShoes = useAppSelector((state) => state.categories.arrayOfShoes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.currentTarget.value);
  };
  const addPositionToBucket = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const shoe = arrayOfShoes.find((shoe) => shoe.id === positionId);

    if (!commentary) {
      alert("Fill in the commentary!");
    } else {
      const orderPosition: OrderPositionI | any = {
        shoe: shoe,
        size: size,
        commentary: commentary,
      };
      dispatch(addPositionToOrder(orderPosition));
      navigate('/Basket');
    }
  };

  return (
    <form
      className={styles.position_Form_wrapper}
      onSubmit={addPositionToBucket}
    >
      <div className={styles.position_CheckBox_Block}>
        <CheckBox
          onChangeCheckBox={onChangeCheckBox}
          size={size}
          initialSize="35"
        />
        <CheckBox
          onChangeCheckBox={onChangeCheckBox}
          size={size}
          initialSize="36"
        />
        <CheckBox
          onChangeCheckBox={onChangeCheckBox}
          size={size}
          initialSize="37"
        />
        <CheckBox
          onChangeCheckBox={onChangeCheckBox}
          size={size}
          initialSize="39"
        />
        <CheckBox
          onChangeCheckBox={onChangeCheckBox}
          size={size}
          initialSize="40"
        />
        <CheckBox
          onChangeCheckBox={onChangeCheckBox}
          size={size}
          initialSize="41"
        />
      </div>
      <textarea
        onChange={(event) => setCommentary(event.currentTarget.value)}
        value={commentary}
        className={styles.position_TextArea}
        rows={4}
        cols={50}
        name="comments"
        placeholder="Type your commentary..."
      />
      <button className={styles.position_Button}>
        Add to bucket
      </button>
    </form>
  );
}
