import React from 'react';
import FlagSeperator from './FlagSeperator';
import styles from './SiteFooter.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <FlagSeperator />
    <div>
      Footer
    </div>
  </div>
);