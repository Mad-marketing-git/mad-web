
import React, { useState, forwardRef } from 'react';
import styles from './Contact.module.css';
import background from '../assets/IMAGE_ASSETS_BG_REMOVED/page-6/page-6-bg.png';
import redCar from '../assets/IMAGE_ASSETS_BG_REMOVED/tb red car.png';
import greenCar from '../assets/IMAGE_ASSETS_BG_REMOVED/tb green car.png';
import pinkCar from '../assets/IMAGE_ASSETS_BG_REMOVED/tb pink car.png';
import yellowCar from '../assets/IMAGE_ASSETS_BG_REMOVED/tb yellow car.png';
import yellowBus from '../assets/IMAGE_ASSETS_BG_REMOVED/tb yellow bus.png';
import wheel from '../assets/3wheel.png';
import van from '../assets/van.png';
import spinner from '../assets/IMAGE_ASSETS_BG_REMOVED/tb spinner.png';
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
  <img src={background} alt="background" className={styles.backgroundImage} loading="lazy" />
  <img src={spinner} alt="spinner" className={`${styles.spinner} ${styles.spinnerLeft}`} loading="lazy" />
  <img src={spinner} alt="spinner" className={`${styles.spinner} ${styles.spinnerRight}`} loading="lazy" />
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
  <img src={redCar} alt="red car" className={`${styles.car} ${styles.redCar}`} loading="lazy" />
  <img src={greenCar} alt="green car" className={`${styles.car} ${styles.greenCar}`} loading="lazy" />
  <img src={pinkCar} alt="pink car" className={`${styles.car} ${styles.pinkCar}`} loading="lazy" />
  <img src={yellowCar} alt="yellow car" className={`${styles.car} ${styles.yellowCar}`} loading="lazy" />
  <img src={yellowBus} alt="yellow bus" className={`${styles.bus} ${styles.yellowBus}`} loading="lazy" />
  <img src={wheel} alt="3 wheel" className={`${styles.wheel} ${styles.threeWheel}`} loading="lazy" />
  <img src={van} alt="van" className={`${styles.van} ${styles.whiteVan}`} loading="lazy" />
      </div>
    </div>
  );
});

export default Contact;
