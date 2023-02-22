import React, { useEffect, useState } from "react";
import styles from "./RegistrationForm.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../../firebase';
import { FormI } from "../../../../interface/global";

interface RegistrationFormProps {
  setIsRegistrationFormVisible: Function;
  setIsFormVisible: Function;
}

export default function RegistrationForm({
  setIsRegistrationFormVisible,
  setIsFormVisible
}: RegistrationFormProps) {
  const [registrationData, setRegistrationData] = useState<FormI>({
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

    setRegistrationData((prev: FormI) => {
      return {
        ...prev,
        [id]: value,
      };
    });

    if (registrationData.password.length < 5) {
      setPasswordError("Email should be longer that 5 symbols");
    } else {
      setPasswordError("");
    }
  };
  const onChangeHandlerEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setRegistrationData((prev: FormI) => {
      return {
        ...prev,
        [id]: value,
      };
    });

    if (registrationData.email.length < 5) {
      setEmailError("Email should be longer that 5 symbols");
    } else if (!registrationData.email.includes("@")) {
      setEmailError("Email should contain symbol @ ...");
    } else {
      setEmailError("");
    }

  }
  const onPress = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, registrationData.email, registrationData.password)
      .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        alert('User created !')
        setIsFormVisible(false);
      })
      .catch((error) => {
        console.log(error.message);
        alert('User not created ')
      });
  };
  
  return (
    <form className={styles.registration_Form} onSubmit={onPress}>
      <h1 className={styles.form_Header}>Registration</h1>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          name="email"
          placeholder="Type your email"
          value={registrationData.email}
          id="email"
          onChange={(event) => onChangeHandlerEmail(event)}
          onBlur={(event) => onBlurHandler(event)}
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
          id="password"
          placeholder="Type your password"
          value={registrationData.password}
          onChange={(event) => onChangeHandlerPassword(event)}
          onBlur={(event) => onBlurHandler(event)}
        />
        {isVisiblePasswordError ? (
          <span className={styles.error}>{passwordError}</span>
        ) : null}
        <div className={styles.button_Block}>
          <button
            disabled={
              passwordError || emailError ? true : false
            }
            className={styles.button}
          >
            Registration
          </button>
          <span
            onClick={() => setIsRegistrationFormVisible(false)}
            className={styles.registration_Link}
          >
            Sign in
          </span>
        </div>
      </div>
    </form>
  );
}
