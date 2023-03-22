import React, { useEffect, useState } from "react";
import styles from "./RegistrationForm.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { FormI } from "../../../../interface/global";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface RegistrationFormProps {
  setIsRegistrationFormVisible: Function;
  setIsFormVisible: Function;
}

export default function RegistrationForm({
  setIsRegistrationFormVisible,
  setIsFormVisible,
}: RegistrationFormProps) {
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

  const onSubmit = (data: FormI) => {
    if (data.email.length < 1 || data.password.length < 1) {
      console.log("One field is empty");
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          //signed in
          const user = userCredential.user;
          alert("User created !");
          setIsFormVisible(false);
        })
        .catch((error) => {
          console.log(error.message);
          alert("User not created ");
        });
      navigation("/");
    }
  };

  return (
    <form
      className={styles.registration_Form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className={styles.form_Header}>Registration</h1>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          placeholder="Type your email"
          {...register("email", {
            required: true,
            minLength: {
              value: 5,
              message: "Should be more than 5 and @ symbol.",
            },
            validate: (value) => {
              return value.includes("@");
            },
          })}
        />
        {<span className={styles.error}>{errors.email?.message}</span>}
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          placeholder="Type your password"
          {...register("password", {
            required: true,
            minLength: {
              value: 5,
              message: "Length more than 5.",
            },
          })}
        />
        {<span className={styles.error}>{errors.password?.message}</span>}
        <div className={styles.button_Block}>
          <button className={styles.button}>Registration</button>
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
