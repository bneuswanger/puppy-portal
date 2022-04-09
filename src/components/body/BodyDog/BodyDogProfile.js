import styles from './BodyDogProfile.module.css';

const BodyDogProfile = (props) => {
  return (
    <figure>
      <picture className={styles.profile}>
        <source srcSet={`${props.dog.images.profile.webp} 500w, ${props.dog.images.profile.url} 500w`}></source>
        <img className={styles.img} src={props.dog.images.profile.url} height="500px" width="500px" alt="dog face"></img>
        <figcaption className={styles.caption}>{props.dog.summary}</figcaption>
      </picture>
    </figure>
  );
};

export default BodyDogProfile;
