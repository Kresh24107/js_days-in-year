'use strict';

function daysInYear(year) {
  if (typeof year === 'number' && /^\d{4}$/.test(year)) {
    if (year % 4 === 0) {
      return 366;
    }
    return 365;
  }
  return 'exception';
}

daysInYear(2019);
daysInYear('2019');
daysInYear(2020);
daysInYear(2020.2);
daysInYear(2100);
daysInYear({ year: 2100 });
