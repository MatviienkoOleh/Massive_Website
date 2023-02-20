import React, { useState } from "react";
import styles from "./Form.module.css";
import RegistrationForm from "./registrationForm/RegistrationForm";
import SignInForm from "./signInForm/SignInForm";

export default function Form() {
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState(false);

  return (
    <div className={styles.form}>
      {!isRegistrationFormVisible ? (
        <SignInForm setIsRegistrationFormVisible={setIsRegistrationFormVisible}/>
      ) : (
        <RegistrationForm setIsRegistrationFormVisible={setIsRegistrationFormVisible}/>
      )}
    </div>
  );
}
