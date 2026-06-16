import { ICharacter } from './ICharacter.js';

export abstract class Hero implements ICharacter {
    protected _name: string = '';
    protected _maxHealth: number;
    public health: number;
    public level: number;

    constructor(name: string, health: number, level: number) {
        this.name = name;
        this.health = health;
        this._maxHealth = health;
        this.level = level;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public takeDamage(amount: number): void {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            console.log(`Герой: ${this.name}\nОтправляеться на базу!`);
        } else {
            console.log(`Герой: ${this.name}\nПолучено урона: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }

    public heal(amount: number): void {
        this.health += amount;
        if (this.health >= this._maxHealth) {
            this.health = this._maxHealth;
            console.log(`Герой: ${this.name}\nЗдоровье: ${this._maxHealth} фулл хп!`);
        } else {
            console.log(`Герой: ${this.name}\nИсцелил: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }

    public levelUp(): void {
        this.level += 1;
        this.health = this._maxHealth;
        console.log(`Герой: ${this.name}\nПовысил уровень: ${this.level}, здоровье востановилось; \nЗдоровье: ${this.health} хп.`);
    }
}