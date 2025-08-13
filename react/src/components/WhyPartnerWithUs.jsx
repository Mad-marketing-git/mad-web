import React from 'react';
import styles from './WhyPartnerWithUs.module.css';
import sectionBg from '../assets/IMAGE ASSETS BG REMOVED/TB SECTION 2 BG.png'; // Background image for the section
import phoneImage from '../assets/IMAGE ASSETS BG REMOVED/TB DEVICE ICON.png'; // Placeholder for phone image

const WhyPartnerWithUs = () => {
  return (
    <section className={styles.whyPartnerWithUs} style={{ backgroundImage: `url(${sectionBg})` }}>
      <h2>WHY PARTNER WITH US?</h2>
      <div className={styles.contentContainer}>
        <div className={styles.phoneMockup}>
          <img src={phoneImage} alt="Phone Mockup" className={styles.phoneImage} />
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
