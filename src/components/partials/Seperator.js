import React from 'react';
import styles from './Seperator.module.scss';

export default ({children}) => (
  <div className={[styles.box, styles.css3Shadow].join(' ')}>
    {children}
  </div>
);