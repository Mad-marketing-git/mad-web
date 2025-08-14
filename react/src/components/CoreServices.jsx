import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import styles from './CoreServices.module.css';
import backgroundVideo from '../assets/VID SERVICES BG.mp4'; // Import the video

const CoreServices = () => {
  const services = [
    {
      title: 'Strategic Digital Planning',
      description: 'We partner with you to uncover opportunities and craft a roadmap that aligns technology, marketing, and business objectives for maximum impact.',
    },
    {
      title: 'Creative Branding & Content Strategy',
      description: 'Our team shapes your brand voice and visual identity while producing engaging content that connects deeply with your audience and strengthens market presence.',
    },
    {
      title: 'Tailored Web & App Development',
      description: 'From sleek corporate sites to complex applications, we build scalable, secure, and user-friendly digital solutions designed to grow with your brand.',
    },
    {
      title: 'Ongoing Analytics & Site Optimization',
      description: 'Post-launch, we continuously track performance, monitor user behavior, and proactively tune your digital assets to deliver sustained growth and flawless functionality.',
    },
    {
      title: 'E-commerce Enablement & Enhancement',
      description: 'We create compelling online stores optimized to boost sales, streamline user experience, and increase customer loyalty through intelligent design and seamless checkout flows.',
    },
    {
      title: 'Highly Personalized Service',
      description: 'We work to your schedule. We fit the process around your busy schedule so your work isn\'t disrupted and assign you a highly trained project manager to drive your project to successful completion.',
    },
  ];

  // Refs for line elements
  const lineHorizontalTopRef = useRef(null);
  const lineVerticalRef = useRef(null);
  const lineHorizontalMiddle1Ref = useRef(null);
  const lineHorizontalMiddle2Ref = useRef(null);
  const lineHorizontalBottomRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateLine);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each line element
    if (lineHorizontalTopRef.current) observer.observe(lineHorizontalTopRef.current);
    if (lineVerticalRef.current) observer.observe(lineVerticalRef.current);
    if (lineHorizontalMiddle1Ref.current) observer.observe(lineHorizontalMiddle1Ref.current);
    if (lineHorizontalMiddle2Ref.current) observer.observe(lineHorizontalMiddle2Ref.current);
    if (lineHorizontalBottomRef.current) observer.observe(lineHorizontalBottomRef.current);

    return () => {
      // Disconnect observer on unmount
      if (lineHorizontalTopRef.current) observer.unobserve(lineHorizontalTopRef.current);
      if (lineVerticalRef.current) observer.unobserve(lineVerticalRef.current);
      if (lineHorizontalMiddle1Ref.current) observer.unobserve(lineHorizontalMiddle1Ref.current);
      if (lineHorizontalMiddle2Ref.current) observer.unobserve(lineHorizontalMiddle2Ref.current);
      if (lineHorizontalBottomRef.current) observer.unobserve(lineHorizontalBottomRef.current);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className={styles.coreServices}>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={styles.contentOverlay}>
        <h2>OUR CORE SERVICES</h2>
        {/* Lines */}
        <div ref={lineHorizontalTopRef} className={styles.lineHorizontalTop}></div>
        <div ref={lineVerticalRef} className={styles.lineVertical}></div>
        <div ref={lineHorizontalMiddle1Ref} className={styles.lineHorizontalMiddle1}></div>
        <div ref={lineHorizontalMiddle2Ref} className={styles.lineHorizontalMiddle2}></div>
        <div ref={lineHorizontalBottomRef} className={styles.lineHorizontalBottom}></div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className={styles.talkToUsButton}>TALK TO US</button>
      </div>
    </section>
  );
};

export default CoreServices;