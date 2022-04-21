import Race from './Race';

class Halfling extends Race {
  public maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    const countRacesInstaces = this._createdRacesInstances + 1;
    this._createdRacesInstances = countRacesInstaces;
    return this._createdRacesInstances;
  }
}

export default Halfling;