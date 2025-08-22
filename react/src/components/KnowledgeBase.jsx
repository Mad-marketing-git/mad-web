
import React, { forwardRef } from 'react';
import styles from './KnowledgeBase.module.css';
import blogTilePng from '../assets/KnowledgeBase/blog tile.png';
import blogTileAvif from '../assets/avif/blog tile.png';
import { Fade } from 'react-awesome-reveal';

const KnowledgeBase = forwardRef(({ nextSection }, ref) => {
  const articles = [
    {
      image: blogTilePng,
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

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className={styles.page5Container} ref={ref}>
      <div className={styles.content}>
        <div className={styles.knowledgeBase}>
          <Fade direction="down" triggerOnce>
            <h2>KNOWLEDGE BASE</h2>
            <p>Welcome to the MAD Marketing Base—your go-to source for expert tips and trends to help Sri Lankan businesses succeed online. From website launches to e-commerce and growth strategies, our articles offer clear, localised guidance tailored to Sri Lanka’s dynamic market.</p>
          </Fade>
          <div className={styles.articles}>
            <Fade direction="left" triggerOnce>
              <div className={styles.featuredArticle}>
                <picture>
                  <source srcSet={blogTileAvif} type="image/avif" />
                  <img src={blogTilePng} alt="article" className={styles.articleImageTag} loading="lazy" />
                </picture>
                <div className={styles.featuredArticleTextBackground}>
                  <p>{featuredArticle.text}</p>
                </div>
              </div>
            </Fade>
            <div className={styles.otherArticles}>
              {otherArticles.map((article, index) => (
                <Fade direction="right" delay={index * 100} triggerOnce key={index}>
                  <a key={index} href={article.href} className={styles.articleLink}>{article.text}</a>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default KnowledgeBase;
