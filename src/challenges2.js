// Desafio 10
function techList(techs, name) {
  let result = [];
  techs = techs.sort();
  if (techs.length > 0) {
    for (let i of techs) {
      result.push({
        tech: i,
        name,
      });
    }
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
