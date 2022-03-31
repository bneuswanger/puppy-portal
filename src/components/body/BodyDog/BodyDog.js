import BodyDogHeader from './BodyDogHeader';
import BodyDogProfile from './BodyDogProfile';
import styles from './BodyDog.module.css';

const BodyDog = (props) => {
  return (
    <main>
      <BodyDogHeader dog={props.dog} />
      <BodyDogProfile dog={props.dog} />
      {/* <BodyDogPuppy /> */}
      {/* <BodyDogBest /> */}
      {/* <BodyDogFavs /> */}
      {/* <BodyDogGenetics /> */}
    </main>
  );
};

export default BodyDog;
