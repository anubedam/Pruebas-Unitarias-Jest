// Importamos la funcionalidad
const suma = require('../src/suma');

describe('Pruebas de la función suma: ', () => {

  beforeEach(() => {
    // Esto se realiza antes de que se ejecuten cada uno de los tests

    // console.log("Antes de cada test");
  });

  afterEach(() => {
    // Esto se ejecuta después de que se ejecuten cada uno de los test

    // console.log("Después de cada test\n");
  });

  beforeAll(() => {
    // Esto se realiza antes de todos los tests (una única vez)

    console.log("Antes de todos los tests");
  });

  afterAll(() => {
    // Esto se ejecuta después de todos los tests (una única vez)

    console.log("Después de todos los tests");
  });

  test('Sumar 2 + 1 es 3', () => {
    //console.log("Sumar 2 + 1 es 3");
    expect(suma(2, 1)).toBe(3);
  });

  test('Sumar 0 + 1 es 1', () => {
    //console.log("Sumar 0 + 1 es 1");
    expect(suma(0, 1)).toBe(1);
  });

  test('Sumar -1 + 3 es 2', () => {
    //console.log("Sumar -1 + 3 es 2");
    expect(suma(-1, 3)).toBe(2);
  });

  test('Suma sin argumentos da error', () => {
    //console.log("Suma sin argumentos da error");
    expect( () => suma() ).toThrow(Error);
  });

});