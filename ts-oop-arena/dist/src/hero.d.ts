import { ICharacter } from './ICharacter.js';
export declare abstract class Hero implements ICharacter {
    protected _name: string;
    protected _maxHealth: number;
    health: number;
    level: number;
    constructor(name: string, health: number, level: number);
    get name(): string;
    set name(value: string);
    takeDamage(amount: number): void;
    heal(amount: number): void;
    levelUp(): void;
}
//# sourceMappingURL=hero.d.ts.map