import React, { useState, forwardRef } from 'react';
import styles from './Page3Section.module.css';
import page3Bg from '../assets/page-3-bg.png';
import bulbIcon from '../assets/IMAGE ASSETS BG REMOVED/cards/TB BULB ICON.png';
import deviceIcon from '../assets/IMAGE ASSETS BG REMOVED/cards/TB DEVICE ICON.png';
import scaleIcon from '../assets/IMAGE ASSETS BG REMOVED/cards/TB SCALE ICON.png';
import commsIcon from '../assets/IMAGE ASSETS BG REMOVED/cards/TB COMMS ICON.png';

const Page3Section = forwardRef(({ nextSection }, ref) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      icon: bulbIcon,
      title: 'Innovative Strategy & Planning',
      description: 'Every successful project begins with a clear roadmap. We dive deep into your brand\'s mission and goals to craft a tailored strategy that aligns technology, design, and messaging perfectly.',
    },
    {
      icon: deviceIcon,
      title: 'Bespoke Design & User Experience',
      description: 'Your website will be a seamless fusion of visually striking design and intuitive navigation — crafted to engage users and guide them effortlessly toward action.',
    },
    {
      icon: scaleIcon,
      title: 'Robust Development & Scalability',
      description: 'Our code is clean, secure, and built with future growth in mind. Whether you need complex integrations or a simple, fast-loading site, we deliver reliable solutions that stand the test of time.',
    },
    {
      icon: commsIcon,
      title: 'Ongoing Support & Growth',
      description: 'Launching is just the start. We continuously monitor performance, analyze user behavior, and refine your digital presence to maximize return on investment and keep you ahead of the competition.',
    },
  ];

  return (
    <section className={styles.page3Section} style={{ backgroundImage: `url(${page3Bg})` }} ref={ref}>
      <div className={styles.content}>
        <h2>WHAT WE DO. AND WHY.</h2>
        <p>We create captivating digital experiences with seamless technology and thoughtful design to drive long-term growth. From strategy to ongoing support, our process ensures your platform scales with your ambitions.</p>
        <p className={styles.highlight}>We do this to counter the widespread lack of quality web experiences, which are often hindered by cluttered interfaces, slow speeds, and a lack of creativity.</p>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === index ? (
                <p className={styles.cardDescription}>{card.description}</p>
              ) : (
                <>
                  <img src={card.icon} alt={card.title} className={styles.cardIcon} />
                  <h3>{card.title}</h3>
                </>
              )}
            </div>
          ))}
        </div>
        <button className={styles.button} onClick={nextSection}>CORE SERVICES</button>
      </div>
    </section>
  );
});


export default Page3Section;
