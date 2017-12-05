import React from 'react';

const ContactPage = () => (
  <div>
    <h1>צור קשר</h1>
    <form action="#" method="POST">
        <input type="text" name="name"></input>
        <input type="email" name="_replyto"></input>
        <input type="submit" value="Send"></input>
    </form>
    <div style={{ border: '2px solid #555' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.3422925563982!2d34.84118612923464!3d32.16731829882249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d480b6789046f%3A0x5ebcf6295d36375a!2sSokolov+St+29%2C+Herzliya!5e0!3m2!1sen!2sil!4v1512465957973" 
        width="100%" height="450" 
        frameBorder="0" 
        style={{ border: 0 }}
        allowfullscreen 
        />
    </div>
  </div>
)

export default ContactPage
