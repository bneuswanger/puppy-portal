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
        <div className={`${styles.ul} ${styles.home}`}>
          <li className={props.activeDog.name ? undefined : styleshome.active} onClick={goHome}>
            Home
          </li>
        </div>
        <div className={styles.ul}>
          {props.dogs.map((dog) => (
            <NavbarItem activeDog={props.activeDog} key={dog.name} dog={dog} onSetChosenDog={setChosenDogHandler} />
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
