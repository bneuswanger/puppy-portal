import styles from './ImageModal.module.css';
import DangerButton from './DangerButton';

const ImageModal = ({ onDismiss, webp, url, mime, btnText, name }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onDismiss} />
      <picture className={styles['image-wrapper']}>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={url} type={`image/${mime}`} />
        <img src={url} className={styles.image} alt={`Genetics report for ${name}`} />
        <DangerButton onClick={onDismiss} btnText={btnText}></DangerButton>
      </picture>
    </div>
  );
};

export default ImageModal;

//Room for improvement: pass height and width attributes to img element to prevent layout shift when loading.  Not implementing now because it only affects 2 images on the site and they aren't the same size so it'd be a lot of work to resize/replace on cloudinary and my "database" for very little gain.  But I COULD do it!
