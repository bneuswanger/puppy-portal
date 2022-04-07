import styles from './BodyDogImgRight.module.css';

const BodyDogImgRight = (props) => {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.caption}>{props.caption}</figcaption>
      <img loading="lazy" src={props.img} alt={props.alt}></img>
    </figure>
  );
};

export default BodyDogImgRight;

//pass in caption, img, and alt text
