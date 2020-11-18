// Atividade Juros

// 1

const jurosSimples = (c, i, t) => {
  return ((c * i * t).toFixed(2))
}

// 2
const montanteJurosSimples = (c, i, t) => {
  return ((c + (c * i * t)).toFixed(2))
}

// 3 
const montanteJurosCompostos = (c, i, t) => {
  return ((c * Math.pow((1 + i), t)).toFixed(2))
}

// 4
const apenasJuros = (c, i, t) => {
  return (((c * Math.pow((1 + i), t)) - c).toFixed(2))
}

console.log(apenasJuros(10, 0.1, 10))

module.exports = {
  jurosSimples,
  montanteJurosSimples,
  montanteJurosCompostos,
  apenasJuros
}