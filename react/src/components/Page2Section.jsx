import React from 'react';
import styles from './Page2Section.module.css';
import page2Bg from '../assets/page-2-bg.png';
import portfolio1 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO NEESH SP (2).png';
import portfolio2 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO NEESH SP (3).png';
import portfolio3 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO NEESH SP.png';
import portfolio4 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO VXL (2).png';
import portfolio5 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO VXL G.png';
import portfolio6 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO VXL.png';

const Page2Section = () => {
  const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

  return (
    <section id="about" className={styles.page2Section} style={{ backgroundImage: `url(${page2Bg})` }}>
      <div className={styles.content}>
        <h2>At MAD Marketing, we don’t just develop websites — we engineer powerful digital platforms designed to accelerate your business growth. Our team blends creative vision, strategic insight, and technical mastery to build custom experiences that captivate your audience and convert visitors into loyal customers.</h2>
        <div className={styles.carousel}>
          {portfolioImages.map((image, index) => (
            <img key={index} src={image} alt={`Portfolio ${index + 1}`} className={styles.carouselImage} />
          ))}
        </div>
        <button className={styles.button}>THE MAD LOGIC</button>
      </div>
    </section>
  );
};

export default Page2Section;