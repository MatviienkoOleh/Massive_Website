import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Form from "./Form/Form";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setIsPopUpVisible } from "../categories/categoriesSlice";

export default function Navigation() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any>();
  const order = useAppSelector((state) => state.categories.order);
  const isVisiblePopUp = useAppSelector(
    (state) => state.categories.isVisiblePopUp
  );
  const dispatch = useAppDispatch();

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
  const closePopUpMenu = () => {
    dispatch(setIsPopUpVisible(false));
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
        <Link className={styles.link} to="/Sales">
          Sale
        </Link>
        <div className={[styles.link, styles.dropDown_Container].join(" ")}>
          <button className={styles.dropDown_Button}>About</button>
          <ul className={styles.dropDown_Menu}>
            <Link className={styles.dropDown_Menu_Links} to="/About">
              <li>About us</li>
            </Link>
            <Link className={styles.dropDown_Menu_Links} to="/Contact">
              <li>Contact us</li>
            </Link>
            <Link className={styles.dropDown_Menu_Links} to="/FAQ">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        {order.length >= 1 ? (
          <Link className={styles.link} to="/Basket">
            Basket
          </Link>
        ) : null}
        {currentUser ? (
          <Link className={styles.link} to="/AdminMenu">
            Admin Menu
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

      <div
        onClick={() => dispatch(setIsPopUpVisible(true))}
        className={styles.popUp_Navigation_Button}
      >
        <img className={styles.popUp_Image} src="../../assets/menu_Icon.png" />
      </div>
      <nav
        className={styles.popUp_Navigation_Section}
        style={isVisiblePopUp ? { display: "flex" } : { display: "none" }}
      >
        <div className={styles.close_PopUp}>
          <img
            onClick={() => dispatch(setIsPopUpVisible(!isVisiblePopUp))}
            className={styles.close_PopUp_Button}
            src="../../assets/close_PopUp.png"
          />
        </div>
        <Link onClick={() => closePopUpMenu()} className={styles.link} to="/">
          Home
        </Link>
        <Link
          onClick={() => closePopUpMenu()}
          className={styles.link}
          to="/Categories"
        >
          Catagories
        </Link>
        <Link
          onClick={() => closePopUpMenu()}
          className={styles.link}
          to="/Sales"
        >
          Sale
        </Link>
        <Link
          onClick={() => closePopUpMenu()}
          className={styles.dropDown_Menu_Links}
          to="/About"
        >
          <li>About us</li>
        </Link>
        <Link
          onClick={() => closePopUpMenu()}
          className={styles.dropDown_Menu_Links}
          to="/Contact"
        >
          <li>Contact us</li>
        </Link>
        <Link
          onClick={() => closePopUpMenu()}
          className={styles.dropDown_Menu_Links}
          to="/FAQ"
        >
          <li>FAQ</li>
        </Link>
        {order.length >= 1 ? (
          <Link
            onClick={() => closePopUpMenu()}
            className={styles.link}
            to="/Basket"
          >
            Basket
          </Link>
        ) : null}
        {currentUser ? (
          <Link
            onClick={() => closePopUpMenu()}
            className={styles.link}
            to="/AdminMenu"
          >
            Admin Menu
          </Link>
        ) : null}
        {currentUser ? (
          <button className={styles.link} onClick={() => userSignOut()}>
            Sign out
          </button>
        ) : (
          <Link
            to='/PopUpForm'
            className={styles.link}
            onClick={() => closePopUpMenu()}
          >
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
}
