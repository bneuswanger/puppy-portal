import styles from './BodyDogPuppy.module.css';

const BodyDogPuppy = (props) => {
  return (
    <figure className={styles.puppy}>
      <figcaption className={styles.caption}>{props.dog.images.puppy.caption}</figcaption>
      <div>
        <img src={props.dog.images.puppy.url} alt="dog as puppy"></img>
      </div>
    </figure>
  );
};

export default BodyDogPuppy;
