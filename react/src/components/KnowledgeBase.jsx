import React from 'react';
import styles from './KnowledgeBase.module.css';

const KnowledgeBase = () => {
  const articles = [
    {
      title: 'How to Choose the Right Digital Marketing Agency for Your Business?',
      link: '#',
    },
    {
      title: '5 Strategies to Boost Your Online Presence and Drive Sales',
      link: '#',
    },
    {
      title: 'The Importance of UI/UX Design in Modern Web Development',
      link: '#',
    },
    {
      title: 'Understanding SEO: A Beginner\'s Guide to Ranking Higher on Google',
      link: '#',
    },
  ];

  return (
    <section className={styles.knowledgeBase}>
      <h2>KNOWLEDGE BASE</h2>
      <p className={styles.description}>
        Dive into the MAD Marketing Knowledge Base, your go-to source for expert tips and trends in digital marketing. We provide insights, guides, and best practices to help you navigate the ever-evolving digital landscape.
      </p>
      <div className={styles.contentContainer}>
        <div className={styles.articlesContainer}>
          {articles.map((article, index) => (
            <div key={index} className={styles.article}>
              <a href={article.link}>{article.title}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
