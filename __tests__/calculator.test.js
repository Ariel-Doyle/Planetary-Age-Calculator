import {PlanetaryAge} from '../src/js/calculator.js';

describe('PlanetaryAge', () => {
  test('should correctly return user age on each of the 8 planets', () => {
    let age = 56;
    const planetaryAge = new PlanetaryAge();
    expect(planetaryAge.getPlanetaryAge(0, age)).toEqual(233.33);
    expect(planetaryAge.getPlanetaryAge(1, age)).toEqual(90.32);
    expect(planetaryAge.getPlanetaryAge(2, age)).toEqual(56);
    expect(planetaryAge.getPlanetaryAge(3, age)).toEqual(29.79);
    expect(planetaryAge.getPlanetaryAge(4, age)).toEqual(4.72);
    expect(planetaryAge.getPlanetaryAge(5, age)).toEqual(1.90);
    expect(planetaryAge.getPlanetaryAge(6, age)).toEqual(.67)
    expect(planetaryAge.getPlanetaryAge(7, age)).toEqual(.34);
  });

  test('should loop through planet arrays to return an array with age conversion listed at index of corresponding planet', () => {
    let age = 56;
    const planetaryAge = new PlanetaryAge();
    expect(planetaryAge.loopThroughAllPlanets(age)).toEqual([233.33, 90.32, 56, 29.79, 4.72, 1.9, .67, .34]);
  });

  test('should return the message "Your age on <planet> is <age>" for each planet', () => {
    let age = 56;
    const planetaryAge = new PlanetaryAge();
    expect(planetaryAge.messageForPlanetaryAge(age)).toEqual('Your age on Mercury is 233.33!\nYour age on Venus is 90.32!\nYour age on Earth is 56!\nYour age on Mars is 29.79!\nYour age on Jupiter is 4.72!\nYour age on Saturn is 1.9!\nYour age on Uranus is 0.67!\nYour age on Neptune is 0.34!\n');
  });

  test('should return a message that includes "years have passed" for years on each planet from current age to past age', () => {
    let age = 56;
    let newAge = 43;
    const planetaryAge = new PlanetaryAge();
    expect(planetaryAge.messageForPastAndFutureBirthdays(age, newAge)).toEqual('54.17 years have passed on Mercury\n20.97 years have passed on Venus\n13 years have passed on Earth\n6.91 years have passed on Mars\n1.1 years have passed on Jupiter\n0.44 years have passed on Saturn\n0.15 years have passed on Uranus\n0.08 years have passed on Neptune\n');
  })

  test('should return a message that includes "years have yet to pass" for years on each planet from current age to future age', () => {
    let age = 56;
    let newAge = 61;
    const planetaryAge = new PlanetaryAge();
    expect(planetaryAge.messageForPastAndFutureBirthdays(age, newAge)).toEqual('20.83 years have yet to pass on Mercury\n8.06 years have yet to pass on Venus\n5 years have yet to pass on Earth\n2.66 years have yet to pass on Mars\n0.42 years have yet to pass on Jupiter\n0.17 years have yet to pass on Saturn\n0.06 years have yet to pass on Uranus\n0.03 years have yet to pass on Neptune\n');
  })


});