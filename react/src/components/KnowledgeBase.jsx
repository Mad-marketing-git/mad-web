
import React, { useState, useEffect } from 'react';
import styles from './KnowledgeBase.module.css';
import blogTile from '../assets/BLOG TILE.png';

const KnowledgeBase = () => {
  const articles = [
    {
      image: blogTile,
      text: 'Why Your Sri Lankan Business Needs a Mobile-Optimized Website in 2025',
      isLink: false,
    },
    {
      text: 'Top 5 Web Design Trends for Sri Lankan Brands to Watch',
      isLink: true,
      href: '#'
    },
    {
      text: 'A Beginner’s Guide to Digital Strategy for Startups in Colombo',
      isLink: true,
      href: '#'
    },
    {
      text: 'How to Boost E-Commerce Sales for Sri Lankan Retailers with Smart UX',
      isLink: true,
      href: '#'
    },
    {
      text: 'The Importance of Local SEO for Sri Lankan Businesses in 2025',
      isLink: true,
      href: '#'
    },
  ];

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 3000); // Change article every 3 seconds

    return () => clearTimeout(timer);
  }, [currentArticleIndex, articles.length]);

  const currentArticle = articles[currentArticleIndex];

  return (
    <div className={styles.page5Container}>
      <div className={styles.content}>
        <div className={styles.knowledgeBase}>
          <h2>KNOWLEDGE BASE</h2>
          <p>Welcome to the MAD Marketing Base—your go-to source for expert tips and trends to help Sri Lankan businesses succeed online. From website launches to e-commerce and growth strategies, our articles offer clear, localised guidance tailored to Sri Lanka’s dynamic market.</p>
          <div className={styles.articles}>
            <div className={styles.desktopArticles}>
              <div className={styles.articleImage}>
                <img src={blogTile} alt="article" className={styles.articleImageTag} />
                <p>Why Your Sri Lankan Business Needs a Mobile-Optimized Website in 2025</p>
              </div>
              <div className={styles.articleLinks}>
                <a href="#">Top 5 Web Design Trends for Sri Lankan Brands to Watch</a>
                <a href="#">A Beginner’s Guide to Digital Strategy for Startups in Colombo</a>
                <a href="#">How to Boost E-Commerce Sales for Sri Lankan Retailers with Smart UX</a>
                <a href="#">The Importance of Local SEO for Sri Lankan Businesses in 2025</a>
              </div>
            </div>
            <div className={styles.mobileArticles}>
              <div className={styles.articleContent}>
                {currentArticle.isLink ? (
                  <a href={currentArticle.href} className={styles.articleLink}>{currentArticle.text}</a>
                ) : (
                  <div className={styles.articleImage}>
                    <img src={currentArticle.image} alt="article" className={styles.articleImageTag} />
                    <p>{currentArticle.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
