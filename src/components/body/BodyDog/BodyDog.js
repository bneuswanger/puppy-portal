import BodyDogHeader from './BodyDogHeader';
import BodyDogProfile from './BodyDogProfile';
import BodyDogPuppy from './BodyDogPuppy';
import BodyDogImgRight from './BodyDogImgRight';
import BodyDogImgLeft from './BodyDogImgLeft';
import styles from './BodyDog.module.css';

const BodyDog = (props) => {
  const favPics = [];
  const favsData = props.dog.images.adultFavs;

  for (let i = 0; i < props.dog.images.adultFavs.length; i++) {
    if (i % 2 === 0 && favsData[i].url !== '') {
      favPics.push(<BodyDogImgLeft key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
    }
    if (i % 2 !== 0 && favsData[i].url !== '') {
      favPics.push(<BodyDogImgRight key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
    }
  }

  return (
    <main className={styles.main}>
      <BodyDogHeader dog={props.dog} />
      <BodyDogProfile dog={props.dog} />
      <BodyDogPuppy dog={props.dog} />
      <BodyDogImgLeft dog={props.dog} img={props.dog.images.adultBest[0].url} caption={props.dog.images.adultBest[0].caption} alt={`1 of 2 top photos of ${props.dog.name}`} />
      <BodyDogImgRight dog={props.dog} img={props.dog.images.adultBest[1].url2} caption={props.dog.images.adultBest[1].caption2} alt={`2 of 2 top photos of ${props.dog.name}`} />
      {favPics}
      <p className={styles.copyright}>&copy; Bryan Neuswanger 2022. All rights reserved.</p>
    </main>
  );
};

export default BodyDog;
