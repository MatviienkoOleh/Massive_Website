import React, { useState } from "react";
import { FormI } from "../../../../interface/global";
import styles from "./SignInForm.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../../firebase';

interface SignInFormProps {
  setIsRegistrationFormVisible: Function;
  setIsFormVisible: Function;
}

export default function SignInForm({
  setIsRegistrationFormVisible,
  setIsFormVisible,
}: SignInFormProps) {
  const [signInData, setSignInData] = useState<FormI>({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState<string>("Incorrect email...");
  const [isVisibleEmailError, setIsVisibleEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("Incorrect password...");
  const [isVisiblePasswordError, setIsVisiblePasswordError] = useState<boolean>(false);

  const onBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "email":
        setIsVisibleEmailError(true);
        break;
      case "password":
        setIsVisiblePasswordError(true);
        break;
      default:
        break;
    }
  };
  const onChangeHandlerPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { id, value } = event.target;

    setSignInData((prev: FormI) => {
      return {
        ...prev,
        [id]: value,
      };
    });

    if (signInData.password.length < 5) {
      setPasswordError("Email should be longer that 5 symbols");
    } else {
      setPasswordError("");
    }
  };
  const onChangeHandlerEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setSignInData((prev: FormI) => {
      return {
        ...prev,
        [id]: value,
      };
    });

    if (signInData.email.length < 5) {
      setEmailError("Email should be longer that 5 symbols");
    } else if (!signInData.email.includes("@")) {
      setEmailError("Email should contain symbol @ ...");
    } else {
      setEmailError("");
    }
  };
  const signInMethod = (event: React.FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, signInData.email, signInData.password).then((userCredential) => {
      const user = userCredential.user;
      alert('User logged !!!');
    }).catch((error) => {console.log(error.message)});
    setIsFormVisible(false);
  };

  return (
    <form className={styles.signIn_Form} onSubmit={signInMethod}>
      <h1 className={styles.header}>Sign In</h1>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          name="email"
          placeholder="Type your email"
          id="email"
          value={signInData.email}
          onBlur={(event) => onBlurHandler(event)}
          onChange={(event) => onChangeHandlerEmail(event)}
        />
        {isVisibleEmailError ? (
          <span className={styles.error}>{emailError}</span>
        ) : null}
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          name="password"
          placeholder="Type your password"
          id="password"
          value={signInData.password}
          onBlur={(event) => onBlurHandler(event)}
          onChange={(event) => onChangeHandlerPassword(event)}
        />
        {isVisiblePasswordError ? (
          <span className={styles.error}>{passwordError}</span>
        ) : null}
        <div className={styles.button_Block}>
          <button
            className={styles.button}
            disabled={passwordError || emailError ? true : false}
          >
            Sing In
          </button>
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
