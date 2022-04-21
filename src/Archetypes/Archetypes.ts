import { EnergyType } from '../Energy';

abstract class Archetypes {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  constructor(
    name: string, 
    special = 0, 
    cost = 0,
  ) {
    this.name = name;
    this.special = special;
    this.cost = cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType():EnergyType;
}

export default Archetypes;