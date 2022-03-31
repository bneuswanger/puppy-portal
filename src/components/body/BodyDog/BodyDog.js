import BodyDogHeader from './BodyDogHeader';

const BodyDog = (props) => {
  return (
    <main>
      <BodyDogHeader dog={props.dog} />
    </main>
  );
};

export default BodyDog;
