export class PlanetaryAge {
  static PlanetsAndRotations = ([['Mercury', .24], ['Venus', .62], ['Earth', 1], ['Mars', 1.88], ['Jupiter', 11.86], ['Saturn', 29.46], ['Uranus', 84.01], ['Neptune', 164.79]]);

  constructor(age) {
    this.age = age;
  }

  /*getPlanetaryAge(i, age) {
    let planetAge = (age / PlanetaryAge.PlanetsAndRotations[i][1]).toFixed(2);
    return parseFloat(planetAge);
  }*/

  loopThroughAllPlanets() {

  }
}