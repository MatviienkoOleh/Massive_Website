import React, { useState } from "react";
import styles from "./Form.module.css";
import RegistrationForm from "./registrationForm/RegistrationForm";
import SignInForm from "./signInForm/SignInForm";

interface FormProps {
  setIsFormVisible: Function;
}

export default function Form ({ setIsFormVisible }: FormProps) {
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState(false);

  return (
    <div className={styles.form}>
      {!isRegistrationFormVisible ? (
        <SignInForm setIsRegistrationFormVisible={setIsRegistrationFormVisible} setIsFormVisible={setIsFormVisible}/>
      ) : (
        <RegistrationForm setIsRegistrationFormVisible={setIsRegistrationFormVisible} setIsFormVisible={setIsFormVisible}/>
      )}
    </div>
  );
}
