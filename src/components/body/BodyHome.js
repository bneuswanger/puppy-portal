import styles from './BodyHome.module.css'
import paw from '../../assets/paw.svg'

const BodyHome = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles['title-text']}>Our humans built us a website.</h1>
      <h1 className={styles['title-text']}>Are we spoiled? Perhaps.</h1>
      <img
        src={paw}
        className={styles.paw}
        alt='paw icon'></img>
      <figure className={styles['hero-figure']}>
        <picture>
          <source
            srcSet='
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649372141/Dog%20Project/BodyHome%20pics/deck-dogs-500w_kormxv.webp 500w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298990/Dog%20Project/BodyHome%20pics/deck-dogs-500w_mp9bsa.jpg 500w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649372141/Dog%20Project/BodyHome%20pics/deck-dogs-1000w_ozzp5z.webp 1000w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298990/Dog%20Project/BodyHome%20pics/deck-dogs-1000w_loashl.jpg 1000w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649372141/Dog%20Project/BodyHome%20pics/deck-dogs-1500w_kxmxqv.webp 1500w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298992/Dog%20Project/BodyHome%20pics/deck-dogs-1500w_nosb5e.jpg 1500w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649372142/Dog%20Project/BodyHome%20pics/deck-dogs-3000w_x99onn.webp 3000w,
          https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298993/Dog%20Project/BodyHome%20pics/deck-dogs-3000w_ktnhd2.jpg 3000w'
          />
          <img
            height='1520'
            width='3000'
            className={styles.img}
            src='https://res.cloudinary.com/dktwpnsqc/image/upload/v1649298992/Dog%20Project/BodyHome%20pics/deck-dogs-1500w_nosb5e.jpg 1500w'
            alt='3 dogs on porch'></img>
        </picture>
        <figcaption className={styles['hero-caption']}>(Left to Right) Holly, Ten Bears and Josey enjoying a crisp Fall afternoon.</figcaption>
      </figure>
      <p className={styles.copyright}>&copy; 2022-present. All rights reserved.</p>
    </main>
  )
}

export default BodyHome
