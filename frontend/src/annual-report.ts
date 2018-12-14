export default class AnnualReportModel {
    /* アニュアルレポート */
    public year: number; // 期

    /* 資産 */
    public cash: number = 0; // 現金
    public land: number = 0; // 土地
    /* 負債 */
    public debt: number = 0; // 借入金
    public accuredInterest: number = 0; // 未払利息
    /* 収益 */
    public revenue: number = 0; // 売上
    /* 費用 */
    public purchaseCost: number = 0; // 仕入費用
    public cultivationCost: number = 0; // 栽培コスト
    public landLoss: number = 0; // 土地売却損
    public interest: number = 0; // 支払利息

    constructor(year: number) {
        this.year = year;
    }
    public totalAsset(): number {
        /* 資産の合計 */
        return this.cash + this.land;
    }
    public totalDebt(): number {
        /* 負債の合計 */
        return this.debt + this.accuredInterest;
    }
    public netAsset(): number {
        /* 純資産 */
        return this.totalAsset() - this.totalDebt();
    }
    public totalGain(): number {
        /* 収益の合計 */
        return this.revenue;
    }
    public totalCost(): number {
        /* 費用の合計 */
        return this.purchaseCost + this.cultivationCost + this.landLoss;
    }
    public netIncome(): number {
        /* 粗利 */
        return this.revenue - this.totalCost();
    }
    public profitability(): number {
        /* 粗利率(小数第一位まで) */
        return Math.round(1000 * this.netIncome() / this.revenue) / 10;
    }
    public toString(): string {
        /* 文字列化 */
        return [
            '現金: ' + this.cash + 'P',
            '土地: ' + this.land + 'P',
            '負債: ' + this.totalDebt() + 'P',
            '純資産: ' + this.netAsset() + 'P',
            '売上: ' + this.revenue + 'P',
            '費用: ' + this.totalCost() + 'P',
            '粗利: ' + this.netIncome() + 'P',
            '粗利率' + this.profitability() + '%',
        ].join('\n');
    }
}
