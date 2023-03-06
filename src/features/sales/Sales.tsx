import React from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addPositionId } from "../categories/categoriesSlice";
import ShoeView from "../categories/shoeView/ShoeView";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import styles from "./Sales.module.css";

export default function Sales() {
  const arrayOfShoes = useAppSelector((state) => state.categories.arrayOfShoes);
  const dispatch = useAppDispatch();
  const navigate= useNavigate();

  const navigateToPosition = (model: string): void => {
    dispatch(addPositionId(model))
    navigate('/Position');
  };

  return (
    <div>
      <Navigation />
      <main className={styles.sales_main}>
        {arrayOfShoes
          .filter((shoe) => shoe.status === 'sale')
          .map((shoe) => {
            return (
              <div
                key={shoe.model}
                onClick={() => navigateToPosition(String(shoe.model))}
              >
                <ShoeView shoe={shoe} />
              </div>
            );
          })}
      </main>
      <Footer />
    </div>
  );
}
