import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { auth, db } from "../../firebase";
import { ShoeI } from "../../interface/global";
import { setArrayOfShoesFormDb } from "../categories/categoriesSlice";
import Error from "../Error/Error";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import AdminCreateForm from "./adminCreateForm/AdminCreateForm";
import styles from "./AdminMenu.module.css";
import AdminView from "./adminView/AdminView";

export default function AdminMenu() {
  const userEmail = useAppSelector((state) => state.categories.userEmail);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    const reference = ref(db, 'arrayOfShoes');
    onValue(reference, (snapshot) => {
      const arrayOfShoesFormDb: ShoeI[] = snapshot.val();
      dispatch(setArrayOfShoesFormDb(arrayOfShoesFormDb));
    });
  };

  useEffect(() => {
    adminState();
    getAllListOfShoesFromDb();
  }, []);

  return userEmail === email ? (
    <div>
      <Navigation />
      <main className={styles.AdminMenu_Main}>
        <AdminView />
        <AdminCreateForm />
      </main>
      <Footer />
    </div>
  ) : (
    <Error />
  );
}
