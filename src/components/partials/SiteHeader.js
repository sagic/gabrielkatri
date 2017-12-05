import React from 'react';

import SiteLogo from './SiteLogo';
import MainMenu from './MainMenu';

import styles from './SiteHeader.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <SiteLogo />
    <MainMenu />
  </div>
);