import React from 'react';
import styles from './Slider.module.css';

export default function Slider() {
  return (
    <div className={styles.container}>
        <img className = {styles.image} src={'../../../../assets/main_Background.jpg'} alt='image'/>
        <img className = {styles.image} src={'../../../../assets/main_Background.jpg'} alt='image'/>
        <img className = {styles.image} src={'../../../../assets/main_Background.jpg'} alt='image'/>
    </div>
  )
}
