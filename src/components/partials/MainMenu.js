import React from 'react';
import Seperator from './Seperator';
import FlagSeperator from './FlagSeperator';
import styles from './MainMenu.module.scss';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const test = document.documentElement.clientHeight - 150 - this.menuEl.getBoundingClientRect().height - 50;
    const fixed = window.scrollY > test;
    this.setState({
      fixed,
    });
  }

  render() {
    const { fixed } = this.state;
    const classes = [styles.menu];
    if (fixed) {
      classes.push(styles.fixed);
    }
    return (
      <nav className={classes.join(' ')} ref={el => this.menuEl = el}>
          <FlagSeperator />
        <Seperator>
          <ul>
            <li><a href="/parallax">פרופיל</a></li>
            <li><a href="/about">אודותינו</a></li>
            <li><a href="/citizenship">אזרחות רומנית</a></li>
            <li><a href="/birth-cert">תעודת לידה רומנית</a></li>
            <li><a href="/passport">זכאות לדרכון רומני</a></li>
            <li><a href="/advantages">יתרונות לדרכון רומני</a></li>
            <li><a href="/real-estate">נדל״ן ברומניה</a></li>
            <li><a href="/property">השבת רכוש</a></li>
            <li><a href="/contact">יצירת קשר</a></li>
          </ul>
      </Seperator>
        </nav>
    );
  }
}
