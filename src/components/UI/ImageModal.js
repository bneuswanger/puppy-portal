import styles from './ImageModal.module.css';
import DangerButton from './DangerButton';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay = ({ onDismiss, webp, url, mime, btnText, named }) => {
  return (
    <picture className={styles['image-wrapper']}>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={url} type={`image/${mime}`} />
      <img src={url} className={styles.image} alt={`Genetics report for ${named}`} />
      <DangerButton onClick={onDismiss} btnText={btnText}></DangerButton>
    </picture>
  );
};

const ImageModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss} />, document.getElementById('backdrop-root'))};{ReactDOM.createPortal(<ModalOverlay onDismiss={props.onDismiss} webp={props.webp} url={props.url} mime={props.mime} btnText={props.btnText} named={props.named} />, document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default ImageModal;

//Room for improvement: pass height and width attributes to img element to prevent layout shift when loading.  Not implementing now because it only affects 2 images on the site and they aren't the same size so it'd be a lot of work to resize/replace on cloudinary and my "database" for very little gain.  But I COULD do it!
