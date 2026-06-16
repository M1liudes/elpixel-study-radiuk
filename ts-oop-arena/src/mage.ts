import { Hero } from './hero.js';

export class Mage extends Hero {
    public mana: number;
    protected _maxMana: number = 0;

    constructor (name: string, maxMana: number, health: number = 50, level: number = 1) {
        super(name, health, level);
        this.mana = maxMana;
        this.maxMana = maxMana;
    }

    public get maxMana() {
        return this._maxMana;
    }

    public set maxMana(value: number) {
        this._maxMana = value;
    }

    public castSpell(cost: number, spellName: string): void {
        if (this.health === 0) {
            console.log(`Герой: ${this.name} мёртв;\nНельзя применить способность ${spellName}!`);
        } else {
            if (this.mana < cost) {
                console.log(`Герой: ${this.name};\nНедостаточно маны для ${spellName}.`);
            } else {
                this.mana -= cost;
                console.log(`Герой: ${this.name};\nИспользовал ${spellName}; \nМана: ${this.mana}.`);
            }
        }
    }

    public override levelUp(): void {
        super.levelUp();
        this.mana = this.maxMana;
        console.log(`Мана: ${this.mana}.`);
    }
}