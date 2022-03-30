import styles from './BodyCard.module.css';

function BodyCard(props) {
  return <div className={styles.card}>{props.children}</div>;
}

export default BodyCard;
