
import React from 'react';
import styles from './Contact.module.css';
import skyline from '../assets/IMAGE ASSETS BG REMOVED/TB SKYLINE BG.png';
import road from '../assets/IMAGE ASSETS BG REMOVED/TB ROAD.png';
import redCar from '../assets/IMAGE ASSETS BG REMOVED/TB RED CAR.png';
import greenCar from '../assets/IMAGE ASSETS BG REMOVED/TB GREEN CAR.png';
import pinkCar from '../assets/IMAGE ASSETS BG REMOVED/TB PINK CAR.png';
import yellowCar from '../assets/IMAGE ASSETS BG REMOVED/TB YELLOW CAR.png';
import yellowBus from '../assets/IMAGE ASSETS BG REMOVED/TB YELLOW BUS.png';

const Contact = () => {
  return (
    <div className={styles.page6Container}>
      <div className={styles.content}>
        <div className={styles.talkToUs}>
          <h2>TALK TO US</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone: +94" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">FULL SEND!</button>
          </form>
        </div>
      </div>
      <div className={styles.footerCityscape}>
        <img src={skyline} alt="skyline" className={styles.skyline} />
        <img src={road} alt="road" className={styles.road} />
        <img src={redCar} alt="red car" className={`${styles.car} ${styles.redCar}`} />
        <img src={greenCar} alt="green car" className={`${styles.car} ${styles.greenCar}`} />
        <img src={pinkCar} alt="pink car" className={`${styles.car} ${styles.pinkCar}`} />
        <img src={yellowCar} alt="yellow car" className={`${styles.car} ${styles.yellowCar}`} />
        <img src={yellowBus} alt="yellow bus" className={`${styles.car} ${styles.yellowBus}`} />
      </div>
    </div>
  );
};

export default Contact;
