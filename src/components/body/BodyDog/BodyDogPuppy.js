import styles from './BodyDogPuppy.module.css';

const BodyDogPuppy = (props) => {
  return (
    <figure>
      <picture className={styles.puppy}>
        <source srcSet={props.dog.images.puppy.webp} type="image/webp" />
        <source srcSet={props.dog.images.puppy.url} type="image/jpeg" />
        <figcaption className={styles.caption}>{props.dog.images.puppy.caption}</figcaption>
        <img src={props.dog.images.puppy.url} alt={`${props.dog.name} as a puppy`}></img>
      </picture>
    </figure>
  );
};

export default BodyDogPuppy;
