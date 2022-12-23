import {PlanetaryAge} from '../src/js/calculator.js';

describe('PlanetaryAge', () => {
  test('should correctly return user age on each of the 7 planets', () => {
    let age = 56;
    const planetaryAge = new PlanetaryAge(age);
    expect((planetaryAge.getPlanetaryAge(0, age))).toEqual(233.33);
  })
})