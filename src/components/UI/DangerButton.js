import styles from './DangerButton.module.css';

const DangerButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.btnText}
    </button>
  );
};

export default DangerButton;
