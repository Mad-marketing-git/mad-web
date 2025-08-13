import React from 'react';
import styles from './CoreServices.module.css';

const CoreServices = () => {
  const services = [
    {
      title: 'Strategic Digital Planning',
      description: 'Crafting comprehensive digital strategies aligned with your business objectives for sustainable growth.',
    },
    {
      title: 'Creative Branding & Content Writing',
      description: 'Developing unique brand identities and compelling content that resonates with your target audience.',
    },
    {
      title: 'Website Development & UI/UX Design',
      description: 'Building responsive, user-friendly websites with intuitive interfaces and engaging user experiences.',
    },
    {
      title: 'Digital Marketing & SEO Optimization',
      description: 'Boosting your online visibility and driving traffic through effective digital marketing and search engine optimization strategies.',
    },
    {
      title: 'E-commerce Solutions & Development',
      description: 'Creating robust and secure e-commerce platforms that provide seamless shopping experiences and drive sales.',
    },
    {
      title: 'Digital Transformation & AI',
      description: 'Guiding your business through digital transformation with innovative AI-powered solutions for enhanced efficiency and decision-making.',
    },
    {
      title: 'Mobile App Development',
      description: 'Designing and developing high-performance mobile applications for iOS and Android, delivering exceptional user experiences on the go.',
    },
    {
      title: 'Digital Product Management',
      description: 'Managing the entire lifecycle of your digital products, from conception to launch and continuous improvement, ensuring market success.',
    },
  ];

  return (
    <section className={styles.coreServices}>
      <h2>OUR CORE SERVICES</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
