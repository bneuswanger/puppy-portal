import styles from './Navbar.module.css';
import NavbarItem from './NavbarItem';

const Navbar = (props) => {
  const setChosenDogHandler = (dogchoice) => {
    const chosenDog = dogchoice;
    props.onDogChosen(chosenDog);
  };

  return (
    <nav>
      <ul>
        <li className={styles.home}>Home</li>
        {props.dogs.map((dog) => (
          <NavbarItem
            key={dog.name}
            dog={dog}
            onSetChosenDog={setChosenDogHandler}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
