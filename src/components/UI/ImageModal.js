import styles from './ImageModal.module.css';
import DangerButton from './DangerButton';

const ImageModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onDismiss} />
      <div className={styles['image-wrapper']}>
        <img src={props.url} className={styles.image} />
        <DangerButton onClick={props.onDismiss} btnText={props.btnText}></DangerButton>
      </div>
    </div>
  );
};

export default ImageModal;

//if using ImageModal, pass it props for: url (image to be shown) and btnText (text inside button)
//also pass onDismiss
