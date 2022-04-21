import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private static archetypesInstaces = 0;
  private _energyType: EnergyType = 'stamina';

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    const countArchetypesInstaces = this.archetypesInstaces + 1;
    this.archetypesInstaces = countArchetypesInstaces;
    return this.archetypesInstaces;
  }
}

export default Warrior;