import styles from './BodyDogProfile.module.css';

const BodyDogProfile = (props) => {
  return (
    <figure className={styles.profile}>
      <img src={props.dog.images.profile.url} height="500px" width="500px" alt="dog face"></img>
      <figcaption className={styles.caption}>{props.dog.summary}</figcaption>
    </figure>
  );
};

export default BodyDogProfile;
