import React from 'react';
import styles from './Main.module.scss';

export default ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);