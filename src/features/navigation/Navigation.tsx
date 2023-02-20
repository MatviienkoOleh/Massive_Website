import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Form from "./Form/Form";

export default function Navigation() {
  const [isSignInFormVisible, setIsSignInFormVisible] = useState(false);

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
        <Link className={styles.link} to="/Contact us">
          Contact us
        </Link>
        <button
          className={styles.link}
          onClick={() => setIsSignInFormVisible(!isSignInFormVisible)}
        >
          Sign In
        </button>
        <div
          style={
            isSignInFormVisible ? { display: "flex" } : { display: "none" }
          }
        >
          <Form />
        </div>
      </nav>
    </header>
  );
}
