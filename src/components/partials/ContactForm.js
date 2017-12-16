import React from 'react';
import styles from './ContactForm.module.scss';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, phone, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <label htmlFor={name}>שם:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </div>
        <div className={styles.row}>
          <label htmlFor={name}>טלפון:</label>
          <input type="text" name="phone" value={phone} onChange={this.handleChange} />
        </div>
        <div className={styles.row}>
          <label htmlFor={name}>אימייל:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className={styles.row}>
          <label htmlFor={name}>הודעה:</label>
          <textarea name="message" value={message} onChange={this.handleChange}></textarea>
        </div>
        <p>
          <button type="submit">שלח</button>
        </p>
      </form>
    );
  }
}