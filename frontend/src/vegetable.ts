export default class Vegetable {
    public name: string;
    public seed: number[];
    public span: number;
    public risk: number;
    public price: number;
    public value: number;
    public url: string;
    constructor(name: string, seed: number[], span: number, risk: number, price: number, value: number, url?: string) {
        this.name = name;
        this.seed = seed;
        this.span = span;
        this.risk = risk;
        this.price = price;
        this.value = value;
        this.url = url || '';
    }
    public isSeedable(month: number): boolean {
        return this.seed.includes(month);
    }
}
