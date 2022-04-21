import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    const countRacesInstaces = this._createdRacesInstances + 1;
    this._createdRacesInstances = countRacesInstaces;
    return this._createdRacesInstances;
  }
}

export default Elf;