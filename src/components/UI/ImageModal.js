import styles from './ImageModal.module.css';
import DangerButton from './DangerButton';

const ImageModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onDismiss} />
      <picture className={styles['image-wrapper']}>
        <source srcSet={props.webp} type="image/webp" />
        <source srcSet={props.url} type={`image/${props.mime}`} />
        <img src={props.url} className={styles.image} />
        <DangerButton onClick={props.onDismiss} btnText={props.btnText}></DangerButton>
      </picture>
    </div>
  );
};

export default ImageModal;

//if using ImageModal, pass it props for:

//url= jpg/png source
//webp= webp source
//btnText for text inside button
//onDismiss to handle close button
//mime= mimetype for type="image/{...}"

//Room for improvement: pass height and width attributes to img element to prevent layout shift when loading.  Not implementing now because it only affects 2 images on the site and they aren't the same size so it'd be a lot of work to resize/replace on cloudinary and my "database" for very little gain.  But I COULD do it!
