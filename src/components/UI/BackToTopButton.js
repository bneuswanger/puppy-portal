import React, { useState, useEffect } from 'react';
import up from '../../assets/BackToTopButton.svg';
import styles from './BackToTopButton.module.css';

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <div>{backToTop && <img className={styles.up} src={up} onClick={scrollUp} alt="back to top button"></img>}</div>;
};

export default BackToTopButton;
