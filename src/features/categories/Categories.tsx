import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import styles from "./Categories.module.css";
import CategoriesNav from "./categoriesNav/CategoriesNav";
import { addPositionId } from "./categoriesSlice";
import ShoeView from "./shoeView/ShoeView";

export default function Categories() {
  const [currentType, setCurrentType] = useState<string>("all");
  const arrayOfShoes = useAppSelector(state=> state.categories.arrayOfShoes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const navigateToPosition = (id: string): void => {
    dispatch(addPositionId(id))
    navigate('/Categories/Position');
  }

  return (
    <div className={styles.categories}>
      <Navigation />
      <main className={styles.main}>
        <CategoriesNav setCurrentType={setCurrentType} />
        <div className={styles.list_Of_Shoes}>
          {arrayOfShoes
            .filter((shoe, index) => {
              if (currentType === "all") return shoe;
              return shoe.type === currentType;
            })
            .map((shoe, index) => {
              return (
                <div key={shoe.id} onClick={()=> navigateToPosition(shoe.id)}>
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
