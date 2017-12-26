import React from 'react';
import SocialLinks from './SocialLinks';
import styles from './SiteFooter.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.column}>
      <h5>מידע כללי</h5>
      <ul className={styles.menu}>
        <li><a href="/parallax">פרופיל</a></li>
        <li><a href="/about">אודותינו</a></li>
        <li><a href="/contact">יצירת קשר</a></li>
        <li><a href="http://telaviv.mae.ro/en" target="_blank">שגרירות רומניה</a></li>
      </ul>
    </div>
    <div className={styles.column}>
      <h5>כתבות</h5>
      <ul className={styles.menu}>
        <li><a href="/citizenship">אזרחות רומנית</a></li>
        <li><a href="/birth-cert">תעודת לידה רומנית</a></li>
        <li><a href="/passport">זכאות לדרכון רומני</a></li>
        <li><a href="/advantages">יתרונות לדרכון רומני</a></li>
        <li><a href="/real-estate">נדל״ן ברומניה</a></li>
        <li><a href="/property">השבת רכוש</a></li>
      </ul>
    </div>
    <div className={styles.column}>
      <h5>משרדנו</h5>
      <ul className={styles.menu}>
        <li>סוקולוב 29, הרצליה</li>
        <li>שד' המגינים 39, חיפה</li>
        <li>טלפון: 09-9509504, 04-8525130</li>
        <li>פקס: 09-9586332</li>
      </ul>
      <SocialLinks />
    </div>
  </div>
);