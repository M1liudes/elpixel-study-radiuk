import { Hero } from './hero.js';
export class Archer extends Hero {
    _arrowCount = 0;
    constructor(name, arrowCount, helth = 70, level = 1) {
        super(name, helth, level);
        this.arrowCount = arrowCount;
    }
    get arrowCount() {
        return this._arrowCount;
    }
    set arrowCount(value) {
        this._arrowCount = value;
    }
    shoot() {
        if (this.health === 0) {
            console.log(`Герой: ${this.name} мёртв;\nНельзя стрелять!`);
        }
        else {
            if (this.arrowCount > 0) {
                this.arrowCount--;
                console.log(`Герой: ${this.name};\nСделал выстрел!; \nСтрел: ${this.arrowCount}.`);
            }
            else {
                console.log(`Герой: ${this.name};\nНет стрел, пополните!`);
            }
        }
    }
    restock(amount) {
        this.arrowCount += amount;
        console.log(`Герой: ${this.name};\nПополнил стрелы: стрел ${this.arrowCount}.`);
    }
}
//# sourceMappingURL=archer.js.map