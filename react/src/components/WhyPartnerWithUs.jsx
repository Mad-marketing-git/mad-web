import React from 'react';
import styles from './WhyPartnerWithUs.module.css';
import sectionBgPng from '../assets/WhyPartnerWithUs/tb section 2 bg.png';
import sectionBgAvif from '../assets/avif/tb section 2 bg.png';

import phoneImagePng from '../assets/Page3Section/tb device icon.png';
import phoneImageAvif from '../assets/avif/tb device icon.png';

const WhyPartnerWithUs = () => {
  return (
    <section className={styles.whyPartnerWithUs} style={{ backgroundImage: `url(${sectionBgPng})` }}>
      <h2>WHY PARTNER WITH US?</h2>
      <div className={styles.contentContainer}>
        <div className={styles.phoneMockup}>
          <picture>
            <source srcSet={phoneImageAvif} type="image/avif" />
            <img src={phoneImagePng} alt="Phone Mockup" className={styles.phoneImage} loading="lazy" />
          </picture>
          <div className={styles.overlayText}>
            <h3>Cutting-Edge Technology</h3>
            <p>Utilizing the latest tools and frameworks to build websites that are fast, secure, and scalable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
