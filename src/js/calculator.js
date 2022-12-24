export class PlanetaryAge {
  static PlanetsAndRotations = [['Mercury', .24], ['Venus', .62], ['Earth', 1], ['Mars', 1.88], ['Jupiter', 11.86], ['Saturn', 29.46], ['Uranus', 84.01], ['Neptune', 164.79]];

  constructor(age) {
    this.age = age;
  }

  getPlanetaryAge(i, age) {
    let planetAge = (age / PlanetaryAge.PlanetsAndRotations[i][1]).toFixed(2);
    return parseFloat(planetAge);
  }

  loopThroughAllPlanets(age) {
    let value = [];
      for(let i = 0; i < PlanetaryAge.PlanetsAndRotations.length; i++) {    
        value.push(this.getPlanetaryAge(i, age));
      }
    return value;
  }

  messageForPlanetaryAge(age) {
    let message = ``;
    let planetaryAgeArray = this.loopThroughAllPlanets(age);
    for(let i = 0; i < planetaryAgeArray.length; i++) {
      message += `Your age on ${PlanetaryAge.PlanetsAndRotations[i][0]} is ${planetaryAgeArray[i]}!\n`;
    }
    return message;
  }

  messageForPastAndFutureBirthdays(age, newAge) {    
    let years = age - newAge;
    let yearsMessage = ``;
    let birthdayMessage = ``;
    let planetaryAgeArray = [];

    if (years > 0) {
      birthdayMessage = `have passed`;
    } else if (years <= 0) {
      birthdayMessage = 'have yet to pass';
      years *= (-1);
    } 

    planetaryAgeArray = this.loopThroughAllPlanets(years);

    for(let i = 0; i < planetaryAgeArray.length; i++) {
      yearsMessage += `${planetaryAgeArray[i]} years ${birthdayMessage} on ${PlanetaryAge.PlanetsAndRotations[i][0]}\n` 
    } 
    
    return yearsMessage;
  }
}
