import React from 'react';
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

  return (
    <section className={styles.coreServices}>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={styles.contentOverlay}>
        <h2>OUR CORE SERVICES</h2>
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