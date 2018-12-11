export default class AnnualReportModel {
    /* アニュアルレポート */
    public year: number; // 期

    /* 資産 */
    public cash: number = 0; // 現金
    public land: number = 0; // 土地
    /* 収益 */
    public revenue: number = 0; // 売り上げ
    /* 費用 */
    public purchaseCost: number = 0; // 仕入れ費用
    public cultivationCost: number = 0; // 栽培コスト
    public landLoss: number = 0; // 土地売却損

    constructor(year: number) {
        this.year = year;
    }
    public totalCost(): number {
        /* 費用の合計 */
        return this.purchaseCost + this.cultivationCost + this.landLoss;
    }
    public netAsset(): number {
        /* 純資産 */
        return this.cash + this.land;
    }
    public netIncome(): number {
        /* 粗利 */
        return this.revenue - this.totalCost();
    }
    public toString(): string {
        /* 文字列化 */
        return [
            '現金: ' + this.cash + 'P',
            '土地: ' + this.land + 'P',
            '純資産: ' + this.netAsset() + 'P',
            '売上: ' + this.revenue + 'P',
            '費用: ' + this.totalCost() + 'P',
            '粗利: ' + this.netIncome() + 'P',
        ].join('\n');
    }
}
