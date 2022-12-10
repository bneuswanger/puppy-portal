import styles from './BodyDogImgRight.module.css'

const BodyDogImgRight = ({ webp, img, alt, caption }) => {
  return (
    <figure className={styles.figure}>
      <picture className={styles.figure}>
        <source
          srcSet={webp}
          type='image/webp'
        />
        <source
          srcSet={img}
          type='image/jpeg'
        />
        <figcaption className={styles.caption}>{caption}</figcaption>
        <img
          loading='lazy'
          src={img}
          alt={alt}
        />
      </picture>
    </figure>
  )
}

export default BodyDogImgRight
