import React from 'react';
import styles from './SiteLogo.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <a href="#">
      <div>גבריאל כתרי</div>
      <div className={styles.seperator}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>עו״ד ונוטריון</div>
    </a>
  </div>
);