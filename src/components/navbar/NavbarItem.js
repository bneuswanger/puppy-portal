import styles from './NavbarItem.module.css';

const NavbarItem = (props) => {
  const onDogClick = () => {
    const chosenDog = props.dog;
    props.onSetChosenDog(chosenDog);
  };
  console.log(props.activeDog.name);
  console.log(props.dog.name);
  return (
    <li key={props.dog.name} className={props.activeDog.name === props.dog.name ? styles.active : styles.inactive} onClick={onDogClick}>
      {props.dog.name}
    </li>
  );
};

export default NavbarItem;
