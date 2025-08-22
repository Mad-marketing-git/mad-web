
import React, { useState, forwardRef } from 'react';
import styles from './Contact.module.css';
import backgroundPng from '../assets/Contact/page-6-bg.png';
import backgroundAvif from '../assets/avif/page-6-bg.png';
import backgroundWebp from '../assets/webp/page-6-bg.webp';

import redCarPng from '../assets/Contact/tb red car.png';
import redCarAvif from '../assets/avif/tb red car.png';

import greenCarPng from '../assets/Contact/tb green car.png';
import greenCarAvif from '../assets/avif/tb green car.png';

import pinkCarPng from '../assets/Contact/tb pink car.png';
import pinkCarAvif from '../assets/avif/tb pink car.png';

import yellowCarPng from '../assets/Contact/tb yellow car.png';
import yellowCarAvif from '../assets/avif/tb yellow car.png';

import yellowBusPng from '../assets/Contact/tb yellow bus.png';
import yellowBusAvif from '../assets/avif/tb yellow bus.png';

import wheelPng from '../assets/Contact/3wheel.png';
import wheelAvif from '../assets/avif/3wheel.png';

import vanPng from '../assets/Contact/van.png';
import vanAvif from '../assets/avif/van.png';

import spinnerPng from '../assets/Contact/tb spinner.png';
import spinnerAvif from '../assets/avif/tb spinner.png';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    // WhatsApp number in international format, e.g., '94771234567' for +94 77 123 4567
    const whatsappNumber = '0766343111';
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div id="contact" className={styles.page6Container} ref={ref}>
  <picture>
    <source srcSet={backgroundAvif} type="image/avif" />
    <source srcSet={backgroundWebp} type="image/webp" />
    <img src={backgroundPng} alt="background" className={styles.backgroundImage} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={spinnerAvif} type="image/avif" />
    <img src={spinnerPng} alt="spinner" className={`${styles.spinner} ${styles.spinnerLeft}`} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={spinnerAvif} type="image/avif" />
    <img src={spinnerPng} alt="spinner" className={`${styles.spinner} ${styles.spinnerRight}`} loading="lazy" />
  </picture>
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
  <picture>
    <source srcSet={redCarAvif} type="image/avif" />
    <img src={redCarPng} alt="red car" className={`${styles.car} ${styles.redCar}`} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={greenCarAvif} type="image/avif" />
    <img src={greenCarPng} alt="green car" className={`${styles.car} ${styles.greenCar}`} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={pinkCarAvif} type="image/avif" />
    <img src={pinkCarPng} alt="pink car" className={`${styles.car} ${styles.pinkCar}`} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={yellowCarAvif} type="image/avif" />
    <img src={yellowCarPng} alt="yellow car" className={`${styles.car} ${styles.yellowCar}`} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={yellowBusAvif} type="image/avif" />
    <img src={yellowBusPng} alt="yellow bus" className={`${styles.bus} ${styles.yellowBus}`} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={wheelAvif} type="image/avif" />
    <img src={wheelPng} alt="3 wheel" className={`${styles.wheel} ${styles.threeWheel}`} loading="lazy" />
  </picture>
  <picture>
    <source srcSet={vanAvif} type="image/avif" />
    <img src={vanPng} alt="van" className={`${styles.van} ${styles.whiteVan}`} loading="lazy" />
  </picture>
      </div>
    </div>
  );
});

export default Contact;
