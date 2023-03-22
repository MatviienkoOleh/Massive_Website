import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { auth, db } from "../../firebase";
import { ShoeI, userMessages, OrderFromDBI } from "../../interface/global";
import { setArrayOfMessagesFromDb, setArrayOfShoesFormDb, setOrdersFromDb } from "../categories/categoriesSlice";
import Error from "../Error/Error";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import AdminCreateForm from "./adminCreateForm/AdminCreateForm";
import styles from "./AdminMenu.module.css";
import AdminMessages from "./adminMessages/AdminMessages";
import AdminView from "./adminView/AdminView";

export default function AdminMenu() {
  // const userEmail = useAppSelector((state) => state.categories.userEmail);
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();
  const isVisiblePopUp = useAppSelector(state=>state.categories.isVisiblePopUp);

  const adminState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let email: any = user.email;
        setEmail(email);
      } else {
      }
    });
  };
  const getAllListOfShoesFromDb = () => {
    const reference = ref(db, "arrayOfShoes");
    onValue(reference, (snapshot) => {
      const arrayOfShoesFormDb: ShoeI[] = snapshot.val();
      dispatch(setArrayOfShoesFormDb(arrayOfShoesFormDb));
    });
  };
  const getListOfMessagesFromDb = () => {
    const refToMessages = ref(db, 'userMessages');
    onValue(refToMessages, (snapshot) => {
      const listOfMessages: userMessages = snapshot.val();
      dispatch(setArrayOfMessagesFromDb(listOfMessages));
    })
  };
  const getListOfOrdersFromDb = () => {
    const refToMessages = ref(db, 'orders');
    onValue(refToMessages, (snapshot) => {
      const listOfOrders: OrderFromDBI = snapshot.val();
      dispatch(setOrdersFromDb(listOfOrders));
    })
  };

  useEffect(() => {
    adminState();
    getAllListOfShoesFromDb();
    getListOfMessagesFromDb();
    getListOfOrdersFromDb();
  }, []);

  return email ? (
    <div>
      <Navigation />
      <main className={styles.AdminMenu_Main} style={isVisiblePopUp ? {display: 'none'} : {display: 'flex'}}>
        <AdminView />
        <section className={styles.adminMenu_Section}>
          <AdminCreateForm />
          <AdminMessages />
        </section>
      </main>
      <Footer />
    </div>
  ) : (
    <Error />
  );
}
