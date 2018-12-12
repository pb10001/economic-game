const EMPTY: string = '空';
export default class Vegetable {
    public static empty(): Vegetable {
        return new Vegetable(EMPTY, [], 0, 0, 0, 0);
    }
    public name: string;
    public seed: number[];
    public span: number;
    public risk: number; // 収穫に失敗する確率 0~1
    public initPrice: number;
    public value: number;
    public url: string;
    public age: number = 0; // 植えられてからの時間
    public isHarvestable: boolean = false;
    constructor(name: string, seed: number[], span: number, risk: number, initPrice: number, value: number, url?: string) {
        this.name = name;
        this.seed = seed;
        this.span = span;
        this.risk = risk;
        this.initPrice = initPrice;
        this.value = value;
        this.url = url || '';
    }
    public copy(): Vegetable {
        return new Vegetable(this.name, this.seed, this.span, this.risk, this.initPrice, this.value, this.url);
    }
    public isEmpty(): boolean {
        return this.name === EMPTY;
    }
    public isSeedable(month: number): boolean {
        return this.seed.includes(month);
    }
    public getAge() {
        if (this.name === EMPTY) { return; }
        if (this.age < this.span) {
            this.age++;
        }
        if (this.age >= this.span) {
            this.isHarvestable = true;
        }
    }
}
