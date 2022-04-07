import styles from './BodyHome.module.css';
import paw from '../../assets/paw.svg';

const BodyHome = (props) => {
  return (
    <main className={styles.main}>
      <h1 className={styles['title-text']}>Our humans built us a website.</h1>
      <h1 className={styles['title-text']}>Are we spoiled? Perhaps.</h1>
      <img src={paw} className={styles.paw} alt="paw icon"></img>
      <figure className={styles['hero-figure']}>
        <img
          height="1520"
          width="3000"
          className={styles.img}
          src="https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298993/Dog%20Project/BodyHome%20pics/deck-dogs-3000w_ktnhd2.jpg"
          srcSet="https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298990/Dog%20Project/BodyHome%20pics/deck-dogs-500w_mp9bsa.jpg 500w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298990/Dog%20Project/BodyHome%20pics/deck-dogs-1000w_loashl.jpg 1000w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298992/Dog%20Project/BodyHome%20pics/deck-dogs-1500w_nosb5e.jpg 1500w"
          alt="3 dogs on porch"></img>
        <figcaption className={styles['hero-caption']}>(Left to Right) Holly, Ten Bears and Josey enjoying a crisp Fall afternoon.</figcaption>
      </figure>
    </main>
  );
};

export default BodyHome;
