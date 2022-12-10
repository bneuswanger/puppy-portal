import BodyDogHeader from './BodyDogHeader'
import BodyDogProfile from './BodyDogProfile'
import BodyDogPuppy from './BodyDogPuppy'
import BodyDogImgRight from './BodyDogImgRight'
import BodyDogImgLeft from './BodyDogImgLeft'
import styles from './BodyDog.module.css'

const BodyDog = (props) => {
  const { name, images } = props.dog
  const favsData = props.dog.images.adultFavs

  const favPics = []
  for (let i = 0; i < props.dog.images.adultFavs.length; i++) {
    if (i % 2 === 0 && favsData[i].url !== '') {
      favPics.push(
        <BodyDogImgLeft
          key={i}
          dog={props.dog}
          webp={favsData[i].webp}
          img={favsData[i].url}
          caption={favsData[i].caption}
          alt={`${i + 1} of ${favsData.length} additional photos of ${name}`}
        />
      )
    }
    if (i % 2 !== 0 && favsData[i].url !== '') {
      favPics.push(
        <BodyDogImgRight
          key={i}
          dog={props.dog}
          webp={favsData[i].webp}
          img={favsData[i].url}
          caption={favsData[i].caption}
          alt={`${i + 1} of ${favsData.length} additional photos of ${name}`}
        />
      )
    }
  }

  return (
    <main className={styles.main}>
      <BodyDogHeader dog={props.dog} />
      <BodyDogProfile dog={props.dog} />
      <BodyDogPuppy dog={props.dog} />
      <BodyDogImgLeft
        dog={props.dog}
        img={images.adultBest[0].url}
        webp={images.adultBest[0].webp}
        caption={images.adultBest[0].caption}
        alt={`1 of 2 top photos of ${name}`}
      />
      <BodyDogImgRight
        dog={props.dog}
        img={images.adultBest[1].url2}
        webp={images.adultBest[1].webp2}
        caption={images.adultBest[1].caption2}
        alt={`2 of 2 top photos of ${name}`}
      />
      {favPics}
      <p className={styles.copyright}>&copy; 2022 All rights reserved.</p>
    </main>
  )
}

export default BodyDog
