import styles from './Navbar.module.css';
import NavbarItem from './NavbarItem';
import burger from '../../assets/burger.svg';
import React, { useState, useEffect } from 'react';
import BackToTopButton from '../UI/BackToTopButton';
import Tooltip from '../UI/Tooltip';

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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  //Dogs
  const setChosenDogHandler = (dogchoice) => {
    const chosenDog = dogchoice;
    props.onDogChosen(chosenDog);
    screenWidth <= 1070 && setToggleMenu(false);
    scrollUp();
  };

  const goHome = () => {
    props.onHomeClicked({});
    screenWidth <= 1070 && setToggleMenu(false);
    scrollUp();
  };

  const sortedByBirth = [...props.dogs].sort(function (a, b) {
    return b.birthDate - a.birthDate;
  });

  return (
    <nav>
      {(toggleMenu || screenWidth > 1070) && (
        <ul>
          <li className={styles.home} onClick={goHome}>
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
      <BackToTopButton />
    </nav>
  );
};

export default Navbar;
