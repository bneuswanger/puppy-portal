import styles from './Navbar.module.css';

const NavbarItem = (props) => {
  const { name } = props.dog;

  const onDogClick = () => {
    const chosenDog = props.dog;
    props.onSetChosenDog(chosenDog);
  };

  return (
    <li key={name} className={props.activeDog.name === name ? styles.active : styles.inactive} onClick={onDogClick}>
      {name}
    </li>
  );
};

export default NavbarItem;
