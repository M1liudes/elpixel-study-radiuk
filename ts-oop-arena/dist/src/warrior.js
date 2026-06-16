import { Hero } from './hero.js';
export class Warrior extends Hero {
    _armor = 0;
    constructor(name, armor, helth = 150, level = 1) {
        super(name, helth, level);
        this.armor = armor;
    }
    get armor() {
        return this._armor;
    }
    set armor(value) {
        this._armor = value;
    }
    takeDamage(amount) {
        const finalDamage = Math.max(0, amount - this.armor);
        const blockedDamage = amount - finalDamage;
        console.log(`Герой: ${this.name};\nЗаблокировал урон: ${blockedDamage}.`);
        super.takeDamage(finalDamage);
    }
}
//# sourceMappingURL=warrior.js.map