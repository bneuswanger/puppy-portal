const NavbarItem = (props) => {
  const onDogClick = () => {
    const chosenDog = props.dog;
    props.onSetChosenDog(chosenDog);
  };

  return (
    <li key={props.dog.name} onClick={onDogClick}>
      {props.dog.name}
    </li>
  );
};

export default NavbarItem;
