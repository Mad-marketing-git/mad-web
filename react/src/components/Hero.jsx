import React, { forwardRef } from 'react';
import styles from './Hero.module.css';
import heroBg from '../assets/hero/hero-bg.png'; // Import the background image
import heroBgAvif from '../assets/avif/hero-bg.png';

import logoPng from '../assets/hero/tb logo.png';
import logoAvif from '../assets/avif/tb logo.png';
import { Fade } from 'react-awesome-reveal';

const Hero = forwardRef(({ nextSection }, ref) => {
  return (
    <section id="home" className={styles.hero} style={{ backgroundImage: `url(${heroBg})`, backgroundColor: '#1a2340' }} ref={ref}>
      <div className={styles.heroContent}>
        <Fade direction="down" triggerOnce>
          <picture>
            <source srcSet={logoAvif} type="image/avif" />
            <img src={logoPng} alt="logo" className={styles.logo} loading="lazy" />
          </picture>
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

      {/* Falling Stars */}
      <div className={styles.fallingStar} style={{ top: '20%', right: '0%', animationDelay: '0s' }}></div>
      <div className={styles.fallingStar} style={{ top: '10%', right: '-20%', animationDelay: '2s' }}></div>
      <div className={styles.fallingStar} style={{ top: '30%', right: '-40%', animationDelay: '4s' }}></div>
      <div className={styles.fallingStar} style={{ top: '5%', right: '-60%', animationDelay: '6s' }}></div>
      <div className={styles.fallingStar} style={{ top: '25%', right: '-80%', animationDelay: '8s' }}></div>
      <div className={styles.fallingStar} style={{ top: '15%', right: '-100%', animationDelay: '10s' }}></div>
    </section>
  );
});

export default Hero;
