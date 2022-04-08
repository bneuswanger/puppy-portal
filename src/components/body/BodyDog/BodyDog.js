import BodyDogHeader from './BodyDogHeader';
import BodyDogProfile from './BodyDogProfile';
import BodyDogPuppy from './BodyDogPuppy';
import BodyDogImgRight from './BodyDogImgRight';
import BodyDogImgLeft from './BodyDogImgLeft';
import styles from './BodyDog.module.css';
import { useEffect, useState } from 'react';

const BodyDog = (props) => {
  const [offset, setOffset] = useState(4);

  const totalFavPics = props.dog.images.adultFavs.length;
  const favsData = props.dog.images.adultFavs;

  const fillFirstFour = () => {
    let initialLoad = [];
    for (let i = 0; i < offset && i < totalFavPics; i++) {
      if (i % 2 === 0 && favsData[i].url !== '') {
        initialLoad.push(<BodyDogImgLeft key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
      }
      if (i % 2 !== 0 && favsData[i].url !== '') {
        initialLoad.push(<BodyDogImgRight key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
      }
    }
    return initialLoad;
  };

  const firstFour = fillFirstFour();
  const [favPics, setFavPics] = useState(firstFour);

  const addFourMoreFavs = () => {
    let fourMore = [];
    for (let i = offset; i < offset + 4 && i < totalFavPics; i++) {
      console.log(i);
      if (i % 2 === 0 && favsData[i].url !== '') {
        fourMore.push(<BodyDogImgLeft key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
      }
      if (i % 2 !== 0 && favsData[i].url !== '') {
        fourMore.push(<BodyDogImgRight key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
      }
      console.log('fourMore', fourMore);
    }
    setFavPics((prevFavPics) => [...prevFavPics, ...fourMore]);
    setOffset((prevOffset) => (prevOffset += 4));
  };
  console.log('4,5,2,1 | 3,7,6,10 | 9, 8, 12 ', favPics);
  console.log('Offset +4 each time', offset);

  const handleScroll = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      addFourMoreFavs();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      <BodyDogHeader dog={props.dog} />
      <BodyDogProfile dog={props.dog} />
      <BodyDogPuppy dog={props.dog} />
      <BodyDogImgLeft dog={props.dog} img={props.dog.images.adultBest[0].url} caption={props.dog.images.adultBest[0].caption} alt="1 of 2 best photos" />
      <BodyDogImgRight dog={props.dog} img={props.dog.images.adultBest[1].url2} caption={props.dog.images.adultBest[1].caption2} alt="2 of 2 best photos" />
      {favPics}
      <p className={styles.copyright}>&copy; Bryan Neuswanger 2022. All rights reserved.</p>
    </main>
  );
};

export default BodyDog;
