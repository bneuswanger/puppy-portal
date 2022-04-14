export function currentAgeLiveDog(birthDate) {
  var e = new Date();
  var b = new Date(birthDate);
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
}

export function ageAtDeath(birthDate, deathDate) {
  var b = new Date(birthDate);
  var e = new Date(deathDate);
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
}

export function nth(birthDate) {
  const date = birthDate.getDate();
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
}
