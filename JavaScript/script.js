/*let js = 'amazing';
// if (js === 'amazing') alert("JavaScript is FUN!");
console.log(10 + 20 + 50 - 10);
console.log("Hello");
console.log(23);
let firstName = 'Vaisvik';
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
let fname = "Vaisvik";
console.log(typeof fname);
console.log(typeof null);

Excercise - 1

const massOfMark = 78;
const heightOfMark = 1.69;
const massOfJohn = 92;
const heightOfJohn = 1.95;

const massOfMark = 95;
const heightOfMark = 1.88;
const massOfJohn = 85;
const heightOfJohn = 1.76;

const BMIMark = massOfMark / heightOfMark ** 2;
const BMIJohn = massOfJohn  / heightOfJohn ** 2;
const markHeigerBMI = (BMIMark > BMIJohn);
console.log(BMIMark, BMIJohn, markHeigerBMI);

if(BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


Type Conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('hello'));
console.log(typeof NaN);
console.log(typeof(String(23)));

Type Coercion
console.log("I am "+ 23 +" years old!");

//Test data
const avgOfDolphins = (96+108+89)/3;
const avgOfKoalas = (88+91+110)/3;
console.log(avgOfDolphins, avgOfKoalas);

if(avgOfDolphins > avgOfKoalas) {
    console.log("Winner team is dolphins!");
} 
else if(avgOfDolphins < avgOfKoalas) {
    console.log("Winner team is koalas!");
} 
else if (avgOfDolphins === avgOfKoalas) {
    console.log("Match draw!");
}

// Bonus 1
const avgOfDolphins = (97+112+101)/3;
const avgOfKoalas = (105+95+123)/3;
console.log(avgOfDolphins, avgOfKoalas);

if(avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
    console.log("Winner team is dolphins!");
} 
else if(avgOfDolphins < avgOfKoalas && avgOfKoalas >= 100) {
    console.log("Winner team is koalas!");
} 
else if (avgOfDolphins === avgOfKoalas) {
    console.log("Match draw!");
}

// Bonus 2

const avgOfDolphins = (96+108+89)/3;
const avgOfKoalas = (88+91+110)/3;
console.log(avgOfDolphins, avgOfKoalas);

if(avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
    console.log("Winner team is dolphins!");
} 
else if(avgOfDolphins < avgOfKoalas && avgOfKoalas >= 100) {
    console.log("Winner team is koalas!");
} 
else if (avgOfDolphins === avgOfKoalas && avgOfDolphins >= 100 && avgOfKoalas >= 100) {
    console.log("Match draw!");
} else {
    console.log("No one team wins!");
}
const bill = 175;
const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and te total value ${bill + tip}`);


function logger() {
    console.log("Greetings!");
}
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

// Function declaration
function calcAge1(birthYear) {   
    return 2037 - birthYear;
}

const age1 = calcAge1(2022);
// console.log(`The age is ${age} year!`);

// Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age1, age2);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearUntilRetierment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retierment = 65 - age;
// return retierment;
return `${firstName} retiers in ${retierment} years`;
}
console.log(yearUntilRetierment(1991, 'Vick'));

const cutpieces = function (fruit) {
    return fruit * 4;
}
const fruitProcessor = function(apples, oranges){
    const applePieces = cutpieces(apples);
    const orangePieces = cutpieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange!`;
    return juice;
}

console.log(fruitProcessor(2,3));

const cuttingParts = function(cars) {
    return cars * 10;
}

const carProcessor = function (BMW, Volvo) {
    const bmwParts = cuttingParts(BMW);
    const volvoParts = cuttingParts(Volvo);
    
    const car = `Cars with ${bmwParts} parts of bmw and ${volvoParts} parts of volvo!`;
    return car;
}
console.log(carProcessor(8,5));
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(10,30,20));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

 const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log(`No team wins...`);
    }
 }
 checkWinner(scoreDolphins, scoreKoalas);
 checkWinner(45, 12);

 // Test 2
 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoreDolphins, scoreKoalas);
 checkWinner(scoreDolphins, scoreKoalas);
 
 
 const calcAge = function(birthYear) {
     return 2032 - birthYear;
    }
    
const years = [1999, 2020, 1985, 2000, 2025];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
console.log(age1,age2);

const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(age);

const cars = ['Honda', 'BMW', 'Volvo'];
// Add elements
const newLength = cars.push('Audi');
console.log(cars);
console.log(newLength);

cars.unshift('Tata');
console.log(cars);

// Remove elements
cars.pop();
const popped = cars.pop();
console.log(popped);
console.log(cars);

cars.shift();
console.log(cars);

console.log(cars.indexOf('BMW'));
console.log(cars.indexOf('av'));

console.log(cars.includes('BMW'));
*/

const calcTip = function(bill) {
    return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals =[bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);