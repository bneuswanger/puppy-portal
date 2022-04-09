import styles from './BodyDogImgLeft.module.css';

const BodyDogImgLeft = (props) => {
  return (
    <figure>
      <picture className={styles.figure}>
        <source srcSet={props.webp} type="image/webp" />
        <source srcSet={props.img} type="image/jpeg" />
        <img loading="lazy" src={props.img} alt={props.alt} />
        <figcaption className={styles.caption}>{props.caption}</figcaption>
      </picture>
    </figure>
  );
};

export default BodyDogImgLeft;
