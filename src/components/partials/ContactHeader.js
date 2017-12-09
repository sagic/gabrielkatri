import React from 'react';
import styles from './ContactHeader.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.contactHeader}>
      <div>
        <span>לבדיקת זכאות צלצלו </span><a href="tel:+972-9-950-9504">09-950-9504</a>&nbsp;
      </div>
      <div>או <a href="/contact">השאירו פרטים</a> ונשוב אליכם</div>
    </div>
  </div>
);