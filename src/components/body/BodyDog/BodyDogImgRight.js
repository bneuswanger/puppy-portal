import styles from './BodyDogImgRight.module.css';

const BodyDogImgRight = (props) => {
  return (
    <figure className={styles.figure}>
      <picture className={styles.figure}>
        <source srcSet={props.webp} type="image/webp" />
        <source srcSet={props.img} type="image/jpeg" />
        <figcaption className={styles.caption}>{props.caption}</figcaption>
        <img loading="lazy" src={props.img} alt={props.alt} />
      </picture>
    </figure>
  );
};

export default BodyDogImgRight;
