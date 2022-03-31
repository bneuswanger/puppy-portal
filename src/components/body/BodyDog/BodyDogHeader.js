import styles from './BodyDogHeader.module.css';
import female from '../../../assets/gender-female.svg';
import male from '../../../assets/gender-male.svg';
import HorizontalSeparator from '../../UI/HorizontalSeparator';

const BodyDogHeader = (props) => {
  const currentAgeLiveDog = () => {
    var e = new Date();
    var b = new Date(props.dog.birthDate);
    var bMonth = b.getMonth();
    var bYear = b.getFullYear();
    var eYear = e.getFullYear();
    var eMonth = e.getMonth();
    var bDay = b.getDate();
    var eDay = e.getDate() + 1;
    let eDays;
    let bDays;
    if (eMonth === 0 || eMonth === 2 || eMonth === 4 || eMonth === 6 || eMonth === 7 || eMonth === 9 || eMonth === 11) {
      eDays = 31;
    }

    if (eMonth === 3 || eMonth === 5 || eMonth === 8 || eMonth === 10) {
      eDays = 30;
    }

    if ((eMonth === 1 && eYear % 4 === 0 && eYear % 100 !== 0) || eYear % 400 === 0) {
      eDays = 29;
    }

    if (eMonth === 1 && (eYear % 4 !== 0 || eYear % 100 === 0)) {
      eDays = 28;
    }

    if (bMonth === 0 || bMonth === 2 || bMonth === 4 || bMonth === 6 || bMonth === 7 || bMonth === 9 || bMonth === 11) {
      bDays = 31;
    }

    if (bMonth === 3 || bMonth === 5 || bMonth === 8 || bMonth === 10) {
      bDays = 30;
    }

    if ((bMonth === 1 && bYear % 4 === 0 && bYear % 100 !== 0) || bYear % 400 === 0) {
      bDays = 29;
    }

    if (bMonth === 1 && (bYear % 4 !== 0 || bYear % 100 === 0)) {
      bDays = 28;
    }

    var FirstMonthDiff = bDays - bDay + 1;

    if (eDay - bDay < 0) {
      eMonth = eMonth - 1;
      eDay = eDay + bDays;
    }

    var daysDiff = eDay - bDay;

    if (eMonth - bMonth < 0) {
      eYear = eYear - 1;
      eMonth = eMonth + 12;
    }

    var monthDiff = eMonth - bMonth;

    var yearDiff = eYear - bYear;

    if (daysDiff === eDays) {
      daysDiff = 0;
      monthDiff = monthDiff + 1;

      if (monthDiff === 12) {
        monthDiff = 0;
        yearDiff = yearDiff + 1;
      }
    }

    if (FirstMonthDiff !== bDays && eDay - 1 === eDays) {
      daysDiff = FirstMonthDiff;
    }

    const pluralise = (base, value) => `${value} ${base}${value !== 1 ? 's' : ''}`;
    const yearsOutput = pluralise('year', yearDiff);
    const monthsOutput = pluralise('month', monthDiff);
    const daysOutput = pluralise('day', daysDiff);

    if (yearDiff > 0) {
      return `${yearsOutput}, ${monthsOutput} and about ${daysOutput}`;
    } else {
      return `${monthsOutput} and about ${daysOutput}`;
    }
  };
  const currentAge = currentAgeLiveDog();
  const ageAtDeath = () => {
    var e = new Date(props.dog.deathDate);
    var b = new Date(props.dog.birthDate);
    var bMonth = b.getMonth();
    var bYear = b.getFullYear();
    var eYear = e.getFullYear();
    var eMonth = e.getMonth();
    var bDay = b.getDate();
    var eDay = e.getDate() + 1;
    let eDays;
    let bDays;
    if (eMonth === 0 || eMonth === 2 || eMonth === 4 || eMonth === 6 || eMonth === 7 || eMonth === 9 || eMonth === 11) {
      eDays = 31;
    }

    if (eMonth === 3 || eMonth === 5 || eMonth === 8 || eMonth === 10) {
      eDays = 30;
    }

    if ((eMonth === 1 && eYear % 4 === 0 && eYear % 100 !== 0) || eYear % 400 === 0) {
      eDays = 29;
    }

    if (eMonth === 1 && (eYear % 4 !== 0 || eYear % 100 === 0)) {
      eDays = 28;
    }

    if (bMonth === 0 || bMonth === 2 || bMonth === 4 || bMonth === 6 || bMonth === 7 || bMonth === 9 || bMonth === 11) {
      bDays = 31;
    }

    if (bMonth === 3 || bMonth === 5 || bMonth === 8 || bMonth === 10) {
      bDays = 30;
    }

    if ((bMonth === 1 && bYear % 4 === 0 && bYear % 100 !== 0) || bYear % 400 === 0) {
      bDays = 29;
    }

    if (bMonth === 1 && (bYear % 4 !== 0 || bYear % 100 === 0)) {
      bDays = 28;
    }

    var FirstMonthDiff = bDays - bDay + 1;

    if (eDay - bDay < 0) {
      eMonth = eMonth - 1;
      eDay = eDay + bDays;
    }

    var daysDiff = eDay - bDay;

    if (eMonth - bMonth < 0) {
      eYear = eYear - 1;
      eMonth = eMonth + 12;
    }

    var monthDiff = eMonth - bMonth;

    var yearDiff = eYear - bYear;

    if (daysDiff === eDays) {
      daysDiff = 0;
      monthDiff = monthDiff + 1;

      if (monthDiff === 12) {
        monthDiff = 0;
        yearDiff = yearDiff + 1;
      }
    }

    if (FirstMonthDiff !== bDays && eDay - 1 === eDays) {
      daysDiff = FirstMonthDiff;
    }

    const pluralise = (base, value) => `${value} ${base}${value !== 1 ? 's' : ''}`;
    const yearsOutput = pluralise('year', yearDiff);
    const monthsOutput = pluralise('month', monthDiff);
    const daysOutput = pluralise('day', daysDiff);

    if (yearDiff > 0) {
      return `${yearsOutput}, ${monthsOutput} and about ${daysOutput}`;
    } else {
      return `${monthsOutput} and about ${daysOutput}`;
    }
  };
  const lifeSpan = ageAtDeath();
  const nth = function () {
    const date = props.dog.birthDate.getDate();
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  const birthDaySuffix = nth();

  return (
    <div>
      <h1>{props.dog.name}</h1>
      <HorizontalSeparator />
      <img src={props.dog.sex === 'female' ? female : male} alt={props.dog.sex === 'female' ? 'female dog' : 'male dog'}></img>
      <p>{props.dog.breed}</p>
      <time className={styles.range}>{props.dog.birthDate.getFullYear()} - </time>
      {!props.dog.deathDate && <time className={styles.range}>present</time>}
      {props.dog.deathDate && <time className={styles.range}>{props.dog.deathDate.getFullYear()}</time>}
      <p>Allegedly owned by {props.dog.owners}</p>

      {props.dog.name !== 'Nika' && (
        <time className={styles.smallText}>
          Born on {props.dog.birthDate.toLocaleString('default', { month: 'long' })} {props.dog.birthDate.getDate()}
          {birthDaySuffix}
        </time>
      )}
      {props.dog.name === 'Nika' && (
        <time className={styles.smallText}>
          Born around {props.dog.birthDate.toLocaleString('default', { month: 'long' })} {props.dog.birthDate.getDate()}
          {birthDaySuffix}
        </time>
      )}
      {props.dog.deathDate && <p className={styles.smallText}>Lived for {lifeSpan}</p>}
      {!props.dog.deathDate && <p className={styles.smallText}>Currently {currentAge} old</p>}
    </div>
  );
};

export default BodyDogHeader;
