import { Hero } from './hero.js';
export declare class Mage extends Hero {
    mana: number;
    protected _maxMana: number;
    constructor(name: string, maxMana: number, health?: number, level?: number);
    get maxMana(): number;
    set maxMana(value: number);
    castSpell(cost: number, spellName: string): void;
    levelUp(): void;
}
//# sourceMappingURL=mage.d.ts.map