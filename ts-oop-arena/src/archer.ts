import { Hero } from './hero.js';

export class Archer extends Hero {
    protected _arrowCount: number = 0;

    constructor (name: string, arrowCount: number, helth: number = 70, level: number = 1) {
        super(name, helth, level);
        this.arrowCount = arrowCount;
    }

    public get arrowCount() {
        return this._arrowCount;
    }

    public set arrowCount(value: number) {
        this._arrowCount = value;
    }

    public shoot(): void {
        if (this.health === 0) {
            console.log(`Герой: ${this.name} мёртв;\nНельзя стрелять!`);
        } else {
            if (this.arrowCount > 0) {
                this.arrowCount--;
                console.log(`Герой: ${this.name};\nСделал выстрел!; \nСтрел: ${this.arrowCount}.`);
            } else {
                console.log(`Герой: ${this.name};\nНет стрел, пополните!`);
            }
        }
    }

    public restock(amount: number): void {
        this.arrowCount += amount;
        console.log(`Герой: ${this.name};\nПополнил стрелы: стрел ${this.arrowCount}.`);
    }
}