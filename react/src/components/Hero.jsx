import React, { forwardRef } from 'react';
import styles from './Hero.module.css';
import heroBg from '../assets/hero-bg.png'; // Import the background image
import logo from '../assets/TB LOGO.png';
import { Fade } from 'react-awesome-reveal';

const Hero = forwardRef(({ nextSection }, ref) => {
  return (
    <section id="home" className={styles.hero} style={{ backgroundImage: `url(${heroBg})`, backgroundColor: '#1a2340' }} ref={ref}>
      <div className={styles.heroContent}>
        <Fade direction="down" triggerOnce>
          <img src={logo} alt="logo" className={styles.logo} />
        </Fade>
        <Fade direction="down" delay={200} triggerOnce>
          <h1>DIGITAL SOLUTIONS THAT DELIVER</h1>
        </Fade>
        <Fade direction="down" delay={400} triggerOnce>
          <p>
            At MAD Marketing, we are not just another digital marketing agency. We are your partners in crafting compelling digital experiences with seamless technology and thoughtful designs to drive real-world results. From strategy to ongoing support, we are committed to your growth.
          </p>
        </Fade>
        <Fade direction="down" delay={600} triggerOnce>
          <button className={styles.heroButton} onClick={nextSection}>Learn More</button>
        </Fade>
      </div>
      {/* Placeholder for abstract graphics */}
      <div className={styles.graphic1}></div>
      <div className={styles.graphic2}></div>
    </section>
  );
});

export default Hero;
