import BodyDogHeader from './BodyDogHeader';
import BodyDogProfile from './BodyDogProfile';
import BodyDogPuppy from './BodyDogPuppy';
import BodyDogImgRight from './BodyDogImgRight';
import BodyDogImgLeft from './BodyDogImgLeft';
import styles from './BodyDog.module.css';
import { useEffect, useState } from 'react';

const BodyDog = (props) => {
  const [offset, setOffset] = useState(0);
  const [favPics, setFavPics] = useState([]);

  //these two just make for shorter code
  const totalFavPics = props.dog.images.adultFavs.length;
  const favsData = props.dog.images.adultFavs;

  // addFourFavs() grabs 4 items from a storage array and passes data as props to a component that either displays the image to the left or the right of the caption (it alternates on the page).
  // Then it pushes each component onto [getFour] that is used to update the state of [favPics], which is then rendered in the JSX as {favPics}
  // This works fine for the first 4 images on page load.
  // The offset state is incremented by 4 so that the next time the function is called, i takes the value of 4 instead of zero.  When I log offset outside the function, the value is indeed 4.  BUT...
  // when the handleScroll function is triggered, the offset state (which is assigned to i) is zero again, instead of 4.  Why is it zero instead of 4????  Being zero instead of 4 results in the same four pictures being returned and duplicate key values, which is no good.

  const addFourFavs = () => {
    let getFour = [];
    for (let i = offset; i < offset + 4 && i < totalFavPics; i++) {
      console.log('i inside loop:', i);
      console.log('offset inside loop:', offset);
      if (i % 2 === 0 && favsData[i].url !== '') {
        getFour.push(<BodyDogImgLeft key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
      }
      if (i % 2 !== 0 && favsData[i].url !== '') {
        getFour.push(<BodyDogImgRight key={i} dog={props.dog} img={favsData[i].url} caption={favsData[i].caption} alt={`${i + 1} of ${favsData.length} additional photos of ${props.dog.name}`} />);
      }
    }
    setFavPics((prevFavPics) => [...prevFavPics, ...getFour]);
    setOffset((prevOffset) => (prevOffset += 4));
  };

  const handleScroll = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      addFourFavs();
    }
  };

  console.log('favPics from outside func:', favPics);
  console.log('offset from outside func:', offset);

  useEffect(() => {
    addFourFavs();
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
      <p className={styles.copyright}>&copy; 2022. All rights reserved.</p>
    </main>
  );
};

export default BodyDog;
