import styles from './Navbar.module.css';
import styleshome from './NavbarItem.module.css';
import NavbarItem from './NavbarItem';

const Navbar = (props) => {
  const setChosenDogHandler = (dogchoice) => {
    const chosenDog = dogchoice;
    props.onDogChosen(chosenDog);
  };

  const goHome = () => {
    props.onHomeClicked({});
  };

  return (
    <nav>
      <ul>
        <li className={props.activeDog.name ? styleshome.inactive : styleshome.active} onClick={goHome}>
          Home
        </li>
        {props.dogs.map((dog) => (
          <NavbarItem activeDog={props.activeDog} key={dog.name} dog={dog} onSetChosenDog={setChosenDogHandler} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
