import React from "react";
import styles from "./SignInForm.module.css";

interface SignInFormProps {
  setIsRegistrationFormVisible: Function;
}

export default function SignInForm({
  setIsRegistrationFormVisible,
}: SignInFormProps) {
  return (
    <form className={styles.signIn_Form}>
      <h1 className={styles.header}>Sign In</h1>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          name="email"
          placeholder="Type your email"
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          name="password"
          placeholder="Type your password"
        />
        <div className={styles.button_Block}>
          <button className={styles.button}>Sing In</button>
          <span
            className={styles.registration_Link}
            onClick={() => setIsRegistrationFormVisible(true)}
          >
            Registration
          </span>
        </div>
      </div>
    </form>
  );
}
