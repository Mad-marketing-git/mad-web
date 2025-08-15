
import React from 'react';
import styles from './Contact.module.css';
import background from '../assets/IMAGE ASSETS BG REMOVED/page-6/page-6-bg.png';
import redCar from '../assets/IMAGE ASSETS BG REMOVED/TB RED CAR.png';
import greenCar from '../assets/IMAGE ASSETS BG REMOVED/TB GREEN CAR.png';
import pinkCar from '../assets/IMAGE ASSETS BG REMOVED/TB PINK CAR.png';
import yellowCar from '../assets/IMAGE ASSETS BG REMOVED/TB YELLOW CAR.png';
import yellowBus from '../assets/IMAGE ASSETS BG REMOVED/TB YELLOW BUS.png';
import wheel from '../assets/3wheel.png';
import van from '../assets/van.png';
const Contact = () => {
  return (
    <div className={styles.page6Container}>
      <img src={background} alt="background" className={styles.backgroundImage} />
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
};

export default Contact;
