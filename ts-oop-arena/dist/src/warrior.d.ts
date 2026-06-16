import { Hero } from './hero.js';
export declare class Warrior extends Hero {
    protected _armor: number;
    constructor(name: string, armor: number, helth?: number, level?: number);
    get armor(): number;
    set armor(value: number);
    takeDamage(amount: number): void;
}
//# sourceMappingURL=warrior.d.ts.map