// Importamos la funcionalidad
const resta = require('../src/resta');

describe('Pruebas de la función resta: ', () => {
  test('Restar 2 y 1 es 1', () => {
    expect(resta(2, 1)).toBe(1);
  });

  test('Restar 0 y 1 es -1', () => {
    expect(resta(0, 1)).toBe(-1);
  });

  test('Restar -1 y 3 es -4', () => {
    expect(resta(-1, 3)).toBe(-4);
  });

  test('Restar sin argumentos da error', () => {
    expect( () => resta() ).toThrow(Error);
  });

});