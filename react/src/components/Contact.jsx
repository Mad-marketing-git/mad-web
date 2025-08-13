import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>TALK TO US</h2>
      <div className={styles.contactInfo}>
        <p>Email: info@madmarketing.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Digital Street, Suite 456, Tech City, TC 98765</p>
      </div>
      <button className={styles.contactButton}>Get a Quote</button>
    </section>
  );
};

export default Contact;
