import React from 'react';
import styles from './Hero.module.css';
import heroBg from '../assets/hero-bg.png'; // Import the background image
import logo from '../assets/TB LOGO.png';

const Hero = () => {
  return (
    <section id="home" className={styles.hero} style={{ backgroundImage: `url(${heroBg})`, backgroundColor: '#1a2340' }}>
      <div className={styles.heroContent}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1>DIGITAL SOLUTIONS THAT DELIVER</h1>
        <p>
          At MAD Marketing, we are not just another digital marketing agency. We are your partners in crafting compelling digital experiences with seamless technology and thoughtful designs to drive real-world results. From strategy to ongoing support, we are committed to your growth.
        </p>
        <button className={styles.heroButton}>Learn More</button>
      </div>
      {/* Placeholder for abstract graphics */}
      <div className={styles.graphic1}></div>
      <div className={styles.graphic2}></div>
    </section>
  );
};

export default Hero;
