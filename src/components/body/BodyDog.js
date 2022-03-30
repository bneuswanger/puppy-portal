import styles from './BodyDog.module.css';

const BodyDog = (props) => {
  return (
    <div>
      {<p>Name: {props.dog.name}</p>}
      {props.dog.deathYear && <p>Death Year: {props.dog.deathYear}</p>}
      {<p>Sex: {props.dog.sex}</p>}
    </div>
  );
};
export default BodyDog;
