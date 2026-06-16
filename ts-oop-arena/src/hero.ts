import type { ICharacter } from './ICharacter.js';

abstract class Hero implements ICharacter {
    protected _name: string = '';
    protected _health: number = 0;
    public level: number;

    constructor(name: string, health: number = 100, level: number = 1) {
        this.name = name;
        this.health = health;
        this.level = level;
    }

    public get name(): string {
        return this._name;
    }

    public get health(): number {
        return this._health;
    }

    public set name(value: string) {
        this._name = value;
    }

    public set health(value: number) {
        if (value > 100) {
            this._health = 100;
        } else {
            if (value < 0) {
                this._health = 0;
            } else {
                this._health = value;
            }
        }
    }

    public takeDamage(amount: number): void {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            console.log(`Герой: ${this.name} \nОтправляеться на базу!`);
        } else {
            console.log(`Герой: ${this.name}\nПолучено урона: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }

    public heal(amount: number): void {
        this.health += amount;
        if (this.health >= 100) {
            this.health = 100;
            console.log(`Герой: ${this.name} \nЗдоровье: ${this.health} фулл хп!`);
        } else {
            console.log(`Герой: ${this.name}\n Исцелил: ${amount} хп; \nЗдоровье: ${this.health} хп.`);
        }
    }

    public levelUp(): void {
        this.level += 1;
        this.health = 100;
        console.log(`Герой: ${this.name}\n Повысил уровень: ${this.level}, здоровье востановилось; \nЗдоровье: ${this.health} хп.`);
    }
}