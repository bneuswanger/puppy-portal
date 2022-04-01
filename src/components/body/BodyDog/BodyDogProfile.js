import styles from './BodyDogProfile.module.css';

const BodyDogProfile = (props) => {
  return (
    <figure className={styles.profile}>
      <img src={props.dog.images.profile.url} alt="dog face"></img>
      <figcaption className={styles.caption}>{props.dog.summary}</figcaption>
    </figure>
  );
};

export default BodyDogProfile;
