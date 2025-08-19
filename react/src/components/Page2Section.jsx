import React, { useEffect, useRef, forwardRef } from 'react';
import styles from './Page2Section.module.css';
import page2Bg from '../assets/page-2-bg.png';
import portfolio1 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO NEESH SP (2).png';
import portfolio2 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO NEESH SP (3).png';
import portfolio3 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO NEESH SP.png';
import portfolio4 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO VXL (2).png';
import portfolio5 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO VXL G.png';
import portfolio6 from '../assets/IMAGE ASSETS BG REMOVED/TB PORTFOLIO VXL.png';

const Page2Section = forwardRef(({ nextSection }, ref) => {
  const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const scrollAmount = container.offsetWidth;
        if (container.scrollLeft + scrollAmount >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500); // Change slide every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className={styles.page2Section} style={{ backgroundImage: `url(${page2Bg})` }} ref={ref}>
      <div className={styles.content}>
        <h2>At MAD Marketing, we don’t just develop websites — we engineer powerful digital platforms designed to accelerate your business growth. Our team blends creative vision, strategic insight, and technical mastery to build custom experiences that captivate your audience and convert visitors into loyal customers.</h2>
        <div className={styles.carousel} ref={carouselRef}>
          {portfolioImages.map((image, index) => (
            <img key={index} src={image} alt={`Portfolio ${index + 1}`} className={styles.carouselImage} />
          ))}
        </div>
        <button className={styles.button} onClick={nextSection}>THE MAD LOGIC</button>
      </div>
    </section>
  );
});

export default Page2Section;