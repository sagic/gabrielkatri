import React from 'react';
import Partials from './../components/partials';
import styles from './contact.module.scss'

const ContactPage = () => (
  <div>
    <h1 className={styles.title}>צור קשר</h1>
    <div className={styles.content}>
      <Partials.ContactForm />
      {/* <form className={styles.form} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.row}>
          <label htmlFor={name}>שם:</label>
          <input type="text" name="name" />
        </div>
        <div className={styles.row}>
          <label htmlFor={name}>טלפון:</label>
          <input type="text" name="phone" />
        </div>
        <div className={styles.row}>
          <label htmlFor={name}>אימייל:</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.row}>
          <label htmlFor={name}>הודעה:</label>
          <textarea name="message"></textarea>
        </div>
        <button>שלח</button>
      </form> */}
      <div style={{ border: '2px solid #555' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.3422925563982!2d34.84118612923464!3d32.16731829882249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d480b6789046f%3A0x5ebcf6295d36375a!2sSokolov+St+29%2C+Herzliya!5e0!3m2!1sen!2sil!4v1512465957973" 
          width="100%" height="450" 
          frameBorder="0" 
          style={{ border: 0 }}
          allowFullScreen 
          />
      </div>
    </div>
  </div>
)

export default ContactPage
