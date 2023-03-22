import React, { useState } from "react";
import { FormI } from "../../../../interface/global";
import styles from "./SignInForm.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface SignInFormProps {
  setIsRegistrationFormVisible: Function;
  setIsFormVisible: Function;
}

type FormState = {
  email: string;
  password: string;
};

export default function SignInForm({
  setIsRegistrationFormVisible,
  setIsFormVisible,
}: SignInFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormI>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigation = useNavigate();

  const onSubmit = (data: FormState) => {
    if (data.email.length < 1 || data.password.length < 1) {
      console.log('One field is empty');
    } else {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("User logged !!!");
        })
        .catch((error) => {
          console.log(error.message);
        });
      setIsFormVisible(false);
      navigation('/');
    }
  };

  return (
    <form className={styles.signIn_Form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.header}>Sign In</h1>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            minLength: {
              value: 5,
              message: "Should be more than 5 and @ symbol.",
            },
            validate: {
              randomValidate: (value) => {
                return value.includes("@");
              },
            },
          })}
          className={styles.input}
          placeholder="Type your email"
        />
        {<span className={styles.error}>{errors.email?.message}</span>}
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          {...register("password", {
            minLength: {
              value: 5,
              message: "Length more than 5.",
            },
          })}
          className={styles.input}
          placeholder="Type your password"
        />
        {<span className={styles.error}>{errors.password?.message}</span>}
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
