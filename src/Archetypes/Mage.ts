import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private static archetypesInstaces = 0;
  private _energyType: EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    const countArchetypesInstaces = this.archetypesInstaces + 1;
    this.archetypesInstaces = countArchetypesInstaces;
    return this.archetypesInstaces;
  }
}

export default Mage;