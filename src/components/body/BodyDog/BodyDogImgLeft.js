import styles from './BodyDogImgLeft.module.css';

const BodyDogImgLeft = (props) => {
  return (
    <figure className={styles.figure}>
      <img loading="lazy" src={props.img} alt={props.alt}></img>
      <figcaption className={styles.caption}>{props.caption}</figcaption>
    </figure>
  );
};

export default BodyDogImgLeft;
