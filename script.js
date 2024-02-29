'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-05-27T17:01:17.194Z',
//     '2020-07-11T23:36:17.929Z',
//     '2020-07-12T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// Data
const account1 = {
  // owner: 'Jonas Schmedtmann',
  owner: 'Omar Mohamed',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-07-27T17:01:17.194Z',
    '2023-07-31T23:36:17.929Z',
    '2023-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  // owner: 'Jessica Davis',
  owner: 'Marwan Mohamed',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  // owner: 'Steven Thomas Williams',
  owner: 'Adam Mohamed',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-07-27T17:01:17.194Z',
    '2023-07-31T23:36:17.929Z',
    '2023-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account4 = {
  // owner: 'Sarah Smith',
  owner: 'Malak Youssef',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'long',
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////First-Video
console.log('/////////////////////////First-Video');
console.log(23 === 23.0);

// Base 10 - 0 to 9  1/10 = 0.1  3/10 = 3.333333 till infinity
// Binary base 2 - 0 to 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // js error

// Conversion
console.log(Number('23'));
console.log(+'23'); // when u put (+) operator before string containing number it will be converted to number

// Parsing
console.log('************parseInt***********');
console.log(Number.parseInt('30px', 10)); // 10 represents decimal system
console.log(Number.parseInt('e23', 10)); // representing system can avoid some bugs in some situations
console.log(Number.parseInt('001101po', 2)); // 2 represents binary system

console.log('************parseFloat***********');
console.log(Number.parseFloat('  9.87rem  '));
console.log(Number.parseFloat('2.55rem', 10));
console.log(Number.parseInt('2.55rem', 10));

// Checking if value is NaN
console.log('************isNaN***********');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isFinite(23 / 0));

// Checking if value is number
console.log('************isFinite***********');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log('************isInteger***********');
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.1));
console.log(Number.isInteger(23 / 0));

/////////////////////////////////////////////////Second-Video
console.log('/////////////////////////Second-Video');
// square root
console.log('************square root***********');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // (**) means power like (25 power 1/2)
console.log(8 ** (1 / 3)); // can use (**) as sqrt root and cubic root
console.log(3 ** 2);

// minimum ,maximum methods
console.log('************minimum, maximum methods***********');
// 1- max
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));
// 2- min
console.log(Math.max(5, 18, 23, 11, 2));

console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) => min...max
console.log(randomInt(10, 15)); // this func will generate a random num in a sepsific range

// Rounding integers
console.log(Math.trunc(23.3));

console.log('************Math.round***********');
// Round the nearest integer
console.log(Math.round(23.4));
console.log(Math.round(23.9));
console.log(Math.round('19.9'));

console.log('************Math.ceil***********');
// Rounding up the integer
console.log(Math.ceil(25.4));
console.log(Math.ceil(25.9));
console.log(Math.ceil('19.9'));

console.log('************Math.floor***********');
// Rounding down the integer
console.log(Math.floor(29.4));
console.log(Math.floor(29.9));
console.log(Math.floor('19.9'));

// trunc and floor are similar but floor is better bec. it can work with negative numbers while trunc can't
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log('************Rounding decimals (.toFixed)***********');
// Note: .toFixed() always return a string
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); // if u add (+) before the method it will return number

// Reminder Operator
console.log('************Reminder Operator***********');
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 % 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    // 0,2,4,6,8
    if (i % 2 === 0) row.style.backgroundColor = 'pink';
    // 1,3,5,7,9
    if (i % 2 !== 0) row.style.backgroundColor = 'blue';
  });
});

console.log('************Number.MAX_SAFE_INTEGER***********');
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// BigInt
console.log('************BigInt***********');
console.log(8651451461571174116147845646116518779155581796);
console.log(8651451461571174116147845646116518779155581796n);
console.log(BigInt(8651451461571174116147845646116518779155581796));

// Operations
console.log('************Operations***********');
console.log(10000n + 10000n);
console.log(8651451461571174116147845646116518779155581796n * 10000000n);
// console.log(Math.sqrt(16n)); // not gonna work

const huge = 20228818184214445665656457n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log('************Exceptions***********');
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!'); // converted from bigInt to string

// Divisions
console.log('************Divisions***********');
console.log(11n / 3n);
console.log(10 / 3);

// Create a Date
console.log('************Create a Date***********');
const now = new Date();
console.log(now);

console.log(new Date('Tue Aug 01 2023 16:28:54'));
console.log(new Date('jan 03 2002'));
console.log(new Date(account1.movementsDates[1]));
console.log(new Date(2030, 1, 3, 15, 23, 5)); // months are zero based [0(jan), 1(feb), 2(mar),....]
console.log(new Date(2030, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // convert day to milli seconds

// Working with Dates
//  year   month  day  hours  minutes  seconds  milliSeconds
const future = new Date(2037, 10, 19, 15, 23, 40, 3);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay()); // getDay() is not the day of the month but the day of the week
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
// (.toISOString()) follows some of international standards
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(future.getTime()));
console.log(Date.now());
console.log(new Date(Date.now()));

future.setFullYear(2040);
console.log(future);

const fut = new Date(2037, 10, 19, 15, 23);
console.log(Number(fut));
console.log(+fut);

console.log('************calcDaysPassed***********');
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

let day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(day1);
day1 = calcDaysPassed(new Date(2037, 4, 14), new Date(2037, 3, 14));
console.log(day1);
day1 = calcDaysPassed(new Date(2037, 3, 10, 10, 23), new Date(2037, 3, 14));
console.log(day1);

console.log('************Intl.NumberFormat***********');
const numm = 3884764.23;
const options = {
  style: 'currency',
  currency: 'EUR',
  // unit: 'celsius'
  // useGrouping: false,
};
console.log(numm);
console.log('US ', new Intl.NumberFormat('en-US', options).format(numm));
console.log('Germany ', new Intl.NumberFormat('de-DE', options).format(numm));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(numm)
);

console.log('************Timers***********');
// setTimeout
setTimeout(() => console.log('kalm adam haa'), 5000);
console.log('Waiting...');

const ingredients = ['mushroums', 'chieken'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),
  4000,
  ...ingredients
);
// if(ingredients.includes('mushroums'))clearTimeout(pizzaTimer); // delete(cancel) the timer

// setInterval
// setInterval(function(){
// const now = new Date();
// console.log(now);
// },1000);
