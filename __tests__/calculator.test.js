import {PlanetaryAge} from '../src/js/calculator.js';

describe('PlanetaryAge', () => {
  /*test('should correctly return user age on each of the 8 planets', () => {
    let age = 56;
    const planetaryAge = new PlanetaryAge(age);
    expect(planetaryAge.getPlanetaryAge(0, age)).toEqual(233.33);
    expect(planetaryAge.getPlanetaryAge(1, age)).toEqual(90.32);
    expect(planetaryAge.getPlanetaryAge(2, age)).toEqual(56);
    expect(planetaryAge.getPlanetaryAge(3, age)).toEqual(29.79);
    expect(planetaryAge.getPlanetaryAge(4, age)).toEqual(4.72);
    expect(planetaryAge.getPlanetaryAge(5, age)).toEqual(1.90);
    expect(planetaryAge.getPlanetaryAge(6, age)).toEqual(.67)
    expect(planetaryAge.getPlanetaryAge(7, age)).toEqual(.34);
  })*/

  test('should loop through planet arrays to return an array with age conversion listed at index of corresponding planet', () => {
    let age = 56;
    const planetaryAge = new PlanetaryAge(age);
    expect(planetaryAge.loopThroughAllPlanets(age)).toEqual([233.33, 90.32, 56, 29.79, 4.72, 1.9, .67, .34]);
  })
})