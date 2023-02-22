import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Form from "./Form/Form";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

export default function Navigation() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any>();
  const order = useAppSelector((state) => state.categories.order);

  const userAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged");
        setCurrentUser(user);
      } else {
        console.log("User unLogged");
      }
    });
  };
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        setCurrentUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    userAuthState();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.logo_Image}
          src={"../../assets/massive_Logo.png"}
          alt="logo image"
        />
        <span className={styles.logo_Name}>assive</span>
      </div>
      <nav className={styles.navigation}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/Categories">
          Catagories
        </Link>
        <Link className={styles.link} to="/Sale">
          Sale
        </Link>
        <Link className={styles.link} to="/About us">
          About us
        </Link>
        {order.length >= 1 ? (
          <Link className={styles.link} to="/Basket">
            Basket
          </Link>
        ) : null}
        {currentUser ? (
          <button className={styles.link} onClick={() => userSignOut()}>
            Sign out
          </button>
        ) : (
          <button
            className={styles.link}
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            Sign In
          </button>
        )}
        <div style={isFormVisible ? { display: "flex" } : { display: "none" }}>
          <Form setIsFormVisible={setIsFormVisible} />
        </div>
      </nav>
    </header>
  );
}
