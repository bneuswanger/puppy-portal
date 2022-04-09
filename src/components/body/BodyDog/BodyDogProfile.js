import styles from './BodyDogProfile.module.css';

const BodyDogProfile = (props) => {
  return (
    <figure>
      <picture className={styles.profile}>
        <source srcSet={props.dog.images.profile.webp} type="image/webp" />
        <source srcSet={props.dog.images.profile.url} type="image/jpeg" />
        <img className={styles.img} src={props.dog.images.profile.url} height="500px" width="500px" alt={`${props.dog.name}'s face`} />
        <figcaption className={styles.caption}>{props.dog.summary}</figcaption>
      </picture>
    </figure>
  );
};

export default BodyDogProfile;
