const api = require('./juros')

test('jurosSimples', () => {
  const juros1 = api.jurosSimples(10, 0.1, 10)
  expect(juros1).toBe("10.00")
})


test('montanteJurosSimples', () => {
  const juros2 = api.montanteJurosSimples(10, 0.1, 10)
  expect(juros2).toBe("20.00")
})


test('montanteJurosCompostos', () => {
  const juros3 = api.montanteJurosCompostos(10, 0.1, 10)
  expect(juros3).toBe("25.94")
})


test('apenasJuros', () => {
  const juros4 = api.apenasJuros(10, 0.1, 10)
  expect(juros4).toBe("15.94")
})


