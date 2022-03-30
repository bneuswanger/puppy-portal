import React, { useState } from 'react';

const NavbarItem = (props) => {
  const [chosenDog, setChosenDog] = useState({});

  const onDogClick = () => {
    setChosenDog(props.dog);
    props.onSetChosenDog(chosenDog);
  };

  return (
    <li key={props.dog.name} onClick={onDogClick}>
      {props.dog.name}
    </li>
  );
};

export default NavbarItem;
