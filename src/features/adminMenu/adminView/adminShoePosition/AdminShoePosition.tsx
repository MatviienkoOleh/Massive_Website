import React, { useEffect, useState } from "react";
import styles from "./AdminShoePosition.module.css";
import { ShoeI } from "../../../../interface/global";
import { ref, update } from "firebase/database";
import { db, storage, storageRef } from "../../../../firebase";
import { useAppSelector } from "../../../../app/hooks";
import { deleteObject } from "firebase/storage";

interface AdminShoePositionProps {
  shoe: ShoeI;
  index: number;
}

export default function AdminShoePosition({
  shoe,
  index,
}: AdminShoePositionProps) {
  const list = useAppSelector((state) => state.categories.arrayOfShoes);
  const [modelData, setModelData] = useState<ShoeI>({
    model: 0,
    id: "",
    price: 0,
    status: "",
    type: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    setModelData(shoe);
  }, []);

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setModelData((prev: ShoeI) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const formHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name } = e.currentTarget;

    if (name === "delete") {
      //delete position from the DB
      const filtered = list.filter((pos) => pos.id !== shoe.id);
      const deleteRef = ref(db, "arrayOfShoes");
      update(deleteRef, { filtered });

      //delete picture from storage
      const stRef = storageRef(storage, `${shoe.model}`);
      deleteObject(stRef)
        .then(() => console.log("deleted"))
        .catch((error) => error.message);
    } else if (name === "change") {

        const changedArray = list.map((el, index) => {
            if(el.model === shoe.model) {
                return modelData;
            }
            return el;
        });

        const updateRef = ref(db, 'arrayOfShoes/filtered'); 
        update(updateRef, {
            ...changedArray,
        });
    }
  };

  return (
    <form className={styles.admin_Shoe_View_Position_Form}>
      <div className={styles.position_Input_Section}>
        <label className={styles.positions_Label}>Model: </label>
        <input
          className={[styles.admin_Shoe_View_Position_Input, styles.readOnly].join(' ')}
          type="number"
          name="model"
          readOnly
          value={modelData.model}
        />
      </div>
      <div className={styles.position_Input_Section}>
        <label className={styles.positions_Label}>Des: </label>
        <input
          className={styles.admin_Shoe_View_Position_Input}
          type="text"
          name="description"
          value={modelData.description}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.position_Input_Section}>
        <label className={styles.positions_Label}>Price: </label>
        <input
          className={styles.admin_Shoe_View_Position_Input}
          type="number"
          name="price"
          value={modelData.price}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.selection_Section}>
        <select
          className={styles.position_Selectors}
          name="status"
          value={modelData.status}
          onChange={onChangeHandler}
        >
          <option value="newCollection">New Collection</option>
          <option value="sale">Sale</option>
          <option value="highHeels">Old Collection</option>
        </select>
        <select
          className={styles.position_Selectors}
          onChange={onChangeHandler}
          name="type"
        >
          <option value="boots">Boots</option>
          <option value="sandals">Sandals</option>
          <option value="highHeels">High Heels</option>
          <option value="loafers">Loafers</option>
          <option value="oxford">Oxford</option>
          <option value="platforms">Platforms</option>
        </select>
      </div>
      <div className={styles.position_Button_Section}>
        <button
          name="delete"
          id={shoe.id}
          className={styles.position_Button}
          onClick={formHandler}
        >
          Delete position
        </button>
        <button
          name="change"
          id={shoe.id}
          className={styles.position_Button}
          onClick={formHandler}
        >
          Change Info
        </button>
      </div>
    </form>
  );
}
