import Race from './Race';

class Elf extends Race {
  public maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    const countRacesInstaces = this._createdRacesInstances + 1;
    this._createdRacesInstances = countRacesInstaces;
    return this._createdRacesInstances;
  }
}

export default Elf;