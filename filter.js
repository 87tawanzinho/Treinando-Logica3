// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters

// filter

const massMoreHundred = characters.filter((obj) => obj.mass >= 100);
const heigthLess200 = characters.filter((obj) => obj.height <= 200);
const getMale = characters.filter((obj) => obj.gender === "male");
const getFemale = characters.filter((obj) => obj.gender === "female");
// console.log(massMoreHundred);
// console.log(heigthLess200);
// console.log(getMale);
console.log(getFemale);
