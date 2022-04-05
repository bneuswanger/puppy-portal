import styles from './Navbar.module.css';
import NavbarItem from './NavbarItem';
import burger from '../../assets/burger.svg';
import React, { useState, useEffect } from 'react';

const Navbar = (props) => {
  //State
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  //Effect
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  //Dogs
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
      {(toggleMenu || screenWidth > 1000) && (
        <ul>
          <li className={props.activeDog.name ? styles.inactive : styles.active} onClick={goHome}>
            Home
          </li>
          {sortedByBirth.map((dog) => (
            <NavbarItem activeDog={props.activeDog} key={dog.name} dog={dog} onSetChosenDog={setChosenDogHandler} />
          ))}
        </ul>
      )}
      <div>
        <img onClick={toggleNav} className={styles.burger} src={burger} alt="toggle navbar" />
      </div>
    </nav>
  );
};

export default Navbar;
