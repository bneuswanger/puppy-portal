import styles from './BodyDogProfile.module.css';

const BodyDogProfile = (props) => {
  return (
    <figure>
      <img src={props.dog.images.profile.url} alt="dog face"></img>
      <figcaption>{props.dog.summary}</figcaption>
    </figure>
  );
};

export default BodyDogProfile;
