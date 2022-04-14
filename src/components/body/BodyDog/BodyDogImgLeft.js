import styles from './BodyDogImgLeft.module.css';

const BodyDogImgLeft = ({ webp, img, alt, caption }) => {
  return (
    <figure>
      <picture className={styles.figure}>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={img} type="image/jpeg" />
        <img loading="lazy" src={img} alt={alt} />
        <figcaption className={styles.caption}>{caption}</figcaption>
      </picture>
    </figure>
  );
};

export default BodyDogImgLeft;
