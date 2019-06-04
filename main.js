function daysInYear(year) {
  if (/^\d{4}$/.test(year)) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 366;
    } else {
        return 365;
    }
  } else {
    return 'exception';
  }
}

daysInYear(2019);
daysInYear('2019');
daysInYear(2020);
daysInYear(2020.2);
daysInYear(2100);
daysInYear({year: 2100});
