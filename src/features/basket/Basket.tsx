import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setOrderFromLocalStorage } from "../categories/categoriesSlice";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import styles from "./Basket.module.css";
import OrderForm from "./orderForm/OrderForm";
import OrderPosition from "./orderPosition/OrderPosition";

export default function Basket() {
  const listOfOrder = useAppSelector((state) => state.categories.order);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isVisiblePopUp = useAppSelector(state=> state.categories.isVisiblePopUp);

  useEffect(() => {
    if (listOfOrder.length !== 0) {
      localStorage.setItem("order", JSON.stringify(listOfOrder));
    } else {
      dispatch(setOrderFromLocalStorage());
    }
  }, []);
  useEffect(() => {
    if (listOfOrder.length < 1) {
      navigate("/Categories");
    }
  }, [listOfOrder]);

  return (
    <div className={styles.basket_Wrapper}>
      <Navigation />
      <main className={styles.basket_Main} style={isVisiblePopUp ? {display: 'none'} : {display: 'flex'}}>
        <ul className={styles.order_List}>
          {listOfOrder
            ? listOfOrder.map((order, index) => {
                return (
                  <li key={index}>
                    <OrderPosition order={order} />
                  </li>
                );
              })
            : null}
        </ul>
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
