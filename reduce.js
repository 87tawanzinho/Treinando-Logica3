const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// Reduce

const massTotal = characters.reduce((total, amount) => total + amount.mass, 0);
// console.log(massTotal);
const totalHeight = characters.reduce(
  (total, amount) => total + amount.height,
  0
);
// console.log(totalHeight);
const totalCharactersName = characters.reduce(
  (total, amount) => total + amount.name.length,
  0
);
// console.log(totalCharactersName);
