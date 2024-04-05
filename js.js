'use strict';

const now = 2037;

const jonahsAge = now - 1991;
const sarahAge = now - 2018;

console.log(jonahsAge, sarahAge);

console.log(jonahsAge *2, sarahAge / 10, 2 ** 3);

const firstName = 'Ziad';
const lastName = 'Abuzayyad';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;

console.log(x);


let jordanPopulation = 10315456;
const halfPopulation = jordanPopulation / 2;
console.log(halfPopulation);

let incraese = jordanPopulation++;

console.log(jordanPopulation++);

let t = 3;
let y = t++;

let finladPopulation = 6000000;

let compare = finladPopulation >= jordanPopulation;
console.log(compare);

const descrition = 'Portugal is in Europe, and its 11 million people speak portuguese';

console.log(descrition)
 
const country = 33000000;

average = country <= jordanPopulation;

console.log(average);

let markMass = 95; 
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

let markHeigherBMI = markBMI >= johnBMI;

console.log(markBMI, johnBMI, markHeigherBMI);


const firstName = 'Ziad'
const job = 'Web Designer';
const dateOfBirth = 1989;
const currentYear = new Date().getFullYear();
const info =` I'am ${firstName} my job is: ${job} \n\ and iam ${currentYear - dateOfBirth} years old.`
console.log(info);


const age = 19;
const isOld = 18;

if(age >= isOld) {
    console.log('You can drive a car 🚗');
} else {
    console.log(`You can't drive a car🚲`);
};


const dateOfBirth = 1989;
let century;

if(dateOfBirth >= 2000) {
    century = 21;
} else {
    century = 20;
}

console.log(century);

let number = '18';

console.log(18 + Number(number));

const money = 5;

if(money) {
    console.log('have money');
} else {
    console.log('dont have money');
}

let height = 9;

if(height) {
    console.log('height define');
}
else {
    console.log('height undefine')
}

let yourNumber = Number(prompt('Please enter your numper'));
console.log(yourNumber);
console.log(typeof yourNumber);

if(yourNumber === 10) {
    console.log('Number: 10');
} else if (yourNumber === 9) {
    console.log('Number: 9');
} else {
    console.log('Number: some thing else');
}

let age = 16;

let a = age >= 20;
let b = age < 30;

console.log(!a)

console.log(a && b);
console.log(a || b);
console.log(!a && b);
console.log(a && !b);

let dolphinsAvarge = (97 + 112 + 101) / 3;
let koalasAvarge = (109 + 95 + 106) / 3;

if(dolphinsAvarge > koalasAvarge && dolphinsAvarge >= 100) {
    console.log('Dolphins is height score');
} else if(dolphinsAvarge < koalasAvarge && koalasAvarge >= 100) {
    console.log('Koalas is height score');
} else if (dolphinsAvarge = koalasAvarge && koalasAvarge >= 100) {
    console.log('Koalas and Dolphins is same score');
} else {
    console.log('not winner');
}

let currentDay = new Date().getDay();

switch(currentDay) {
    case 1:
    console.log('Today is: Monday');
    break;

    case 2:
    console.log('Today is: Tuseday');
    break;

    case 3:
    console.log('Today is: Wednesday');
    break;

    case 4:
    console.log('Today is: Thursday');
    break;

    case 5:
    console.log('Today is: Friday');
    break;

    case 6:
    console.log('Today is: Saturday');
    break;

    case 7:
    console.log('Today is: Sunday');
    break;

    default:
        console.log('Out of days');
}

let me = 'old'

console.log(`I a ${2021- 1989} years ${me}`);

const age = 17;
let drink = age >= 18 ? 'Wine' : 'water';
console.log(`I like to dring ${drink}`);


BILL, TIP, TOTAL

const bill = 275;
let tip;

if(bill >= 50 && bill <= 300) {
    tip = bill * 0.15
} else {
    tip = bill * 0.2
}

let total = bill + tip;

console.log(`The bill ${bill} dolar, tip ${tip} dolar and the total ${total}`);

//------------------------------------------------------------------------------------------

function sample() {
    console.log('My first Function');
}

sample();
sample();
sample();


function fruits(apples, oranges) {
    const juice = `Juice with ${apples} Apples and ${oranges} Oranges :)`;
    return juice
}


const appleJuice = fruits(2, 4);
console.log(appleJuice);
console.log(fruits(2, 4));

fruits(0,0);
console.log(fruits(0,0));

function describeCountry(country, population, capitalCity) {
    const CountryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return CountryInfo;

}

console.log(describeCountry('Finland',6 , 'Helsinki'));
console.log(describeCountry('Jordan',11 , 'Amman'));
console.log(describeCountry('England',20 , 'London'));

const calcAge = (yearOfBirth) => {
    const currentDate = new Date().getFullYear();
    let currentAge = currentDate - yearOfBirth;
    return currentAge;
}

console.log(calcAge(1989));

function fruitPices(fruits) {
    return fruits * 4;
}


function fruits(apples, oranges) {
    const applePices = fruitPices(apples);
    const OrangePices = fruitPices(oranges);

    const juice = `Juice with ${applePices} pices of Apples and ${OrangePices} pices of Oranges :)`;
    return juice
}

console.log(fruits(4, 5));

let dolphinsAverage;
let koalasAverage;

let calcAverage = (score1, score2, score3 ) => {
    return (score1 + score2 + score3) / 3;
}

console.log('Dolphins Average: ', dolphinsAverage);
console.log('Koalas Average: ', koalasAverage);


