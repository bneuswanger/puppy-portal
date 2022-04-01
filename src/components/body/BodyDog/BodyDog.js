import BodyDogHeader from './BodyDogHeader';
import BodyDogProfile from './BodyDogProfile';
import BodyDogPuppy from './BodyDogPuppy';
import styles from './BodyDog.module.css';
import HorizontalSeparator from '../../UI/HorizontalSeparator';

const BodyDog = (props) => {
  return (
    <main>
      <BodyDogHeader dog={props.dog} />
      {/* <HorizontalSeparator /> */}
      <BodyDogProfile dog={props.dog} />
      <BodyDogPuppy dog={props.dog} />
      {/* <BodyDogBest /> */}
      {/* <BodyDogFavs /> */}
      {/* <BodyDogGenetics /> */}
    </main>
  );
};

export default BodyDog;
