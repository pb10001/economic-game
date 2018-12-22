import Pile from './pile';
export default class NimAI {
    public piles: Pile[];
    constructor(piles: Pile[]) {
        this.piles = piles;
    }
    public calcGrundy(): number {
        return this.piles.reduce((current: number, next: Pile) => {
            let n: number = next.currentNum();
            return current ^ n;
        }, 0)
    }
    public think(callback: (_: boolean, index: number, num: number) => void): string {
        let end = false;
        let res = '';
        for (let i=0; i<this.piles.length; i++) {
            console.log(i + "番目");
            const p = this.piles[i];
            const restXOR = this.piles.filter((item: Pile) => item !== p).reduce((current: number, p: Pile) => current ^ p.currentNum(), 0);
            const current: number = p.currentNum();
            let num: number = p.currentNum();
            for (; num >= 0; num--) {
                console.log(num + "個");
                if ((num ^ restXOR) === 0) {
                    const x = current - num;
                    callback(true, i, x);
                    end = true;
                    res =  "左から" + (i + 1) + "番目を" + (current - num) + "個取る";
                    return res;
                }
            }
        }
        if (!end) {
            callback(false, 0,0);
            res = "特になし";
        }
        return res;
    }
}