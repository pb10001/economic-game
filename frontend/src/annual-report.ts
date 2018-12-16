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
    public interestExpense: number = 0; // 支払利息

    constructor(year: number) {
        this.year = year;
    }
    public copy(): AnnualReportModel {
        /* コピー */
        const report = new AnnualReportModel(this.year);
        report.cash = this.cash;
        report.land = this.land;
        report.debt = this.debt;
        report.accuredInterest = this.accuredInterest;
        report.revenue = this.revenue;
        report.purchaseCost = this.purchaseCost;
        report.cultivationCost = this.cultivationCost;
        report.landLoss = this.landLoss;
        report.interestExpense = this.interestExpense;
        return report;
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
        return this.purchaseCost + this.cultivationCost + this.landLoss + this.interestExpense;
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
            '純資産: ' + this.netAsset() + 'P',
            '- 現金: ' + this.cash + 'P',
            '- 土地: ' + this.land + 'P',
            '- 借金(元本): ' + this.debt + 'P',
            '- 未払利息: ' + this.accuredInterest + 'P',
            '収益: ' + this.revenue + 'P',
            '- 売上: ' + this.revenue + 'P',
            '費用: ' + this.totalCost() + 'P',
            '- 種購入費: ' + this.purchaseCost + 'P',
            '- 栽培費: ' + this.cultivationCost + 'P',
            '- 土地売却損: ' + this.landLoss + 'P',
            '- 支払利息: ' + this.interestExpense + 'P',
            '------',
            '粗利: ' + this.netIncome() + 'P',
            '粗利率' + this.profitability() + '%',
        ].join('\n');
    }
}