function averageBoth() {
  return (dolphinsAverage + koalasAverage) / 2;
}

console.log('Average Both team: ', averageBoth());

function checkWinner(dolphinsAverage, koalasAverage) {
if(dolphinsAverage >  koalasAverage) {
    return `Dolphins win ${dolphinsAverage} vs. ${koalasAverage}`
} else {
    return `Koalas win ${koalasAverage} vs. ${dolphinsAverage}`
}
}


dolphinsAverage = calcAverage(44, 23, 71);
koalasAverage = calcAverage(65, 54, 49);
console.log(checkWinner(dolphinsAverage, koalasAverage));

dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
console.log(checkWinner(dolphinsAverage, koalasAverage));

const friends = ['Anas', 'Anas', 'Anas'];
console.log(friends);

const numbersExample = new Array(1990, 1991, 1992);

console.log(numbersExample[0]);


console.log(friends.length);
console.log(friends[friends.length -1]);


const mainBill = [125, 555, 44];

function calcTip(basicBill) {
    if(basicBill >= 100) {
        let billTip = (basicBill * 15) + basicBill;
        console.log('The Fill Bill: ' ,billTip, ' plus tip');
    } else {
        console.log('The Fill Bill: ', basicBill);
    }
}

calcTip(mainBill[0]);
calcTip(mainBill[1]);
calcTip(mainBill[2]);



const ziad = {
    firstName: 'Ziad',
   lastName: 'Abuzayyad',
    age: 32,
    friends: ['Anas', 'Ahmad', 'Abdallah']
}

console.log(ziad.firstName);

const key = 'Name';

console.log(ziad['first' + key]);
console.log(ziad['last' + key]);

// const jjj = prompt('age');
// console.log(ziad[jjj]);

ziad.location = 'Jordan';

ziad['job'] = 'Web Designer';

console.log(ziad);

// ziad has 3 friends and his best friend is called Anas


const santanceZiad = `${ziad.firstName} has ${ziad.friends.length} friends, and his best friend is called ${ziad.friends[0]}`;
console.log(santanceZiad);


const ziad = {
   firstName: 'Ziad',
   lastName: 'Abuzayyad',
   birthYear: 1989,
   friends: ['Anas', 'Ahmad', 'Abdallah'],
   hasDriveLincense: true,
   calcAge: function() {
    return new Date().getFullYear() - this.birthYear;
   }
}

console.log(ziad.calcAge());


let mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function() {
      return this.weight / (this.height * this.height);
    }
}

let john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function() {
        return this.weight / (this.height * this.height);
    }
}


console.log(`${john.firstName} ${john.lastName} is weight ${john.weight}KG and ${john.height}CM and his BMI: ${john.calcBMI()}`);
console.log(`${mark.firstName} ${mark.lastName} is weight ${mark.weight}KG and ${mark.height}CM and his BMI: ${mark.calcBMI()}`);

if(mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI ${mark.calcBMI()} is higher than John's ${john.calcBMI()}!`);
} else if(mark.calcBMI() < john.calcBMI()) {
    console.log(`John's BMI ${john.calcBMI()} is higher than Mark's ${mark.calcBMI()}!`);
} else {
    console.log(`John's BMI ${john.calcBMI()} is equal Mark's ${mark.calcBMI()}!`);
}



for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}



const ziad = [
  'Ziad',
 'Abuzayyad',
    1989,
   ['Anas', 'Ahmad', 'Abdallah'],
   true
];

const types = [];

for(let i = 0; i < ziad.length; i++){
    console.log(ziad[i], typeof ziad[i]);
    types.push(typeof ziad[i]);
}

console.log(types);

const years = [1989, 1990, 1993, 1999, 2005];
const finalReualt = [];

for(let i = 0; i < years.length; i++) {
    finalReualt.push(new Date().getFullYear() - years[i]);
}

console.log(finalReualt);


const ziad = [
  'Ziad',
 'Abuzayyad',
    1989,
   ['Anas', 'Ahmad', 'Abdallah'],
   true
];

for(let i = ziad.length - 1; i >=0; i--) {
    console.log(ziad[i], i);
}

for(let i = 1; i <= 5; i++) {
    for(let y = 1; y <= 10; y++) {
        console.log(`this is excrsice ${i} and repetion ${y}`)
    }
}

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


let rep = 1;

while(rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
        console.log(`You Rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
}

const ziad = [
  'Ziad',
 'Abuzayyad',
    1989,
   ['Anas', 'Ahmad', 'Abdallah'],
   true
];

for(let i = ziad.length - 1; i >=0; i--) {
    if(typeof ziad[i] !== 'string') continue;
    if(typeof ziad[i] === 'number') break;
    console.log(ziad[i]);
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let finalBill = [];
let tips = [];

for(let calcTip = 1; calcTip <= bills.length -1; calcTip++) {
    finalBill.push((bills[calcTip] * 0.15) + bills[calcTip]);
    tips.push((bills[calcTip] * 0.15))
}

console.log(bills, tips, finalBill);

//-------------------------------------------------------------------------

const subTeperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const subTeperature2 = [4, -3, -7, -2, 'error', 10, 14, 18, 16, 15, 8, 6];
const teperature = [...subTeperature, ...subTeperature2];

function myArrayMax(x) {
    let max = Math.max.apply(null, x.filter(x => typeof x === 'number'));
    let min = Math.min.apply(null, x.filter(x => typeof x === 'number'));
    let minus = max - - min;
    console.log(minus);
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] == 'string') {
            console.log(x[i]);
        }
    }
}

myArrayMax(teperature);