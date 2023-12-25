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

const x = characters.sort((a, b) => {
  if (a.height < b.height) {
    return -1;
  } else {
    return true;
  }
});

const array1 = [9, 8, 7, 100, 6];
const names = ["agua", "yorgut", "bacia", "coca"];
console.log(array1.sort((a, b) => b - a));
// a - b é na ordem correta
// b - a é de trás p frnete
console.log(
  names.sort((a, b) => {
    return a.localeCompare(b);
  })
);
