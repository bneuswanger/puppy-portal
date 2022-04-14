import styles from './BodyDogPuppy.module.css';

const BodyDogPuppy = (props) => {
  const { puppy } = props.dog.images;
  const { name } = props.dog;

  return (
    <figure>
      <picture className={styles.puppy}>
        <source srcSet={puppy.webp} type="image/webp" />
        <source srcSet={puppy.url} type="image/jpeg" />
        <figcaption className={styles.caption}>{puppy.caption}</figcaption>
        <img src={puppy.url} alt={`${name} as a puppy`}></img>
      </picture>
    </figure>
  );
};

export default BodyDogPuppy;
