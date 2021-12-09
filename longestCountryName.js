function findLongestCountryName(countryList) {
    let longestCountryName = '';
    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].length > longestCountryName.length) {
            longestCountryName = countryList[i];
        }
    }
    return longestCountryName;
}
