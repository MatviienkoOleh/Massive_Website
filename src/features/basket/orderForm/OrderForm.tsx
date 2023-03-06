import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import styles from "./OrderForm.module.css";
import OrderInput from "./orderInput/OrderInput";
import { auth, db } from "../../../firebase";
import { OrderFromDBI, PersonalDataI } from "../../../interface/global";
import { useNavigate } from "react-router";
import { ref, update } from "firebase/database";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clearOrder } from "../../categories/categoriesSlice";

export default function OrderForm() {
  const ordersFromDb = useAppSelector((state) => state.categories.ordersFromDB);
  const order = useAppSelector((state) => state.categories.order);
  const [personalData, setPersonalData] = useState<PersonalDataI>({
    name: "",
    secondName: "",
    phone: "",
    address: "",
    email: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [nameError, setNameError] = useState<string>("Incorrect name...");
  const [isValidNameError, setIsValidNameError] = useState<boolean>(false);
  const [secondNameError, setSecondNameError] = useState<string>(
    "Incorrect secondName..."
  );
  const [isValidSecondNameError, setIsValidSecondNameError] =
    useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>("Incorrect phone...");
  const [isValidPhoneError, setIsValidPhoneError] = useState<boolean>(false);
  const [addressError, setAddressError] = useState<string>(
    "Incorrect address..."
  );
  const [isValidAddressError, setIsValidAddressError] =
    useState<boolean>(false);

  const checkUserState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPersonalData((prev: PersonalDataI) => {
          return {
            ...prev,
            email: user.email,
          };
        });
      } else {
        alert("Sign In Please!");
        navigate("/Categories");
      }
    });
  };
  const onFocusHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    switch (name) {
      case "name":
        setIsValidNameError(true);
        break;
      case "secondName":
        setIsValidSecondNameError(true);
        break;
      case "phone":
        setIsValidPhoneError(true);
        break;
      case "address":
        setIsValidAddressError(true);
        break;
      default:
        break;
    }
  };
  const nameValidatorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonalData((prev: PersonalDataI) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (personalData.name.length < 3) {
      setNameError("Name should be longer then 3 symbols...");
    } else {
      setNameError("");
    }
  };
  const secondNameValidatorHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPersonalData((prev: PersonalDataI) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (personalData.secondName.length < 3) {
      setSecondNameError("SecondName should be longer then 3 symbols...");
    } else {
      setSecondNameError("");
    }
  };
  const phoneValidatorHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPersonalData((prev: PersonalDataI) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (personalData.phone.length < 10) {
      setPhoneError("Phone should be longer then 11 symbols...");
    } else {
      setPhoneError("");
    }
  };
  const addressValidatorHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPersonalData((prev: PersonalDataI) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (personalData.address.length < 4) {
      setAddressError("Address should be longer then 4 symbols...");
    } else {
      setAddressError("");
    }
  };
  const makeOrder = (event: React.FormEvent) => {
    event.preventDefault();
    const reference = ref(db, "orders");
    let obj: OrderFromDBI = {
      personalData: personalData,
      order: order,
    };

    let array = [...ordersFromDb];
    array.push(obj);
    update(reference, {
      ...array,
    });

    alert("Thank you for your order, our shop-assistant will contact you !");
    navigate("/");
    dispatch(clearOrder());
  };

  useEffect(() => {
    checkUserState();
  }, []);

  return (
    <div className={styles.orderForm_Wrapper}>
      <form className={styles.orderForm_Form} onSubmit={makeOrder}>
        <OrderInput
          label="name"
          value={personalData.name}
          handler={nameValidatorHandler}
          focusHandler={onFocusHandler}
        />
        {isValidNameError ? (
          <div className={styles.orderForm_Error}>{nameError}</div>
        ) : null}
        <OrderInput
          label="secondName"
          value={personalData.secondName}
          handler={secondNameValidatorHandler}
          focusHandler={onFocusHandler}
        />
        {isValidSecondNameError ? (
          <div className={styles.orderForm_Error}>{secondNameError}</div>
        ) : null}
        <OrderInput
          label="phone"
          value={personalData.phone}
          handler={phoneValidatorHandler}
          focusHandler={onFocusHandler}
        />
        {isValidPhoneError ? (
          <div className={styles.orderForm_Error}>{phoneError}</div>
        ) : null}
        <OrderInput
          label="address"
          value={personalData.address}
          handler={addressValidatorHandler}
          focusHandler={onFocusHandler}
        />
        {isValidAddressError ? (
          <div className={styles.orderForm_Error}>{addressError}</div>
        ) : null}
        <OrderInput
          label="email"
          value={personalData.email}
          handler={nameValidatorHandler}
          focusHandler={onFocusHandler}
        />
        <button
          disabled={
            nameError || secondNameError || phoneError || addressError
              ? true
              : false
          }
          className={styles.orderForm_Button}
        >
          Order
        </button>
      </form>
    </div>
  );
}
