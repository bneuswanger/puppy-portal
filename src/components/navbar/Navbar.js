import styles from './Navbar.module.css';
import NavbarItem from './NavbarItem';
import burger from '../../assets/burger.svg';
import React, { useState, useEffect } from 'react';

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const setChosenDogHandler = (dogchoice) => {
    const chosenDog = dogchoice;
    props.onDogChosen(chosenDog);
  };

  const goHome = () => {
    props.onHomeClicked({});
  };

  const sortedByBirth = [...props.dogs].sort(function (a, b) {
    return b.birthDate - a.birthDate;
  });

  return (
    <nav>
      <ul>
        <li className={props.activeDog.name ? undefined : styles.active} onClick={goHome}>
          Home
        </li>
        {sortedByBirth.map((dog) => (
          <NavbarItem activeDog={props.activeDog} key={dog.name} dog={dog} onSetChosenDog={setChosenDogHandler} />
        ))}
      </ul>
      <img className={styles.burger} src={burger} alt="toggle navbar" />
    </nav>
  );
};

export default Navbar;
