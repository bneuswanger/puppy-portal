import React, { useState } from 'react';
import styles from './App.module.css';

import dogData from './dogData';
import Navbar from './components/navbar/Navbar';
import BodyCard from './components/body/BodyCard';
import BodyHome from './components/body/BodyHome';
import BodyDog from './components/body/BodyDog/BodyDog';

const App = () => {
  const [activeDog, setActiveDog] = useState({});

  const dogChoiceHandler = (dogchoice) => {
    setActiveDog(dogchoice);
  };

  const goHomeHandler = (emptyObj) => {
    setActiveDog(emptyObj);
  };

  return (
    <div className={styles.container}>
      <Navbar dogs={dogData.dogs} activeDog={activeDog} onHomeClicked={goHomeHandler} onDogChosen={dogChoiceHandler} />
      <BodyCard>{activeDog.name ? <BodyDog dog={activeDog} /> : <BodyHome />}</BodyCard>
    </div>
  );
};

export default App;
