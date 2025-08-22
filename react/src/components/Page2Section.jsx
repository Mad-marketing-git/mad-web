import React, { useEffect, useRef, forwardRef } from 'react';
import styles from './Page2Section.module.css';
import page2Bg from '../assets/Page2Section/page-2-bg.png';
import page2BgAvif from '../assets/avif/page-2-bg.png';

import portfolio1Png from '../assets/Page2Section/tb portfolio neesh sp (2).png';
import portfolio1Avif from '../assets/avif/tb portfolio neesh sp (2).png';

import portfolio2Png from '../assets/Page2Section/tb portfolio neesh sp (3).png';
import portfolio2Avif from '../assets/avif/tb portfolio neesh sp (3).png';

import portfolio3Png from '../assets/Page2Section/tb portfolio neesh sp.png';
import portfolio3Avif from '../assets/avif/tb portfolio neesh sp.png';

import portfolio4Png from '../assets/Page2Section/tb portfolio vxl (2).png';
import portfolio4Avif from '../assets/avif/tb portfolio vxl (2).png';

import portfolio5Png from '../assets/Page2Section/tb portfolio vxl g.png';
import portfolio5Avif from '../assets/avif/tb portfolio vxl g.png';

import portfolio6Png from '../assets/Page2Section/tb portfolio vxl.png';
import portfolio6Avif from '../assets/avif/tb portfolio vxl.png';
import { Fade } from 'react-awesome-reveal';

const Page2Section = forwardRef(({ nextSection }, ref) => {
  const portfolioImages = [
    { png: portfolio1Png, avif: portfolio1Avif },
    { png: portfolio2Png, avif: portfolio2Avif },
    { png: portfolio3Png, avif: portfolio3Avif },
    { png: portfolio4Png, avif: portfolio4Avif },
    { png: portfolio5Png, avif: portfolio5Avif },
    { png: portfolio6Png, avif: portfolio6Avif },
  ];
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
        <Fade direction="up" triggerOnce>
          <h2>At MAD Marketing, we don’t just develop websites — we engineer powerful digital platforms designed to accelerate your business growth. Our team blends creative vision, strategic insight, and technical mastery to build custom experiences that captivate your audience and convert visitors into loyal customers.</h2>
        </Fade>
        <Fade direction="up" delay={200} triggerOnce>
          <div className={styles.carousel} ref={carouselRef}>
            {portfolioImages.map((image, index) => (
              <picture key={index}>
                <source srcSet={image.avif} type="image/avif" />
                <img src={image.png} alt={`Portfolio ${index + 1}`} className={styles.carouselImage} loading="lazy" />
              </picture>
            ))}
          </div>
        </Fade>
        <Fade direction="up" delay={400} triggerOnce>
          <button className={styles.button} onClick={nextSection}>THE MAD LOGIC</button>
        </Fade>
      </div>
    </section>
  );
});

export default Page2Section;