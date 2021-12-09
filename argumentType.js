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

