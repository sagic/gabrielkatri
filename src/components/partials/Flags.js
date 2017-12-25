import React from 'react';
import styles from './Flags.module.scss';

import EuroFlag from './../../assets/euro.svg';
import IsraelFlag from './../../assets/il.svg';
import RomaniaFlag from './../../assets/ro.svg';

export default () => (
  <div className={styles.wrapper}>
    <div><img src={IsraelFlag} /></div>
    <div><img src={EuroFlag} /></div>
    <div><img src={RomaniaFlag} /></div>
  </div>
);