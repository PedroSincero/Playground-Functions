// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let calculo = (base * heigth) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(words) {
  let removeSpace = words.split(' ');
  return removeSpace;
}

// Desafio 4
function concatName(name) {
  let first = name.shift();
  let last = name.pop();
  let junction = last + ', ' + first;
  return junction;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  let finalResult = resultWins + ties;
  return finalResult;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
