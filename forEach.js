var elements = [1, 2, 3];

function isPar(element) {
  if (element % 2 === 0) {
    console.log(" é par " + element);
  } else {
    console.log(" é impar " + element);
  }
}

elements.forEach(isPar);
