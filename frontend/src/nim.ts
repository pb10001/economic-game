import Pile from './pile';
export default class Nim {
    public turnNum: number;
    public isEnd: boolean;
    public actionExists: boolean;
    public winner: number;
    public piles: Pile[];
    public selectedIndex: number;
    constructor() {
        this.turnNum = 0;
        this.isEnd = false;
        this.piles = [];
        this.winner = -1;
        this.selectedIndex = -1;
        this.actionExists = false;
        this.init(5);
    }
    public select(id: number): void {
        if (this.isEnd) { return; }
        this.selectedIndex = id;
    }
    public init(num: number): void{
        for (let i: number = 0; i < num; i++) {
            this.piles.push(new Pile(i + 1, Math.floor(Math.random() * 8) + 1));
        }
    }
    public removeOne(): void {
        if (this.isEnd) { return; }
        this.actionExists = true;
        this.piles.filter((x: Pile) => x.id === this.selectedIndex)
        .map((s: Pile) => s.remove(1));
    }
    public remove(index: number, num: number): void {
        if (this.isEnd) { return; }
        if (this.actionExists) { return; }
        this.actionExists = true;
        this.piles[index].remove(num);
    }
    public next(): void {
        if (this.isEnd) { return; }
        if (!this.actionExists) { return; }
        this.selectedIndex = -1;
        this.actionExists = false;
        if (this.checkEnd()) {
            this.winner = this.turnNum % 2;
            this.isEnd = true;
            return;
        }
        /* 初期化 */
        this.turnNum++;
    }
    public checkEnd(): boolean {
        const res = this.piles.reduce((current, next) => current + next.currentNum(), 0);
        return res === 0;
    }
}