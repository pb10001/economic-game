export default class Debt {
    private static ID: number = 0;
    public principal: number; // 元本
    public interestRate: number; // 利息
    public total: number; // 合計額

    private _id: number; // ID
    public get id(): number {
        return this._id;
    }
    constructor(principal: number, interestRate: number) {
        Debt.ID++;
        this._id = Debt.ID;
        this.principal = principal;
        this.interestRate = interestRate;
        this.total = principal;
    }
    public increase(): number {
        this.total += Math.floor(this.total * this.interestRate / 10) * 10;
        return this.total;
    }
}
