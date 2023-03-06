import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import styles from "./Position.module.css";
import PositionForm from "./positionForm/PositionForm";
import PositionView from "./positionView/PositionView";

export default function Position() {
  const positionId = useAppSelector((state) => state.categories.positionId);
  const arrayOfShoes = useAppSelector((state) => state.categories.arrayOfShoes);
  const navigate = useNavigate();

  useEffect(() => {
    if (positionId.length < 1) {
      navigate("/Categories");
    }
  }, [positionId]);

  return (
    <div className={styles.position_Wrapper}>
      <Navigation />
      <main className={styles.main_Position}>
        {arrayOfShoes
          .filter((shoe) => {
            return shoe.model == +positionId;
          })
          .map((shoe) => {
            return (
              <div key={shoe.id} className={styles.positionView_Box}>
                <PositionView shoe={shoe} />
              </div>
            );
          })}
        <div className={styles.position_Form}>
          <PositionForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
