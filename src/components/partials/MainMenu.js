import React from 'react';
import FontAwesome from 'react-fontawesome';
import Link from 'gatsby-link';
import Seperator from './Seperator';
import FlagSeperator from './FlagSeperator';
import Flags from './Flags';
import styles from './MainMenu.module.scss';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      mobileToggled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMobileToggle = this.handleMobileToggle.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleMobileToggle(event) {
    this.setState({
      mobileToggled: !this.state.mobileToggled,
    });
  }

  handleMenuClick(event) {
    this.setState({
      mobileToggled: false,
    });
  }

  handleScroll(event) {
    // const test = document.documentElement.clientHeight - 150 - this.menuEl.getBoundingClientRect().height - 50;
    const actual = document.documentElement.clientHeight * 60 / 100;
    const test = parseInt(actual) - 30 - 14;
    const fixed = window.scrollY > test;
    if (fixed !== this.state.fixed) {
      this.setState({
        fixed,
      });
    }
  }

  render() {
    const { fixed, mobileToggled } = this.state;
    const classes = [styles.wrapper];
    if (mobileToggled || fixed) {
      classes.push(styles.fixed);
    }
    if (mobileToggled) {
      classes.push(styles.mobileToggled);
    }
    return (
      <nav className={classes.join(' ')} ref={el => this.menuEl = el}>
          <Flags fixed={!!fixed} />
          <FlagSeperator />
          <Seperator>
            <label htmlFor="toggle" className={`${styles.toggleLabel} ${mobileToggled ? styles.rotate : ''}`}>
              <FontAwesome
                name='navicon'
                size='2x'
              />
            </label>
            <input 
              type="checkbox" 
              id="toggle" 
              className={styles.toggle}
              value={this.state.mobileToggled} 
              onChange={this.handleMobileToggle}
              /> 
            <ul className={styles.menu}>
              {/* <li>
                <Link 
                  to="/parallax" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >פרופיל
                </Link>
              </li> */}
              <li>
                <Link 
                  to="/about" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >אודותינו
                </Link>
              </li>
              <li>
                <Link 
                  to="/citizenship" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >אזרחות רומנית
                </Link>
              </li>
              <li>
                <Link 
                  to="/birth-cert" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >תעודת לידה רומנית
                </Link>
              </li>
              <li>
                <Link 
                  to="/passport" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >זכאות לדרכון רומני
                </Link>
              </li>
              <li>
                <Link 
                  to="/advantages" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >יתרונות לדרכון רומני
                </Link>
              </li>
              <li>
                <Link 
                  to="/real-estate" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >נדל״ן ברומניה
                </Link>
              </li>
              <li>
                <Link 
                  to="/property" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >השבת רכוש
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={this.handleMenuClick}
                  activeClassName={styles.active}
                  >יצירת קשר
                </Link>
              </li>
            </ul>
        </Seperator>
      </nav>
    );
  }
}
