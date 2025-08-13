import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/IMAGE ASSETS BG REMOVED/TB LOGO.png'; // Logo for footer

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <img src={logo} alt="MAD Marketing Logo" className={styles.footerLogo} />
          <p className={styles.description}>
            MAD Marketing is your partner in crafting compelling digital experiences with seamless technology and thoughtful designs.
          </p>
          <div className={styles.socialIcons}>
            {/* Placeholder for social media icons */}
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">E-commerce</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <ul>
            <li><a href="#">info@madmarketing.com</a></li>
            <li><a href="#">+1 (123) 456-7890</a></li>
            <li><a href="#">123 Digital St, Tech City</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} MAD Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
