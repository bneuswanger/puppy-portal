import styles from './BodyHome.module.css';
import paw from '../../assets/paw.svg';

const BodyHome = (props) => {
  return (
    <main className={styles.main}>
      <h1>We are spoiled.</h1>
      <img src={paw} className={styles.paw}></img>
      <picture>
        <img
          className={styles.img}
          src="https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298993/Dog%20Project/BodyHome%20pics/deck-dogs-3000w_ktnhd2.jpg"
          srcSet="https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298990/Dog%20Project/BodyHome%20pics/deck-dogs-500w_mp9bsa.jpg 500w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298990/Dog%20Project/BodyHome%20pics/deck-dogs-1000w_loashl.jpg 1000w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298992/Dog%20Project/BodyHome%20pics/deck-dogs-1500w_nosb5e.jpg 1500w"
          alt="3 dogs on porch"></img>
      </picture>
      <h1>Our humans built us a free website.</h1>
    </main>
  );
};

export default BodyHome;
