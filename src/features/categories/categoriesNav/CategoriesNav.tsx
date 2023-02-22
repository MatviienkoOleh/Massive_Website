import React from 'react';
import styles from './CategoriesNav.module.css';

interface CategoriesNavProps {
  setCurrentType: Function;
}


export default function CategoriesNav({setCurrentType}: CategoriesNavProps) {

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={() => setCurrentType('boots')}>BOOTS</li>
        <li className={styles.item} onClick={() => setCurrentType('sandals')}>SANDALS</li>
        <li className={styles.item} onClick={() => setCurrentType('highHeels')}>HIGH HEELS</li>
        <li className={styles.item} onClick={() => setCurrentType('loafers')}>LOAFERS</li>
        <li className={styles.item} onClick={() => setCurrentType('oxford')}>OXFORD</li>
        <li className={styles.item} onClick={() => setCurrentType('platforms')}>PLATFORMS</li>
      </ul>
    </nav>
  )
}

