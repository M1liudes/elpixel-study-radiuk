import { Hero } from './hero.js';
export declare class Archer extends Hero {
    protected _arrowCount: number;
    constructor(name: string, arrowCount: number, helth?: number, level?: number);
    get arrowCount(): number;
    set arrowCount(value: number);
    shoot(): void;
    restock(amount: number): void;
}
//# sourceMappingURL=archer.d.ts.map