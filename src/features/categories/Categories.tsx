import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { db } from "../../firebase";
import { ShoeI } from "../../interface/global";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import styles from "./Categories.module.css";
import CategoriesNav from "./categoriesNav/CategoriesNav";
import { addPositionId, setArrayOfShoesFormDb } from "./categoriesSlice";
import ShoeView from "./shoeView/ShoeView";

export default function Categories() {
  const [currentType, setCurrentType] = useState<string>("all");
  const arrayOfShoes = useAppSelector(state=> state.categories.arrayOfShoes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isVisiblePopUp = useAppSelector(state=> state.categories.isVisiblePopUp);

  const navigateToPosition = (id: string): void => {
    dispatch(addPositionId(id))
    navigate('/Position');
  };
  const getAllListOfShoesFromDb = () => {
    const reference = ref(db, 'arrayOfShoes');
    onValue(reference, (snapshot) => {
      const arrayOfShoesFormDb: ShoeI[] = snapshot.val();
      dispatch(setArrayOfShoesFormDb(arrayOfShoesFormDb));
    });
  };
  useEffect(() => {
    getAllListOfShoesFromDb();
  },[])

  return (
    <div className={styles.categories}>
      <Navigation />
      <main className={styles.main} style={isVisiblePopUp ? {display: 'none'} : {display: 'block'}}>
        <CategoriesNav setCurrentType={setCurrentType} />
        <div className={styles.list_Of_Shoes}>
          {arrayOfShoes
            .filter((shoe, index) => {
              if (currentType === "all") return shoe;
              return shoe.type === currentType;
            })
            .map((shoe) => {
              return (
                <div key={shoe.model} onClick={()=> navigateToPosition(String(shoe.model))}>
                  <ShoeView shoe={shoe}/>
                </div>
              );
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
