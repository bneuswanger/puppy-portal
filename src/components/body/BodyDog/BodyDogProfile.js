import styles from './BodyDogProfile.module.css';

const BodyDogProfile = (props) => {
  const { profile } = props.dog.images;
  const { name, summary } = props.dog;

  return (
    <figure>
      <picture className={styles.profile}>
        <source srcSet={profile.webp} type="image/webp" />
        <source srcSet={profile.url} type="image/jpeg" />
        <img className={styles.img} src={profile.url} height="500" width="500" alt={`${name}'s face`} />
        <figcaption className={styles.caption}>{summary}</figcaption>
      </picture>
    </figure>
  );
};

export default BodyDogProfile;
