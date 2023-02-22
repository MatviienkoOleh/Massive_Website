import React from 'react';
import styles from './ShoeView.module.css';

interface ShoeViewProps {
  shoe: any;
}

export default function ShoeView({shoe}: ShoeViewProps) {
  const {url, model, price, type, description, id} = shoe;
  return (
    <div className={styles.wrapper}>
      <img className={styles.photo} src = {shoe.url} alt = 'shoe photo'/>
      <span className={styles.model_Number}><b>Model:</b> № {model}</span>
      <span className={styles.type}><b>Type:</b> {type}</span>
      <span className={styles.price}><b>Price:</b> {price} $</span>
    </div>
  )
}
