import React, { useState, useEffect, useRef } from 'react';
import styles from './Page4Section.module.css';
import page4Bg from '../assets/page-4-bg.png'; // Keep import for <img> src

// Import videos
import vidClient from '../assets/phone-screen-video/VID BG CLIENT.mp4';
import vidMobile from '../assets/phone-screen-video/VID BG MOBILE.mp4';
import vidStack from '../assets/phone-screen-video/VID BG STACK.mp4';
import vidTech from '../assets/phone-screen-video/VID BG TECH.mp4';

const Page4Section = () => {
  const videos = [vidClient, vidMobile, vidStack, vidTech];
  const videosText = [
    {
      title: 'Client-Centric Approach',
      description: 'We listen, understand your unique challenges, and tailorevery solution to fit your business perfectly.',
    },
    {
      title: 'Mobile-First Mindset',
      description: 'With over half of web traffic coming from mobile devices,your site will deliver flawless experiences across smartphones, tablets, and desktops.',
    },
    {
      title: 'Result-Oriented Design',
      description: 'Every element on your site drives toward a goal — be it lead generation, e-commerce sales, or brand awareness.',
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Utilizing the latest tools and frameworks, we build websites that are fast, secure, and scalable.',
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const sectionRef = useRef(null);
  const isScrolling = useRef(false); // To prevent rapid video changes

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const handleWheel = (event) => {
      if (isScrolling.current) return; // Prevent rapid changes

      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

      if (scrollDirection === 'down') {
        if (currentVideoIndex < videos.length - 1) {
          event.preventDefault(); // Prevent page scroll
          isScrolling.current = true;
          setCurrentVideoIndex((prevIndex) => prevIndex + 1);
        } else {
          // Allow page scroll after last video
        }
      } else if (scrollDirection === 'up') {
        if (currentVideoIndex > 0) {
          event.preventDefault(); // Prevent page scroll
          isScrolling.current = true;
          setCurrentVideoIndex((prevIndex) => prevIndex - 1);
        } else {
          // Allow page scroll before first video
        }
      }

      // Reset isScrolling after a short delay
      setTimeout(() => {
        isScrolling.current = false;
      }, 500); // Adjust delay as needed
    };

    sectionElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      sectionElement.removeEventListener('wheel', handleWheel);
    };
  }, [currentVideoIndex, videos.length]); // Re-run effect when video index changes

  return (
    <section ref={sectionRef} className={styles.page4Section}>
      <img src={page4Bg} alt="Background" className={styles.backgroundImage} />
      <div className={styles.content}>
        <div className={styles.headingContainer}> {/* New wrapper for heading */}
          <h2>WHY PARTNER WITH US?</h2>
        </div>
        <div className={styles.phoneContainer}>
          <div className={styles.phoneScreen}>
            <video
              key={currentVideoIndex} // Key prop to force re-render and restart video
              src={videos[currentVideoIndex]}
              autoPlay
              loop
              muted
              playsInline // Important for mobile autoplay
              className={styles.phoneVideo}
            />
            <h3 className={styles.phoneTitle}>{videosText[currentVideoIndex].title}</h3>
            <p className={styles.phoneDescription}>{videosText[currentVideoIndex].description}</p>
          </div>
        </div>
        <div className={styles.buttonContainer}> {/* New wrapper for button */}
          <button className={styles.button}>CORE SERVICES</button>
        </div>
      </div>
    </section>
  );
};

export default Page4Section;