
import React, { useState, forwardRef } from 'react';
import styles from './Contact.module.css';
import background from '../assets/IMAGE ASSETS BG REMOVED/page-6/page-6-bg.png';
import redCar from '../assets/IMAGE ASSETS BG REMOVED/TB RED CAR.png';
import greenCar from '../assets/IMAGE ASSETS BG REMOVED/TB GREEN CAR.png';
import pinkCar from '../assets/IMAGE ASSETS BG REMOVED/TB PINK CAR.png';
import yellowCar from '../assets/IMAGE ASSETS BG REMOVED/TB YELLOW CAR.png';
import yellowBus from '../assets/IMAGE ASSETS BG REMOVED/TB YELLOW BUS.png';
import wheel from '../assets/3wheel.png';
import van from '../assets/van.png';
import spinner from '../assets/IMAGE ASSETS BG REMOVED/TB SPINNER.png';
import { Fade } from 'react-awesome-reveal';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div id="contact" className={styles.page6Container} ref={ref}>
      <img src={background} alt="background" className={styles.backgroundImage} />
      <img src={spinner} alt="spinner" className={`${styles.spinner} ${styles.spinnerLeft}`} />
      <img src={spinner} alt="spinner" className={`${styles.spinner} ${styles.spinnerRight}`} />
      <div className={styles.content}>
        <Fade direction="down" triggerOnce>
          <div className={styles.talkToUs}>
            <h2>TALK TO US</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone: +94"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">FULL SEND!</button>
            </form>
          </div>
        </Fade>
      </div>
      <div className={styles.footerCityscape}>
        <img src={redCar} alt="red car" className={`${styles.car} ${styles.redCar}`} />
        <img src={greenCar} alt="green car" className={`${styles.car} ${styles.greenCar}`} />
        <img src={pinkCar} alt="pink car" className={`${styles.car} ${styles.pinkCar}`} />
        <img src={yellowCar} alt="yellow car" className={`${styles.car} ${styles.yellowCar}`} />
        <img src={yellowBus} alt="yellow bus" className={`${styles.bus} ${styles.yellowBus}`} />
        <img src={wheel} alt="3 wheel" className={`${styles.wheel} ${styles.threeWheel}`} />
        <img src={van} alt="van" className={`${styles.van} ${styles.whiteVan}`} />
      </div>
    </div>
  );
});

export default Contact;
