import React from 'react';
import styles from './WhatWeDo.module.css';
import bulbIcon from '../assets/IMAGE ASSETS BG REMOVED/TB BULB ICON.png';
import commsIcon from '../assets/IMAGE ASSETS BG REMOVED/TB COMMS ICON.png';
import deviceIcon from '../assets/IMAGE ASSETS BG REMOVED/TB DEVICE ICON.png';
import scaleIcon from '../assets/IMAGE ASSETS BG REMOVED/TB SCALE ICON.png';

const WhatWeDo = () => {
  const cards = [
    {
      icon: bulbIcon,
      title: 'Creative & Strategic Planning',
      description: 'We help you define your vision, set clear goals, and develop a roadmap for digital success. Our strategies are data-driven and tailored to your unique business needs.',
    },
    {
      icon: commsIcon,
      title: 'Bespoke Design & User Experience',
      description: 'Our designs are not just visually appealing; they are crafted to provide intuitive and engaging user experiences. We focus on usability, accessibility, and conversion.',
    },
    {
      icon: deviceIcon,
      title: 'Robust Development & Engineering',
      description: 'Leveraging cutting-edge technologies, we build scalable, secure, and high-performing digital solutions. From custom web applications to complex enterprise systems, we deliver excellence.',
    },
    {
      icon: scaleIcon,
      title: 'Ongoing Support & Growth',
      description: 'Our partnership extends beyond launch. We provide continuous support, maintenance, and optimization services to ensure your digital assets evolve with your business and market demands.',
    },
  ];

  return (
    <section className={styles.whatWeDo}>
      <h2>WHAT WE DO AND WHY</h2>
      <p className={styles.description}>
        We craft compelling digital experiences with seamless technology and thoughtful designs to drive real-world results. From strategy to ongoing support, we are committed to your growth.
      </p>
      <p className={styles.description}>
        We do not just create; we understand the art of digital craftsmanship, which is often overlooked by businesses. We believe in quality, and we are committed to delivering the best.
      </p>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.icon} alt={card.title} className={styles.cardIcon} loading="lazy" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
