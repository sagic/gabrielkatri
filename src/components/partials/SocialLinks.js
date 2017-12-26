import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './SocialLinks.module.scss';

export default ({ fixed }) => (
  <div className={styles.wrapper}>
    <a href="#"><FontAwesome name='facebook' /></a>
    <a href="#"><FontAwesome name='twitter' /></a>
    <a href="#"><FontAwesome name='linkedin' /></a>
  </div>
);