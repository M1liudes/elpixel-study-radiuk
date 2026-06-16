import { Hero } from './hero.js';
export class Mage extends Hero {
    mana;
    _maxMana = 0;
    constructor(name, maxMana, health = 50, level = 1) {
        super(name, health, level);
        this.mana = maxMana;
        this.maxMana = maxMana;
    }
    get maxMana() {
        return this._maxMana;
    }
    set maxMana(value) {
        this._maxMana = value;
    }
    castSpell(cost, spellName) {
        if (this.health === 0) {
            console.log(`Герой: ${this.name} мёртв;\nНельзя применить способность ${spellName}!`);
        }
        else {
            if (this.mana < cost) {
                console.log(`Герой: ${this.name};\nНедостаточно маны для ${spellName}.`);
            }
            else {
                this.mana -= cost;
                console.log(`Герой: ${this.name};\nИспользовал ${spellName}; \nМана: ${this.mana}.`);
            }
        }
    }
    levelUp() {
        super.levelUp();
        this.mana = this.maxMana;
        console.log(`Мана: ${this.mana}.`);
    }
}
//# sourceMappingURL=mage.js.map