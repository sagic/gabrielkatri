import React from 'react';
import styles from './MainMenu.module.scss';

export default () => (
  <nav className={styles.menu}>
    <ul>
      <li><a href="/citizenship">אזרחות רומנית</a></li>
      <li><a href="/birth-cert">תעודת לידה רומנית</a></li>
      <li><a href="/passport">זכאות לדרכון רומני</a></li>
      <li><a href="/advantages">יתרונות לדרכון רומני</a></li>
      <li><a href="/real-estate">נדל״ן ברומניה</a></li>
      <li><a href="/property">השבת רכוש</a></li>
    </ul>
  </nav>
);
