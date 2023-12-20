const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

const allNames = characters.map(({ name }) => name);
const allHeigth = characters.map(({ height }) => height);

const objectWithTwo = characters.map((obj) => ({
  name: obj.name,
  height: obj.height,
}));

const firtsNames = characters.map((obj) => {
  let name = obj.name.split(" ");
  return name[0];
});

console.log(allNames, allHeigth, objectWithTwo, firtsNames);
