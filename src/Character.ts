import Archetypes, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Race, { Energy } from './Races';
import Elf from './Races/Elf';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetypes;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  get race(): Race {
    return this._race;
  }

  get archetype(): Archetypes {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  special(enemy: Fighter): void {
    const lifeEnemy = enemy.lifePoints + this.strength;
    enemy.receiveDamage(lifeEnemy);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }
}

export default Character;