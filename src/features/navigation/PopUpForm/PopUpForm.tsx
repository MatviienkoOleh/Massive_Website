import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import Footer from "../../footer/Footer";
import Form from "../Form/Form";
import Navigation from "../Navigation";
import styles from './PopUpForm.module.css';

export default function PopUpForm() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const isVisiblePopUp = useAppSelector(state=> state.categories.isVisiblePopUp);

  return (
    <div>
      <Navigation />
      <div className={styles.popUpForm} style={isVisiblePopUp ? {display: 'none'} : {display: 'block'}}>
        <Form setIsFormVisible={setIsFormVisible} />
      </div>
      <Footer />
    </div>
  );
}
