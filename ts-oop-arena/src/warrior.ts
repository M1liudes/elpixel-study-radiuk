import { Hero } from './hero.js';

export class Warrior extends Hero {
    protected _armor: number = 0;

    constructor (name: string, armor: number, helth: number = 150, level: number = 1) {
        super(name, helth, level);
        this.armor = armor;
    }

    public get armor() {
        return this._armor;
    }

    public set armor(value: number) {
        this._armor = value;
    }

    public takeDamage(amount: number): void {
        const finalDamage = Math.max(0, amount - this.armor);
        const blockedDamage = amount - finalDamage;

        console.log(`Герой: ${this.name};\nЗаблокировал урон: ${blockedDamage}.`);

        super.takeDamage(finalDamage);
    }
}