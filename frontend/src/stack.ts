export default class StackModel {
    public id: number;
    public stones: number[] = [];
    constructor(id: number, num: number) {
        this.id = id;
        for (let i = 0; i < num; i++) {
            this.stones.push(i);
        }
    }
    public remove(num: number): void {
        if (num > this.stones.length) { return; }
        for (let i = num; i > 0; i--) {
            this.stones = this.stones.filter((x) => x !== this.stones.length - i);
        }
    }
    public isZero(): boolean {
        return this.stones.length === 0;
    }
    public currentNum(): number {
        return this.stones.length;
    }
}
