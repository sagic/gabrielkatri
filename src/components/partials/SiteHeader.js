import React from 'react';
import PropTypes from 'prop-types';

import SiteLogo from './SiteLogo';
// import MainMenu from './MainMenu';

import Flags from './Flags';

import flagsImage from './../../assets/flags.png';

import styles from './SiteHeader.module.scss';

class SiteHeader extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.background}></div>
        <div className={styles.cover}></div>
        <div className={styles.content}>
          <SiteLogo />
          {/* <MainMenu /> */}
          {/* <Flags /> */}
        </div>
        {/* <div className={styles.flags}><img src={flagsImage}></img></div> */}
      </div>
    );
  }
}

export default SiteHeader;
