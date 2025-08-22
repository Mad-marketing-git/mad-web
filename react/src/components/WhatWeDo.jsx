import React from 'react';
import styles from './WhatWeDo.module.css';
import bulbIconPng from '../assets/Page3Section/tb bulb icon.png';
import bulbIconAvif from '../assets/avif/tb bulb icon.png';

import commsIconPng from '../assets/Page3Section/tb comms icon.png';
import commsIconAvif from '../assets/avif/tb comms icon.png';

import deviceIconPng from '../assets/Page3Section/tb device icon.png';
import deviceIconAvif from '../assets/avif/tb device icon.png';

import scaleIconPng from '../assets/Page3Section/tb scale icon.png';
import scaleIconAvif from '../assets/avif/tb scale icon.png';

const WhatWeDo = () => {
  const cards = [
    {
      iconPng: bulbIconPng,
      iconAvif: bulbIconAvif,
      title: 'Creative & Strategic Planning',
      description: 'We help you define your vision, set clear goals, and develop a roadmap for digital success. Our strategies are data-driven and tailored to your unique business needs.',
    },
    {
      iconPng: commsIconPng,
      iconAvif: commsIconAvif,
      title: 'Bespoke Design & User Experience',
      description: 'Our designs are not just visually appealing; they are crafted to provide intuitive and engaging user experiences. We focus on usability, accessibility, and conversion.',
    },
    {
      iconPng: deviceIconPng,
      iconAvif: deviceIconAvif,
      title: 'Robust Development & Engineering',
      description: 'Leveraging cutting-edge technologies, we build scalable, secure, and high-performing digital solutions. From custom web applications to complex enterprise systems, we deliver excellence.',
    },
    {
      iconPng: scaleIconPng,
      iconAvif: scaleIconAvif,
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
            <picture>
              <source srcSet={card.iconAvif} type="image/avif" />
              <img src={card.iconPng} alt={card.title} className={styles.cardIcon} loading="lazy" />
            </picture>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
