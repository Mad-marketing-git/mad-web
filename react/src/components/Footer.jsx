
import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/TB LOGO.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <img src={logo} alt="MAD Marketing Logo" className={styles.footerLogo} />
          <p className={styles.description}>
            MAD Marketing delivers innovative web solutions that fuel business growth. We specialize in custom design, development, and digital strategy to create fast, reliable, and user-friendly websites tailored to your brand. With seamless mobile optimization and strong backend systems, we ensure your online presence excels on every device.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Ethos</a></li>
            <li><a href="#">Why MAD?</a></li>
            <li><a href="#">Core Services</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.017199313228!2d79.89549351477272!3d6.888206895022848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2d7d83c6f7%3A0x3b6247385183b8b!2sBusiness%20Centre%20-%20Nugegoda!5e0!3m2!1sen!2slk!4v1678886633386!5m2!1sen!2slk" 
            width="100%" 
            height="250" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <p>
            MAD Spaces
            <br />
            Level 6, Nugegoda Business Centre,
            <br />
            80 Nawala Road, Nugegoda
            <br />
            Sri Lanka
          </p>
          <p>
            0766 343 111
            <br />
            info@madmarketing.lk
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2025 MAD Marketing</p>
      </div>
    </footer>
  );
};

export default Footer;
