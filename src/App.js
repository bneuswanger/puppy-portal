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

  console.log(activeDog);
  return (
    <div>
      <Navbar dogs={dogData.dogs} onDogChosen={dogChoiceHandler} />
      <BodyCard>
        {!dogData && <BodyHome />}
        {dogData && <BodyDog dog={activeDog} />}
      </BodyCard>
    </div>
  );
};

export default App;
