// Random problems

function argumentType(argument) {
    return typeof(argument);
}

function triangleArea(base, height) {
    return (0.5 * base) * height;
}

function checkNumbers (num1, num2) {
    return num1 === 100 || num2 === 100 || (num1 + num2) === 100;
}

function findLongestCountryName(countryList) {
    let longestCountryName = '';
    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].length > longestCountryName.length) {
            longestCountryName = countryList[i];
        }
    }
    return longestCountryName;
}

// https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/

function printEvenNumbers(num) {
    num = 10;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// printEvenNumbers(10);

function printMultiplicationTable(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            console.log(i * j);
        }
    }
}

// printMultiplicationTable(15);

function kilometersToMiles(km) { 
    let miles = km * 0.621371;
    console.log(miles);
    return miles;
}

// kilometersToMiles(5);

function sumNumbersInArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// sumNumbersInArray([1, 2, 3, 4, 5]);

function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

// console.log(reverseArray([1, 5, 3, 1]));