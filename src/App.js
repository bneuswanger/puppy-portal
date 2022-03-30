import React, { useState } from 'react';

import dogData from './dogData';
import Navbar from './components/navbar/Navbar';
import BodyCard from './components/body/BodyCard';
import BodyHome from './components/body/BodyHome';
import BodyDog from './components/body/BodyDog';

const App = () => {
  const [activeDog, setActiveDog] = useState({});

  const dogChoiceHandler = (dogchoice) => {
    setActiveDog(dogchoice);
  };

  const goHomeHandler = (emptyDog) => {
    setActiveDog(emptyDog);
  };

  return (
    <div>
      <Navbar
        dogs={dogData.dogs}
        onHomeClicked={goHomeHandler}
        onDogChosen={dogChoiceHandler}
      />
      <BodyCard>
        {activeDog.name ? <BodyDog dog={activeDog} /> : <BodyHome />}
      </BodyCard>
    </div>
  );
};

export default App;
